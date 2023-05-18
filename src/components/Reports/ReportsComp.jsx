import React, { useState } from "react";
import { Grid } from "@mui/material";
import Search from "./Search/Search";
import TabularData from "./TabularData/TabularData";
import WaterTreatmentUnit from "./WaterTreatmentUnit/WaterTreatmentUnit";

const ReportsComp = () => {

  const [deviceID, setDeviceID] = useState("")

  return (
    <Grid className="sm:p-[30px] p-5">
      <Grid>
        <Search deviceID={deviceID} setDeviceID={setDeviceID}/>
      </Grid>
      <Grid pt={"40px"}>
        <WaterTreatmentUnit deviceID={deviceID}/>
      </Grid>
      <Grid pt={"40px"}>
        <TabularData />
      </Grid>
    </Grid>
  );
};
export default ReportsComp;
