import React from "react";
import { Grid } from "@mui/material";
import Search from "./Search/Search";
import TabularData from "./TabularData/TabularData";
import WaterTreatmentUnit from "./WaterTreatmentUnit/WaterTreatmentUnit";

const ReportsComp = () => {
  return (
    <Grid className="sm:p-[30px] p-5">
      <Grid>
        <Search />
      </Grid>
      <Grid pt={"40px"}>
        <WaterTreatmentUnit />
      </Grid>
      <Grid pt={"40px"}>
        <TabularData />
      </Grid>
    </Grid>
  );
};
export default ReportsComp;
