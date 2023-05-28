import React, { useEffect, useState } from "react";
// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
// import IconButton from "@mui/material/IconButton";
// import { ReactComponent as SearchIcon } from "../../../assets/icons/ReportsIcon/SearchIcon.svg";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Typography } from "@mui/material";
import axios from "axios";

const SearchSection = ({ deviceID, setDeviceID, selectSiteName, setSelectSiteName }) => {
  // const [city, setCity] = useState("");
  const [site, setSite] = useState([])
  const [company, setCompany] = useState([])
  const [selectCompany, setSelectCompany] = useState("")



  useEffect(() => {
    const delay = 1000; // 1 second delay (in milliseconds)

    const timer = setTimeout(() => {
      axios.get("/topicapi/device_info/")
        .then(res => {

          console.log('site res data', res.data);

          const uniqueCompanyNames = [...new Set(res.data.map(device => device.company_name))];

          setCompany(uniqueCompanyNames)

          console.log('unique companies', company);

          // const companyName = JSON.parse(localStorage.getItem("user")).company_name;

          const sitefilteredData = res.data.filter(obj => obj.company_name === selectCompany)

          console.log('siteData', sitefilteredData)

          // Extract unique site names
          const uniqueSiteNames = [...new Set(sitefilteredData.map(obj => obj.site_name))];

          console.log('Unique siteData', uniqueSiteNames);

          setSite(uniqueSiteNames)

          const devicefilteredData = res.data.filter(obj => obj.site_name === selectSiteName)

          console.log('deviceData due to unique site', devicefilteredData)

          setDeviceID(devicefilteredData[0].Device_id)
        })
        .catch(err => console.log(err));
    }, delay);

    // Clear the timer if the component is unmounted or the dependency changes
    return () => clearTimeout(timer);
  },
    // eslint-disable-next-line
    [selectCompany, selectSiteName]);

  const handleSiteChange = (event) => {
    setSelectSiteName(event.target.value);
    console.log('selected site name', event.target.value);
  };

  const handleCompanyChange = (event) => {
    setSelectCompany(event.target.value);
    console.log('selected company name', event.target.value);
  };

  return (
    <Grid
      container
      display={"flex"}
      className="md:bg-[#F7F7F7] bg-none md:px-8 md:py-9 rounded-[20px] sm:flex-row flex-col sm:items-center items-start sm:space-y-3 space-y-3 lg:justify-evenly justify-start"
    >
      {/* <Grid item lg={2} md={12} className='my-1'>
        <Typography fontWeight={500} color={"#3C3744"} fontSize={"13px"}>
          Select Site
        </Typography>
      </Grid> */}

      <Typography
        fontSize={"13px"}
        className="sm:hidden block"
        fontWeight={500}
      >
        Select Company Name
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
            Select Company Name
          </InputLabel>
          <Select
            id="company"
            value={selectCompany}
            label="Select Company"
            onChange={handleCompanyChange}
            placeholder="Select Company"
          >

            <MenuItem value="">
              <em>None</em>
            </MenuItem>

            {company.map((unit) => {
              return (
                <MenuItem value={unit}>
                  {unit}
                </MenuItem>
              )
            })}

          </Select>
        </FormControl>
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
            id="site"
            value={selectSiteName}
            label="Select Site"
            onChange={handleSiteChange}
            placeholder="Select Site"
          >

            <MenuItem value="">
              <em>None</em>
            </MenuItem>

            {site.map((unit) => {
              return (
                <MenuItem value={unit}>
                  {unit}
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
