import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as AlertsIcon } from "../../../assets/icons/ReportsIcon/AlertsIcon.svg";
import { ReactComponent as DownloadIcon } from "../../../assets/icons/ReportsIcon/DownloadIcon.svg";
import TableComp from "./TableComp";

const TabularData = ({Yaxis}) => {

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "40px",
        width: "100%",
      }}
    >
      <Grid
        className={"sm:rounded-t-[40px] rounded-t-[20px] sm:p-[30px] p-4"}
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
        sx={{
          background: "linear-gradient(270deg, #BBE2E4 8.66%, #B68FE7 103.05%)",
        }}
      >
        <Grid
          justifyContent="space-between"
          alignItems="center"
          className="sm:flex hidden"
        >
          <Typography
            fontWeight={500}
            fontSize={"14px"}
            fontFamily={"Poppins"}
            color={"#FFFFFF"}
          >
            Tabular Data
          </Typography>
        </Grid>

        <Grid className="sm:flex hidden">
          <Grid
            display={"flex"}
            justifyContent="space-between"
            alignItems="center"
          >
            <AlertsIcon />
            <Typography
              pl={"10px"}
              fontWeight={400}
              fontSize={"13px"}
              fontFamily={"Poppins"}
              color={"#464E5F"}
            >
              Alerts Only
            </Typography>
          </Grid>
          <Grid pl={"30px"}>
            <DownloadIcon />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        bgcolor={"#F7F7F7"}
        mb={"100px"}
        className=" sm:rounded-b-none rounded-b-[20px] sm:pt-0 pt-7"
      >

        <Box className="sm:hidden flex justify-between bg-white p-5">
          <Box className="flex items-center cursor-pointer">
            <AlertsIcon className="iw-tabular-data__alert" />
            <Typography
              pl={"10px"}
              fontWeight={400}
              fontSize={"13px"}
              fontFamily={"Poppins"}
              color={"#B68FE7"}
            >
              Alerts Only
            </Typography>
          </Box>
          <DownloadIcon className="iw-tabular-data__download" />
        </Box>
        <TableComp Yaxis={Yaxis}/>
      </Grid>
    </Paper>
  );
};

export default TabularData;
