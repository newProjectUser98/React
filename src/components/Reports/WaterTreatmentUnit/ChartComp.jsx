import {
  Grid,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import SelectOverviewSection from "./SelectOverviewSection";
import BarChartComp from "./BarChartComp";
import LineChartComp from "./LineChartComp";
import { ReactComponent as LeftArrow } from "../../../assets/icons/ReportsIcon/CaretLeft.svg";
import ReactSimplyCarousel from "react-simply-carousel";

const ChartComp = ({deviceID, value, fromDate, toDate, Yaxis, setYaxis}) => {
  const [checked, setChecked] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [variable, setVariable] = useState("")
  const [graphData, setGraphData] = useState("")

  const handleChecked = () => {
    setChecked(!checked);
  };

  // eslint-disable-next-line
  const [initialColor, setInitialColor] = useState('#F3C82F')
  const [updatedColor, setUpdatedColor] = useState("");
  // eslint-disable-next-line
  const [updatedIndex, setUpdatedIndex] = useState();

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
          value={value}
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
          {/* {ChartColors?.map((item, index) => ( */}
            <Chart 
            // key={index} item={item} index={index} 
            setUpdatedColor={setUpdatedColor} setUpdatedIndex={setUpdatedIndex} checked={checked}
            Yaxis={Yaxis} variable={variable} deviceID={deviceID} graphData={graphData}
            initialColor={initialColor} updatedColor={updatedColor}
            fromDate={fromDate} toDate={toDate}/>
          {/* ))} */}
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
          {/* {ChartColors.map((item, index) => ( */}
            <Chart
              // key={index}
              // item={item}
              // index={index}
              setUpdatedColor={setUpdatedColor}
              setUpdatedIndex={setUpdatedIndex}
              checked={checked}
              Yaxis={Yaxis} variable={variable}
              deviceID={deviceID}
              graphData={graphData}
              initialColor={initialColor}
              updatedColor={updatedColor}
              fromDate={fromDate} toDate={toDate}
            />
          {/* ))} */}
        </ReactSimplyCarousel>
      </Grid>
    </Grid>
  );
};

export default ChartComp;

const Chart = ({ item, index, setUpdatedColor, setUpdatedIndex, checked, Yaxis, variable, 
  deviceID, graphData, initialColor, updatedColor, fromDate, toDate}) => {

  return (
    <Grid width={1000} 
    container 
    key={index}>
      {/* <Grid>
        <Typography
          fontWeight={400}
          color="#464E5F"
          fontSize={"16px"}
          fontFamily={"Poppins"}
        > */}
          {/* {item.title} {index} */}
        {/* </Typography>
      </Grid> */}
      <Grid height={1600} mt={"30px"}>
        {checked ? (
          <LineChartComp 
          color={initialColor}
          Yaxis={Yaxis} 
          variable={variable}
          deviceID={deviceID}
          graphData={graphData}
          item={item}
          index={index}
          setUpdatedColor={setUpdatedColor}
          setUpdatedIndex={setUpdatedIndex}
          updatedColor={updatedColor}
          fromDate={fromDate} toDate={toDate}
          />
        ) : (
          <BarChartComp 
          color={initialColor} 
          Yaxis={Yaxis}
          variable={variable}
          deviceID={deviceID}
          graphData={graphData}
          item={item}
          index={index}
          setUpdatedColor={setUpdatedColor}
          setUpdatedIndex={setUpdatedIndex}
          updatedColor={updatedColor}
          fromDate={fromDate} toDate={toDate}
          />
        )}
      </Grid>
    </Grid>
  );
};
