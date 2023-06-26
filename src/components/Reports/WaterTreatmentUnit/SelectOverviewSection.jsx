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


const SelectOverviewSection = ({ handleChecked, checked, Yaxis, setYaxis, variable, setVariable, setGraphData, graphData, value, 
  setVariableFullName, variableFullName }) => {

  const [openPopup, setOpenPopup] = useState(false);
  const [component, setComponent] = useState([])
  const [comp_variables, setCompVariables] = useState([])


  const WaterTreatmentcomponentDetails = [
    'rwp', 'cnd', 'tds', 'hpp', 'F_flowsen', 'P_flowsen', 'panel', 'ampv1', 'ampv2', 'ampv3', 'ampv4', 'ampv5'
  ]

  const WaterDispensecomponentDetails = [
    'atm', 'tap1', 'tap2', 'tap3', 'tap4', 'cnd_consen', 'tds_consen',
    'flowsen1', 'flowsen2', 'flowsen3', 'flowsen4'
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
    cnd: [
      {
        name: "span",
        value: "spn"
      },
      {
        name: "trip_setpoint",
        value: "tsp"
      },
      {
        name: "alert_setpoint",
        value: "asp"
      },
      {
        name: "conductivity",
        value: "cnd"
      },
    ],

    tds: [
      {
        name: "span",
        value: "spn"
      },
      {
        name: "trip_setpoint",
        value: "tsp"
      },
      {
        name: "alert_setpoint",
        value: "asp"
      },
      {
        name: "total dissolved solids",
        value: "tds"
      }
    ],

    rwp: [
      {
        name: "current",
        value: "crt"
      },
      {
        name: "over load current",
        value: "olc"
      },
      {
        name: "dry run current",
        value: "drc"
      },
      {
        name: "span",
        value: "spn"
      }
    ],

    hpp: [
      {
        name: "current",
        value: "crt"
      },
      {
        name: "over load current",
        value: "olc"
      },
      {
        name: "dry run current",
        value: "drc"
      },
      {
        name: "span",
        value: "spn"
      }
    ],

    panel: [
      {
        name: "input voltage",
        value: "ipv"
      },
      {
        name: "under voltage",
        value: "unv"
      },
      {
        name: "over voltage",
        value: "ovv"
      },
      {
        name: "no.of multiport valve",
        value: "nmv"
      },
      {
        name: "span",
        value: "spn"
      },
      {
        name: "service time",
        value: "srt"
      },
      {
        name: "backwash time",
        value: "bkt"
      },
      {
        name: "rinse time",
        value: "rst"
      }
    ],

    ampv: [
      {
        name: "remaining time",
        value: "rmt"
      },
      {
        name: "cycle count",
        value: "cct"
      },
      {
        name: "service time",
        value: "srt"
      },
      {
        name: "backwash time",
        value: "bkt"
      },
      {
        name: "rinse time",
        value: "rst"
      },
      {
        name: "motor on delay time",
        value: "mot"
      }
    ],

    F_flowsen: [
      {
        name: "flow rate",
        value: "fr1"
      },
      {
        name: "flow factor",
        value: "ff1"
      }
    ],

    P_flowsen: [
      {
        name: "flow rate",
        value: "fr2"
      },
      {
        name: "flow factor",
        value: "ff2"
      }
    ],

    tap: [
      {
        name: "pulse1",
        value: "p1"
      },
      {
        name: "pulse2",
        value: "p2"
      },
      {
        name: "pulse3",
        value: "p3"
      },
      {
        name: "pulse4",
        value: "p4"
      }
    ],

    flowsen: [
      {
        name: "flow rate",
        value: "fr"
      }
    ],

    cnd_consen: [
      {
        name: "conductivity",
        value: "cnd"
      },
      {
        name: "span",
        value: "spn"
      },
      {
        name: "alert_setpoint",
        value: "asp"
      }
    ],

    tds_consen: [
      {
        name: "total dissolved solids",
        value: "tds"
      },
      {
        name: "span",
        value: "spn"
      },
      {
        name: "alert_setpoint",
        value: "asp"
      }
    ],

    atm: [
      {
        name: "new dispense volume",
        value: "ndv"
      },
      {
        name: "new transaction amount",
        value: "nta"
      },
      {
        name: "water tempreture",
        value: "tmp"
      },
      {
        name: "no. of  tap",
        value: "ntp"
      },
      {
        name: "no. Of volume",
        value: "nov"
      },
      {
        name: "volume1",
        value: "vl1"
      },
      {
        name: "volume2",
        value: "vl2"
      },
      {
        name: "volume3",
        value: "vl3"
      },
      {
        name: "volume4",
        value: "vl4"
      },
      {
        name: "rate1",
        value: "re1"
      },
      {
        name: "rate2",
        value: "re2"
      },
      {
        name: "rate3",
        value: "re3"
      },
      {
        name: "rate4",
        value: "re4"
      },
    ]
  }

  useEffect(() => {
    if (Yaxis === 'cnd') {
      setCompVariables(component_variable_data.cnd)
    } else if (Yaxis === 'tds') {
      setCompVariables(component_variable_data.tds)
    } else if (Yaxis === 'rwp') {
      setCompVariables(component_variable_data.rwp)
    } else if (Yaxis === 'hpp') {
      setCompVariables(component_variable_data.hpp)
    } else if (Yaxis === 'panel') {
      setCompVariables(component_variable_data.panel)
    } else if (Yaxis === 'ampv1' || Yaxis === 'ampv2' || Yaxis === 'ampv3' || Yaxis === 'ampv4' || Yaxis === 'ampv5') {
      setCompVariables(component_variable_data.ampv)
    } else if (Yaxis === 'F_flowsen') {
      setCompVariables(component_variable_data.F_flowsen)
    } else if (Yaxis === 'P_flowsen') {
      setCompVariables(component_variable_data.P_flowsen)
    } else if (Yaxis === 'tap1' || Yaxis === 'tap2' || Yaxis === 'tap3' || Yaxis === 'tap4') {
      setCompVariables(component_variable_data.tap)
    } else if (Yaxis === 'cnd_consen') {
      setCompVariables(component_variable_data.cnd_consen)
    } else if (Yaxis === 'tds_consen') {
      setCompVariables(component_variable_data.tds_consen)
    } else if (Yaxis === 'atm') {
      setCompVariables(component_variable_data.atm)
    } else if (Yaxis === 'flowsen1' || Yaxis === 'flowsen2' || Yaxis === 'flowsen3' || Yaxis === 'flowsen4') {
      setCompVariables(component_variable_data.flowsen)
    } else {
      setCompVariables([])
    }
  },
    // eslint-disable-next-line
    [Yaxis])

  console.log('component_variable', comp_variables);

  useEffect(() => {

    if (value === 0) {
      setComponent(WaterTreatmentcomponentDetails)
    }
    if (value === 1) {
      setComponent(WaterDispensecomponentDetails)
    }

  },
    // eslint-disable-next-line
    [])

    

    const handleMenuItemClick = (itemName) => {
      setVariableFullName(itemName);
    };
    console.log("variableFullName",variableFullName);


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
                  <MenuItem value={item.value} onClick={() => handleMenuItemClick(item.name)}>{item.name}</MenuItem>
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