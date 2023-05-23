import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";

import { ReactComponent as ChartLine } from "../../../assets/icons/ReportsIcon/ChartLine.svg";
import { ReactComponent as ChartBar } from "../../../assets/icons/ReportsIcon/ChartBar.svg";
import { ReactComponent as ChartBarColor } from "../../../assets/icons/ReportsIcon/ChartBarColor.svg";
import { ReactComponent as ChartLineColor } from "../../../assets/icons/ReportsIcon/ChartLineColor.svg";

import Popup from "../../../hoc/Popup/Popup";
import AddGraph from "./AddGraph";


const SelectOverviewSection = ({ handleChecked, checked, Yaxis, setYaxis, variable, setVariable, setGraphData, graphData, value }) => {

  const [openPopup, setOpenPopup] = useState(false);
  const [component, setComponent] = useState([])
  const [comp_variables, setCompVariables] = useState([])


  const WaterTreatmentcomponentDetails = [
    'rwp', 'cnd_tds', 'hpp', 'flowsen', 'panel', 'ampv1', 'ampv2', 'ampv3', 'ampv4', 'ampv5'
  ]

  const WaterDispensecomponentDetails = [
    'atm', 'tap1', 'tap2', 'tap3', 'tap4', 'consen'
  ]

  const handleChange = (event) => {
    setYaxis(event.target.value);
    console.log("selected component", event.target.value);
  };

  const handleVariableChange = (event) => {
    setVariable(event.target.value)
    console.log('selected variable', event.target.value);
  }

  const handleGraphDataChange = (event) => {
    setGraphData(event.target.value)
    console.log('selected graphData', event.target.value);
  }

  const component_variable_data = {
    cnd_tds: ["spn","tsp","asp","cnd"],

    rwp: ["crt","olc","drc","spn"],

    hpp: ["crt","olc","drc","spn"],

    panel: ["ipv","unv","ovv","nmv","spn","srt","bkt","rst"],

    ampv1: ["rmt","cct","srt","bkt","rst","mot"],

    ampv2: ["rmt","cct","srt","bkt","rst","mot"],

    ampv3: ["rmt","cct","srt","bkt","rst","mot"],

    ampv4: ["rmt","cct","srt","bkt","rst","mot"],

    ampv5: ["rmt","cct","srt","bkt","rst","mot"],

    flowsen: ["fr1","fr2","ff1","ff2"],

    tap1: ["p1","p2","p3","p4"],

    tap2: ["p1","p2","p3","p4"],

    tap3: ["p1","p2","p3","p4"],

    tap4: ["p1","p2","p3","p4"],

    consen: ["cnd","spn","asp"],

    atm: ["ndv","nta","tmp","ntp","nov","vl1","vl2","vl3","vl4","re1","re2","re3","re4"]
  }

  useEffect(() => {
    if (Yaxis === 'cnd_tds') {
      setCompVariables(component_variable_data.cnd_tds)
    } else if (Yaxis === 'rwp') {
      setCompVariables(component_variable_data.rwp)
    } else if (Yaxis === 'hpp') {
      setCompVariables(component_variable_data.hpp)
    } else if (Yaxis === 'panel') {
      setCompVariables(component_variable_data.panel)
    } else if (Yaxis === 'ampv1' || Yaxis === 'ampv2' || Yaxis === 'ampv3' || Yaxis === 'ampv4' || Yaxis === 'ampv5') {
      setCompVariables(component_variable_data.ampv1)
    } else if (Yaxis === 'flowsen') {
      setCompVariables(component_variable_data.flowsen)
    } else if (Yaxis === 'tap1' || Yaxis === 'tap2' || Yaxis === 'tap3' || Yaxis === 'tap4') {
      setCompVariables(component_variable_data.tap1)
    } else if (Yaxis === 'consen') {
      setCompVariables(component_variable_data.consen)
    } else if (Yaxis === 'atm') {
      setCompVariables(component_variable_data.atm)
    } else {
      setCompVariables([])
    }
  }, 
  // eslint-disable-next-line
  [Yaxis])

  console.log('component_variable', comp_variables);

  useEffect(() => {

    if(value === 0){
      setComponent(WaterTreatmentcomponentDetails)
    }
    if(value === 1){
      setComponent(WaterDispensecomponentDetails)
    }

  }, 
  // eslint-disable-next-line
  [])


  return (
    <Grid
      container
      display={"flex"}
      justifyContent="space-between"
      alignItems="center"
      p={"30px"}
      className="iw-select-overview-section"
    >
      <Grid
        item
        lg={6} md={12}
        className='flex items-center my-3 w-full xl:justify-start justify-center'
        gap={3}
      >
        <Typography
          fontWeight={500}
          color={"#000000"}
          fontSize={"13px"}
          fontFamily={"Poppins"}
        >
          Select Overview
        </Typography>
        <Grid>
          <FormControl
            size="small"
            sx={{
              minWidth: "170px",
              backgroundColor: "#EAF4F5",
              borderRadius: "10px",
              "& fieldset": { border: "none", outline: "none" },
            }}
          >
            <InputLabel
              sx={{
                fontSize: "13px",
                fontWeight: 500,
                textAlign: "center",
                alignContent: "center",
              }}
            >
              Select Component
            </InputLabel>
            <Select
              id="Yaxis"
              value={Yaxis}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {component.map((item) => {
                return (
                  <MenuItem value={item}>{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid>
          <FormControl
            size="small"
            sx={{
              minWidth: "150px",
              backgroundColor: "#EAF4F5",
              borderRadius: "10px",
              "& fieldset": { border: "none", outline: "none" },
            }}
          >
            <InputLabel
              sx={{
                fontSize: "13px",
                fontWeight: 500,
                textAlign: "center",
                alignContent: "center",
              }}
            >
              Select Variable
            </InputLabel>
            <Select
              id="variable"
              value={variable}
              onChange={handleVariableChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>

              {comp_variables.map((item) => {
                return (
                  <MenuItem value={item}>{item}</MenuItem>
                )
              })}

            </Select>
          </FormControl>
        </Grid>

        {/*Adding New Grid Here*/}

        <Grid>
          <FormControl
            size="small"
            sx={{
              minWidth: "120px",
              backgroundColor: "#EAF4F5",
              borderRadius: "10px",
              "& fieldset": { border: "none", outline: "none" },
            }}
          >
            <InputLabel
              sx={{
                fontSize: "13px",
                fontWeight: 500,
                textAlign: "center",
                alignContent: "center",
              }}
            >
              Select Data
            </InputLabel>
            <Select
              id="graphData"
              value={graphData}
              // label="Select City/State"
              onChange={handleGraphDataChange}
            // placeholder="Select City/State"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>

              <MenuItem value="sum">
                Sum
              </MenuItem>

              <MenuItem value="avg">
                Avg
              </MenuItem>

              <MenuItem value="count">
                Count
              </MenuItem>


            </Select>
          </FormControl>
        </Grid>

        {/*Ending New Grid Here*/}

      </Grid>

      <Grid
        item
        lg={6} md={12}
        className='flex items-center xl:justify-end justify-center my-3 w-full'
        gap={2}
      >
        <Grid
          height={"36px"}
          width={"192px"}
          bgcolor={"#ffffff"}
          display={"flex"}
          borderRadius={"8px"}
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid>{checked ? <ChartBar /> : <ChartBarColor />}</Grid>
          <Switch
            onChange={handleChecked}
            sx={{
              "& .MuiSwitch-track": {
                backgroundColor: "#69349d",
              },
              "& .MuiSwitch-thumb": {
                color: "#FFFFFF",
              },
            }}
          />
          <Grid>{checked ? <ChartLineColor /> : <ChartLine />}</Grid>
        </Grid>
        <Grid>
          <Stack
            direction="row"
            spacing={2}
            className="iw-select-overview-section__add-button"
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#6CCED9",
                width: "167px",
                height: "36px",
                borderRadius: "10px",
                textTransform: "none",
                "&:hover": {
                  background: "#464E5F",
                },
              }}
              endIcon={<AddIcon />}
              onClick={() => {
                setOpenPopup(true);
              }}
            >
              Add Graph
            </Button>
          </Stack>
          <Box
            bgcolor={"#6CCED9"}
            borderRadius={"10px"}
            p={1}
            display={"none"}
            className="iw-select-overview-section__add-icon"
            onClick={() => setOpenPopup(true)}
          >
            <AddIcon />
          </Box>
          <Popup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            title={"Add Graph"}
          >
            <AddGraph />
          </Popup>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SelectOverviewSection;