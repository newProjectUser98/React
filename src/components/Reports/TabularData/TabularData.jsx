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

const TabularData = () => {
  const [waterTreatmentUnit, setWaterTreatmentUnit] = useState("");
  const [rwp, setRwp] = useState("");
  const [component, setComponent] = useState("")

  const waterTreatmentDetails = ['Water Treatment Unit', 'Water Dispensing Unit']

  const WaterTreatmentcomponentDetails = [
    'rwp', 'cnd_tds', 'hpp', 'flowsen', 'panel', 'ampv1', 'ampv2', 'ampv3', 'ampv4', 'ampv5'
  ]

  const WaterDispensecomponentDetails = [
    'atm', 'tap1', 'tap2', 'tap3', 'tap4', 'consen'
  ]

  const selectWaterTereatment = (event) => {
    setWaterTreatmentUnit(event.target.value);
    console.log(event.target.value);
  };

  const selectRwp = (event) => {
    setRwp(event.target.value);
  };

  const selectComponent = (event) => {
    setComponent(event.target.value)
    console.log(event.target.value);
  }

  return (
    <Paper
      elevation={0}
      // display={"flex"}
      // justifyContent="space-between"
      // alignItems="center"
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
        <Box className="sm:hidden flex justify-between items-center w-full">
          <Typography
            fontWeight={600}
            fontSize="13px"
            color="white"
            className="relative after:absolute after:bg-white after:h-[4px] after:w-full after:left-0 after:-bottom-1"
          >
            Water Treatment Unit
          </Typography>
          <Typography
            fontWeight={400}
            fontSize="13px"
            color="background: #676767"
          >
            Water Dispensing Unit
          </Typography>
        </Box>
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
          <Grid>
            <Grid pl={"60px"}>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: "200px",
                  backgroundColor: "#F7F7F7",
                  borderRadius: "10px",
                  "& fieldset": { border: "none", outline: "none" },
                }}
                size="small"
              >
                <InputLabel
                  sx={{
                    fontSize: "13px",
                    fontWeight: 500,
                    textAlign: "center",
                    alignContent: "center",
                  }}
                >
                  {/* Water Treatment Unit */}
                  Select Unit
                </InputLabel>
                <Select
                  id="waterTreatmentUnit"
                  value={waterTreatmentUnit}
                  label="Water Treatment Unit"
                  onChange={selectWaterTereatment}
                  placeholder="Water Treatment Unit"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {/* <MenuItem value={1}>Water Treatment Unit</MenuItem>
                  <MenuItem value={2}>Water Dispensing Unit</MenuItem> */}
                  {waterTreatmentDetails.map((unit) => {
                    return (
                      <MenuItem value={unit}>
                        {unit}
                      </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>

              <FormControl
                sx={{
                  m: 1,
                  minWidth: "200px",
                  backgroundColor: "#F7F7F7",
                  borderRadius: "10px",
                  "& fieldset": { border: "none", outline: "none" },
                }}
                size="small"
              >
                <InputLabel
                  sx={{
                    fontSize: "13px",
                    fontWeight: 500,
                    textAlign: "center",
                    alignContent: "center",
                  }}
                >
                  {/* RWP */}
                  Select Component
                </InputLabel>
                {(waterTreatmentUnit === "Water Treatment Unit") &&
                  <Select
                    id="rwp"
                    value={component}
                    label="RWP"
                    onChange={selectComponent}
                    placeholder="RWP"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {WaterTreatmentcomponentDetails.map((comp) => {
                      return (
                        <MenuItem value={comp}>
                          {comp}
                        </MenuItem>
                      )
                    })}
                  </Select>
                }

                {(waterTreatmentUnit === "Water Dispensing Unit") &&
                  <Select
                    id="rwp"
                    value={component}
                    label="RWP"
                    onChange={selectComponent}
                    placeholder="RWP"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {WaterDispensecomponentDetails.map((comp) => {
                      return (
                        <MenuItem value={comp}>
                          {comp}
                        </MenuItem>
                      )
                    })}
                  </Select>
                }
                {/* <Select
                  id="rwp"
                  value={rwp}
                  label="RWP"
                  onChange={selectRwp}
                  placeholder="RWP"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>RWP</MenuItem>
                  <MenuItem value={2}>HPP</MenuItem>
                  <MenuItem value={3}>Panel</MenuItem>
                </Select> */}
              </FormControl>
            </Grid>
          </Grid>
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
        <Box className="sm:hidden flex items-center justify-between px-3 mt-5">
          <Typography fontWeight={400} fontSize={"13px"}>
            Select device
          </Typography>
          <FormControl
            sx={{
              m: 1,
              minWidth: "200px",
              backgroundColor: "#F7F7F7",
              borderRadius: "10px",
              "& fieldset": { border: "none", outline: "none" },
            }}
            size="small"
          >
            <Select
              id="rwp"
              value={rwp}
              label="RWP"
              displayEmpty
              onChange={selectRwp}
              placeholder="RWP"
              sx={{
                bgcolor: "white",
                borderRadius: "10px",
                fontSize: "13px",
                fontWeight: 400,
              }}
            >
              <MenuItem value="">
                <em>Devices</em>
              </MenuItem>
              <MenuItem value={1}>RWP</MenuItem>
              <MenuItem value={2}>HPP</MenuItem>
              <MenuItem value={3}>Panel</MenuItem>
            </Select>
          </FormControl>
        </Box>


        <TableComp component={component}/>
      </Grid>
    </Paper>
  );
};

export default TabularData;
