import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as SearchIcon } from "../../../assets/icons/ReportsIcon/SearchIcon.svg";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Typography } from "@mui/material";
import axios from "axios";

const SearchSection = ({ deviceID, setDeviceID, selectSiteName, setSelectSiteName }) => {
  const [city, setCity] = useState("");
  const [site, setSite] = useState([])

  const handleChange = (event) => {
    setSelectSiteName(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/topicapi/device_info/")
      .then(res => {
        const companyName = JSON.parse(localStorage.getItem("user")).company_name;
        const sitefilteredData = res.data.filter(obj => obj.company_name === companyName)
        console.log('siteData', sitefilteredData)
        setSite(sitefilteredData)
        console.log('site res data', res.data);
        const devicefilteredData = res.data.filter(obj => obj.site_name === selectSiteName)
        console.log('deviceData', devicefilteredData)
        setDeviceID(devicefilteredData[0].Device_id)
      })
      .catch(err => console.log(err))
  }, [selectSiteName])

  return (
    <Grid
      container
      display={"flex"}
      className="md:bg-[#F7F7F7] bg-none md:px-8 md:py-9 rounded-[20px] sm:flex-row flex-col sm:items-center items-start sm:space-y-3 space-y-3 lg:justify-evenly justify-start"
    >
      <Grid item lg={2} md={12} className='my-1'>
        <Typography fontWeight={500} color={"#3C3744"} fontSize={"13px"}>
          Select Site
        </Typography>
      </Grid>

      <Typography
        fontSize={"13px"}
        className="sm:hidden block"
        fontWeight={500}
      >
        Select Site Name
      </Typography>
      <Grid item lg={5} md={12} className="w-full my-3">
        <FormControl
          sx={{
            width: "100%",
            borderRadius: "10px",
            "& fieldset": { border: "none", outline: "none" },
          }}
          size="small"
          className="sm:bg-[#EAF4F5] bg-[#F0F0F1]"
        >
          <InputLabel
            sx={{
              fontSize: "13px",
              fontWeight: 500,
              textAlign: "center",
              alignContent: "center",
            }}
          >
            Select Site Name
          </InputLabel>
          <Select
            id="city"
            value={selectSiteName}
            label="Select City/State"
            onChange={handleChange}
            placeholder="Select City/State"
          >

            <MenuItem value="">
              <em>None</em>
            </MenuItem>

            {site.map((unit) => {
              return (
                <MenuItem value={unit.site_name}>
                  {unit.site_name}
                </MenuItem>
              )
            })}

          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SearchSection;
