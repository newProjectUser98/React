import React, { useState } from "react";
import { Grid } from "@mui/material";
import Search from "./Search/Search";
import TabularData from "./TabularData/TabularData";
import WaterTreatmentUnit from "./WaterTreatmentUnit/WaterTreatmentUnit";

const ReportsComp = () => {

  const [deviceID, setDeviceID] = useState("")
  const [selectSiteName, setSelectSiteName] = useState("")
  const [fromDate, setFromDate] = useState(null)
  const [toDate, setToDate] = useState(null)

  return (
    <Grid className="sm:p-[30px] p-5">
      <Grid>
        <Search deviceID={deviceID} setDeviceID={setDeviceID} selectSiteName={selectSiteName} setSelectSiteName={setSelectSiteName}
        fromDate={fromDate} setFromDate={setFromDate}
        toDate={toDate} setToDate={setToDate}/>
      </Grid>
      <Grid pt={"40px"}>
        <WaterTreatmentUnit deviceID={deviceID} fromDate={fromDate} toDate={toDate}/>
      </Grid>
      <Grid pt={"40px"}>
        <TabularData />
      </Grid>
    </Grid>
  );
};
export default ReportsComp;
