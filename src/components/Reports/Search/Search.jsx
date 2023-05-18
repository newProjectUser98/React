import { Grid, Typography } from "@mui/material";
import React from "react";
import DatePickerComp from "./DatePickerComp";
import SearchSection from "./SearchSection";

const Search = ({deviceID, setDeviceID}) => {
  return (
    <Grid container spacing={5} className='items-stretch'>
      <Grid item md={6} lg={8} className='w-full'>
        <SearchSection deviceID={deviceID} setDeviceID={setDeviceID}/>
      </Grid>
      <Grid item md={6} lg={4} className='w-full'>
        <Grid container className="sm:bg-[#F7F7F7]  md:p-5 rounded-[20px] h-full -mt-1" spacing={1}>
          <Grid item sm={12} className='flex items-center justify-start '>
            <Typography
              fontWeight={500}
              color={"#464E5F"}
              fontSize={"13px"}
              fontFamily={"Poppins"}
              className='w-40'
            >
              <span className="sm:block">Date From</span> 
            </Typography>
            <DatePickerComp className='w-full'/>
          </Grid>
          <Grid item sm={12} className='flex items-center justify-start'>
            <Typography
              fontWeight={500}
              color={"#464E5F"}
              fontSize={"13px"}
              fontFamily={"Poppins"}
              className='w-40'
            >
              <span className="sm:block">Date To</span> 
            </Typography>
            <DatePickerComp className='w-full'/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Search;
