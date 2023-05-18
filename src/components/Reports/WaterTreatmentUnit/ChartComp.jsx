import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Popup from "../../../hoc/Popup/Popup";
import SelectOverviewSection from "./SelectOverviewSection";
import SelectColorIcon from "../../../assets/icons/ReportsIcon/SelectColorIcon.png";
import BarChartComp from "./BarChartComp";
import LineChartComp from "./LineChartComp";
import { useEffect } from "react";
import { ReactComponent as LeftArrow } from "../../../assets/icons/ReportsIcon/CaretLeft.svg";
import ReactSimplyCarousel from "react-simply-carousel";
import axios from "axios";

const ChartComp = ({deviceID}) => {
  const [checked, setChecked] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [Yaxis, setYaxis] = useState("");
  const [variable, setVariable] = useState("")
  const [graphData, setGraphData] = useState("")

  const handleChecked = () => {
    setChecked(!checked);
  };

  const [ChartColors, setChartColors] = useState([
    // { title: "5 YEARS", color: "#6CCED9" },
    // { title: "MONTHLY", color: "#BA4DBC" },
    // { title: "DAILY", color: "#F3C82F" },
    { 
      //title: "HOURLY", 
      color: "#539D31" 
    },
  ]);
  const [updatedColor, setUpdatedColor] = useState("");
  const [updatedIndex, setUpdatedIndex] = useState();

  useEffect(() => {
    if (updatedColor) {
      const newArr = ChartColors.map((item, i) => {
        if (updatedIndex === i) {
          return { ...item, color: updatedColor };
        } else {
          return item;
        }
      });
      setChartColors(newArr);
    }
  }, [updatedColor, updatedIndex]);

  // console.log("Yaxis in ChartComp", Yaxis);
  // console.log("variable in ChartComp", variable);

  const matches = useMediaQuery("(min-width: 960px)");

  return (
    <Grid>
      <Grid>
        <SelectOverviewSection
          handleChecked={handleChecked}
          checked={checked}
          Yaxis={Yaxis} 
          setYaxis={setYaxis}
          variable={variable}
          setVariable={setVariable}
          graphData={graphData}
          setGraphData={setGraphData}
        />
      </Grid>

      {matches && (
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          gap={"50px"}
          className="iw-chart-comp__list-container"
        >
          {ChartColors?.map((item, index) => (
            <Chart key={index} item={item} index={index} setUpdatedColor={setUpdatedColor} setUpdatedIndex={setUpdatedIndex} checked={checked}
            Yaxis={Yaxis} variable={variable} deviceID={deviceID} graphData={graphData}/>
          ))}
        </Grid>
      )}
      <Grid
        
        className="iw-chart-comp__list-wrapper"
      >
        <ReactSimplyCarousel
          className="iw-chart-comp__list-carousel"
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          backwardBtnProps={{
            children: <LeftArrow />,
          }}
          forwardBtnProps={{
            style: {
              transform: "rotate(-180deg)",
            },
            children: <LeftArrow />,
          }}
          responsiveProps={[
            {
              maxWidth: 960,
              itemsToShow: 1,
              itemsToScroll: 1,
            },
          ]}
          speed={400}
          easing="linear"
          dotsNav={{
            show: true,
            containerProps: {
              style: {
                columnGap: 10,
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
              },
            },
            itemBtnProps: {
              style: {
                width: 24,
                height: 2,
                borderRadius: 2,
                backgroundColor: "#CEDDFD",
              },
            },
            activeItemBtnProps: {
              style: {
                width: 24,
                height: 2,
                borderRadius: 2,
                backgroundColor: "#6CCED9",
              },
            },
          }}
        >
          {ChartColors.map((item, index) => (
            <Chart
              key={index}
              item={item}
              index={index}
              setUpdatedColor={setUpdatedColor}
              setUpdatedIndex={setUpdatedIndex}
              checked={checked}
              Yaxis={Yaxis} variable={variable}
              deviceID={deviceID}
              graphData={graphData}
            />
          ))}
        </ReactSimplyCarousel>
      </Grid>
    </Grid>
  );
};

export default ChartComp;

const Chart = ({ item, index, setUpdatedColor, setUpdatedIndex, checked, Yaxis, variable, deviceID, graphData }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const PopupColors = [
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
      value: 300,
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
    <Grid width={300} container key={index}>
      <Grid>
        <Typography
          fontWeight={400}
          color="#464E5F"
          fontSize={"16px"}
          fontFamily={"Poppins"}
        >
          {/* {item.title} {index} */}
        </Typography>
      </Grid>
      <Grid height={1300} mt={"30px"}>
        {checked ? (
          <LineChartComp 
          color={item.color}
          Yaxis={Yaxis} 
          variable={variable}
          deviceID={deviceID}
          graphData={graphData}
        //  chartData={data} 
          />
        ) : (
          <BarChartComp 
          color={item.color} 
          Yaxis={Yaxis}
          variable={variable}
          deviceID={deviceID}
          graphData={graphData}
        //  chartData={data} 
          />
        )}
      </Grid>
      <Grid
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        mt={"30px"}
      >
        <Typography
          fontWeight={500}
          color="#464E5F"
          fontSize={"16px"}
          fontFamily={"Poppins"}
        >
          Select Color
        </Typography>

        <Grid>
          <IconButton
            type="button"
            aria-label="search"
            onClick={() => {
              setOpenPopup(true);
              setUpdatedIndex(index);
            }}
          >
            <img src={SelectColorIcon} alt="selectColor" />
          </IconButton>
        </Grid>
        <Popup
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          title={"Select Color"}
        >
          <Grid container justifyContent={"center"}>
            <Grid item md={3.5}>
              {PopupColors.map((item,index) => (
                <IconButton
                  key={index}
                  type="button"
                  onClick={() => {
                    setUpdatedColor(item.color);
                    setOpenPopup(false);
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
        </Popup>
      </Grid>
    </Grid>
  );
};
