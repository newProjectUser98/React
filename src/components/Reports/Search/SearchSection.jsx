import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as SearchIcon } from "../../../assets/icons/ReportsIcon/SearchIcon.svg";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Typography } from "@mui/material";

const SearchSection = () => {
  const [city, setCity] = useState("");
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <Grid
      container
      display={"flex"}
      className="md:bg-[#F7F7F7] bg-none md:px-8 md:py-9 rounded-[20px] sm:flex-row flex-col sm:items-center items-start sm:space-y-3 space-y-3 lg:justify-evenly justify-start"
    >
      <Grid item lg={1} md={12} className='my-1'>
        <Typography fontWeight={500} color={"#3C3744"} fontSize={"13px"}>
          Select Site
        </Typography>
      </Grid>
      <Grid item lg={5} md={12} className="w-full my-3">
        <Paper
          elevation={0}
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            // width: 400,
            height: "40px",
            borderRadius: "10px",
          }}
          className="sm:bg-[#FFFFFF] bg-[#F0F0F1] sm:flex-row flex-row-reverse"
        >
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              color: "#55A0A9",
              fontSize: "13px",
              fontWeight: 500,
            }}
            placeholder="Search by site name"
            className="sm:m-2 m-0"
          />
          <IconButton type="button" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>

      <Typography
        fontSize={"13px"}
        className="sm:hidden block"
        fontWeight={500}
      >
        Select City/State
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
            Select City/State
          </InputLabel>
          <Select
            id="city"
            value={city}
            label="Select City/State"
            onChange={handleChange}
            placeholder="Select City/State"
          >
            <MenuItem value={1}>City 1</MenuItem>
            <MenuItem value={2}>City 2</MenuItem>
            <MenuItem value={3}>City 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SearchSection;
