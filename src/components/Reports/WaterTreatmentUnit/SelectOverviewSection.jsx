import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

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

const SelectOverviewSection = ({ handleChecked, checked }) => {
  const [Yaxis, setYaxis] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const handleChange = (event) => {
    setYaxis(event.target.value);
  };
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
              minWidth: "200px",
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
              Select Y axis
            </InputLabel>
            <Select
              id="Yaxis"
              value={Yaxis}
              label="Select City/State"
              onChange={handleChange}
              placeholder="Select City/State"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Y axis 1</MenuItem>
              <MenuItem value={2}>Y axis 2</MenuItem>
              <MenuItem value={3}>Y axis 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid
        item
        lg={6} md={12}
        className='flex items-center xl:justify-end justify-center my-3 w-full'
        gap={3}
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
