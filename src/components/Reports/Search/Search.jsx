import { Grid, Typography } from "@mui/material";
import React from "react";
import DatePickerComp from "./DatePickerComp";
import SearchSection from "./SearchSection";
import { subYears, addYears } from "date-fns";


const Search = ({ deviceID, setDeviceID, selectSiteName, setSelectSiteName, fromDate, setFromDate, toDate, setToDate }) => {

  console.log("fromDate:", fromDate);
  console.log("toDate:", toDate);

    // Calculate the minDate and maxDate based on the selected date in the other date picker
    const minFromDate = subYears(toDate, 2); // Subtract 2 years from the toDate
    const maxToDate = addYears(fromDate, 2); // Add 2 years to the fromDate


  return (
    <Grid container spacing={5} className='items-stretch'>
      <Grid item md={6} lg={8} className='w-full'>
        <SearchSection deviceID={deviceID} setDeviceID={setDeviceID} selectSiteName={selectSiteName} setSelectSiteName={setSelectSiteName} />
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
            <DatePickerComp className='w-full'
              //valueDate={fromDate} onChange={setFromDate} setDate={setFromDate} 
              valueDate={fromDate} setValueDate={setFromDate} 
              minDate={minFromDate}
              maxDate={toDate}/>
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
            <DatePickerComp className='w-full'
              //valueDate={toDate} onChange={setToDate} setDate={setToDate} 
              valueDate={toDate} setValueDate={setToDate} 
              minDate={fromDate}
              maxDate={maxToDate}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Search;
