import React, { useState } from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import SummaryCard from "./SummaryCard";
import ChartComp from "./ChartComp";
import { Box, Tab, Tabs } from "@mui/material";
import "../ReportComp.scss";

import { ReactComponent as WorkingHoursIcon } from "../../../assets/icons/ReportsIcon/WorkingHoursIcon.svg";
import { ReactComponent as AverageWaterQualityIcon } from "../../../assets/icons/ReportsIcon/AverageWaterQualityIcon.svg";
import { ReactComponent as DownTimeIcon } from "../../../assets/icons/ReportsIcon/DownTimeIcon.svg";
import { ReactComponent as TotalVolumeProducedIcon } from "../../../assets/icons/ReportsIcon/TotalVolumeProducedIcon.svg";
import { ReactComponent as NumberOfFaultsIcon } from "../../../assets/icons/ReportsIcon/NumberOfFaultsIcon.svg";
import { ReactComponent as PermeateFlowRateIcon } from "../../../assets/icons/ReportsIcon/PermeateFlowRateIcon.svg";

const WaterTreatmentUnit = ({ deviceID }) => {
  const [value, setValue] = React.useState(0);


  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  console.log('value in tabpanel', value);
  const SummaryCardData = [
    { value: "120 Hrs", icon: <WorkingHoursIcon />, title: "Working Hours" },
    {
      value: "240",
      icon: <TotalVolumeProducedIcon />,
      title: "Total Volume Produced",
    },
    {
      value: "240",
      icon: <AverageWaterQualityIcon />,
      title: "Average Water Quality",
    },
    {
      value: "XYZ",
      icon: <PermeateFlowRateIcon />,
      title: "Permeate Flow Rate",
    },
    { value: "XYZ", icon: <NumberOfFaultsIcon />, title: "Number Of Faults" },
    { value: "XYZ", icon: <DownTimeIcon />, title: "Down Time" },
  ];
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "40px",
        width: "100%",
      }}
    >
      <Grid
        className={
          "sm:rounded-t-[40px] rounded-t-[20px] sm:items-start items-center iw-water-treatment-unit__warpper"
        }
        display={"flex"}
        sx={{
          height: "69px",
          background: "linear-gradient(270deg, #BBE2E4 8.66%, #B68FE7 103.05%)",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: {
              background: "white",
            },
          }}
        >
          <Tab
            label={
              <Typography
                fontWeight={value === 0 ? 600 : 400}
                fontFamily={"Poppins"}
                textTransform="none"
                className={
                  value === 0
                    ? "sm:text-[16px] text-[14px] sm:text-white text-[#B68FE7]"
                    : "sm:text-[16px] text-[14px] sm:text-[#ECECEC] text-[#464E5F]"
                }
              >
                Water Treatment Unit
              </Typography>
            }
            className="sm:p-5 p-2 sm:text-white "
          />
          <Tab
            label={
              <Typography
                fontWeight={value === 1 ? 600 : 400}
                fontFamily={"Poppins"}
                textTransform="none"
                className={
                  value === 1
                    ? "sm:text-[16px] text-[14px] sm:text-white text-[#B68FE7]"
                    : "sm:text-[16px] text-[14px] sm:text-[#ECECEC] text-[#464E5F]"
                }
              >
                Dispensing Unit
              </Typography>
            }
            className="sm:p-5 p-2 sm:text-white "
          />
        </Tabs>

        {/* <Typography
          fontWeight={600}
          fontFamily={"Poppins"}
          className="sm:text-[18px] text-[14px] sm:p-5 p-2 sm:text-white text-[#B68FE7]"
        >
          Water Treatment Unit
        </Typography>
        <Typography
          fontWeight={500}
          fontFamily={"Poppins"}
          className="sm:text-[18px] text-[14px] sm:p-5 p-2 sm:text-[#ECECEC] text-[#464E5F]"
        >
          Dispensing Unit
        </Typography> */}
      </Grid>

      <TabPanel value={value} index={0}>
        <Grid
          bgcolor={"#F7F7F7"}
          pb={"30px"}
          className="sm:bg-[#F7F7F7] bg-white"
        >
          <Grid container justifyContent="flex-end" className="sm:flex hidden">
            <Typography
              fontWeight={500}
              fontSize={"14px"}
              fontFamily={"Poppins"}
              p={"24px"}
              color={"#464E5F"}
            >
              Summary Overview
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            gap={"20px"}
            className="sm:flex-wrap flex-nowrap sm:justify-evenly 
          justify-start overflow-auto sm:pb-0 p-5 sm:pl-0 iw-Summary-card-data"
          >
            {SummaryCardData.map((item, i) => (
              <SummaryCard
                key={i}
                value={item.value}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </Grid>
          <Grid pt={"30px"}>
            <Divider
              className="border-white"
              variant="middle"
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Grid>
            <ChartComp deviceID={deviceID} value={value} />
          </Grid>
        </Grid>
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        {/* {"Dispensing Unit Data"} */}
        <Grid
          bgcolor={"#F7F7F7"}
          pb={"30px"}
          className="sm:bg-[#F7F7F7] bg-white"
        >
          <Grid container justifyContent="flex-end" className="sm:flex hidden">
            <Typography
              fontWeight={500}
              fontSize={"14px"}
              fontFamily={"Poppins"}
              p={"24px"}
              color={"#464E5F"}
            >
              Summary Overview
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            gap={"20px"}
            className="sm:flex-wrap flex-nowrap sm:justify-evenly 
          justify-start overflow-auto sm:pb-0 p-5 sm:pl-0 iw-Summary-card-data"
          >
            {SummaryCardData.map((item, i) => (
              <SummaryCard
                key={i}
                value={item.value}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </Grid>
          <Grid pt={"30px"}>
            <Divider
              className="border-white"
              variant="middle"
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Grid>
            <ChartComp deviceID={deviceID} value={value} />
          </Grid>
        </Grid>
      </TabPanel>
    </Paper>
  );
};

export default WaterTreatmentUnit;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return <Box {...other}>{value === index && <Box>{children}</Box>}</Box>;
}