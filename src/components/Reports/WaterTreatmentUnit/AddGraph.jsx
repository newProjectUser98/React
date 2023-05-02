import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import BarChartComp from "./BarChartComp";

const AddGraph = () => {
  const [unit, setUnit] = useState("");
  const [component, setComponent] = useState("");
  const [xaxis, setXaxis] = useState("");
  const [yaxis, setYaxis] = useState("");
  const [updatedColor, setUpdatedColor] = useState("#6CCED9");

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleComponentChange = (event) => {
    setComponent(event.target.value);
  };

  const handleXaxisChange = (event) => {
    setXaxis(event.target.value);
  };

  const handleYaxisChange = (event) => {
    setYaxis(event.target.value);
  };
  const Colors = [
    { color: "#6CCED9" },
    { color: "#B68FE7" },
    { color: "#539D31" },
    { color: "#F3C82F" },
    { color: "#3699FF" },
    { color: "#BA4DBC" },
    { color: "#309E91" },
    { color: "#8C38F4" },
    { color: "#246F01" },
    { color: "#F3812F" },
    { color: "#2025A6" },
    { color: "#8F1A67" },
  ];

  const chartData = [
    {
      name: "x ",
      value: 109,
    },
    {
      name: "x",
      value: 180,
    },
    {
      name: "x",
      value: 230,
    },
    {
      name: "x",
      value: 300,
    },
    {
      name: "x",
      value: 250,
    },
  ];
  return (
    <Grid container spacing={2} p={"30px"} height={"550px"}>
      <Grid item md={5}>
        <Grid>
          <Typography
            fontWeight={400}
            color="#464E5F"
            fontSize={"16px"}
            fontFamily={"Poppins"}
          >
            Graph Name
          </Typography>
        </Grid>
        <Grid height={"350px"}>
          <BarChartComp color={updatedColor} chartData={chartData} />
        </Grid>
        <Grid>
          <Typography
            fontWeight={500}
            color="#464E5F"
            fontSize={"16px"}
            fontFamily={"Poppins"}
          >
            Select Color
          </Typography>
          <Grid container justifyContent={"flex-start"}>
            <Grid item md={9}>
              {Colors.map((item, index) => (
                <IconButton
                  type="button"
                  onClick={() => {
                    setUpdatedColor(item.color);
                  }}
                >
                  <Box
                    key={index}
                    height={"24px"}
                    width={"24px"}
                    bgcolor={item.color}
                  />
                </IconButton>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        md={7}
        direction="column"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Grid>
          <Typography
            fontWeight={400}
            color="##464E5FE5"
            fontSize={"14px"}
            fontFamily={"Poppins"}
          >
            Select Unit
          </Typography>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: "500px" }}
            mt={"25px"}
          >
            <Select value={unit} onChange={handleUnitChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Unit 1</MenuItem>
              <MenuItem value={2}>Unit 2</MenuItem>
              <MenuItem value={3}>Unit 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <Typography
            fontWeight={400}
            color="##464E5FE5"
            fontSize={"14px"}
            fontFamily={"Poppins"}
          >
            Select Component
          </Typography>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: "500px" }}
            mt={"25px"}
          >
            <Select value={component} onChange={handleComponentChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Component 1</MenuItem>
              <MenuItem value={2}>Component 2</MenuItem>
              <MenuItem value={3}>Component 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <Typography
            fontWeight={400}
            color="##464E5FE5"
            fontSize={"14px"}
            fontFamily={"Poppins"}
          >
            X Axis
          </Typography>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: "500px" }}
            mt={"25px"}
          >
            <Select value={xaxis} onChange={handleXaxisChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}> X Axis 1</MenuItem>
              <MenuItem value={2}> X Axis 2</MenuItem>
              <MenuItem value={3}> X Axis 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <Typography
            fontWeight={400}
            color="##464E5FE5"
            fontSize={"14px"}
            fontFamily={"Poppins"}
          >
            Y Axis
          </Typography>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: "500px" }}
            mt={"25px"}
          >
            <Select value={yaxis} onChange={handleYaxisChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}> Y Axis 1</MenuItem>
              <MenuItem value={2}> Y Axis 2</MenuItem>
              <MenuItem value={3}> Y Axis 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#6CCED9",
            width: "270px",
            height: "36px",
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": {
              background: "#464E5F",
            },
          }}
        >
          Add Graph
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddGraph;
