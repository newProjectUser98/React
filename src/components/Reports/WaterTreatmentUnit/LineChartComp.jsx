import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import axios from "axios";
import {
  Box,
  Grid,
  IconButton,
} from "@mui/material";

const LineChartComp = ({ color, Yaxis, variable, deviceID, graphData }) => {

  const [hourlyData1, setHourlyData1] = useState([])
  const [monthlyData1, setMonthlyData1] = useState([])
  const [dailyData1, setDailyData1] = useState([])
  const [yearlyData1, setYearlyData1] = useState([])
  const [updatedColor1, setUpdatedColor1] = useState('#F3C82F')
  const [updatedColor2, setUpdatedColor2] = useState('#F3C82F')
  const [updatedColor3, setUpdatedColor3] = useState('#F3C82F')
  const [updatedColor4, setUpdatedColor4] = useState('#F3C82F')

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

  console.log('deviceId in barchart', deviceID);


  useEffect(() => {

    if (Yaxis === 'cnd_tds') {
      axios.get("/topicapi/cnd_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('hourlyData', filteredData)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapi/cnd_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('dailyData', filteredData)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapi/cnd_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('monthlyData', filteredData)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapi/cnd_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('yearlyData', filteredData)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    } else {

      axios.get(`/topicapi/${Yaxis}_hourly/`)
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('hourlyData', filteredData)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get(`/topicapi/${Yaxis}_daily/`)
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('dailyData', filteredData)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get(`/topicapi/${Yaxis}_monthly/`)
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('monthlyData', filteredData)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get(`/topicapi/${Yaxis}_yearly/`)
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('yearlyData', filteredData)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))

    }
  }, [variable])


  return (
    <>
      {(hourlyData1.length !== 0) &&
        <div>
          <p>Hourly Data</p>

          {variable && (

            <LineChart width={300} height={300} data={hourlyData1}>
              <XAxis dataKey="hour" fontSize={10} tickLine={false} />
              <YAxis fontSize={10} tickLine={false} />
              <Tooltip />
              <Legend />
              <Line dataKey={`${variable}.${graphData}`} stroke={updatedColor1} dot={false} />
            </LineChart>

          )}

          <Grid
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            mt={"30px"}
            container={false}
          >
            <Grid container justifyContent={"center"}>
              <Grid item md={12}>
                {PopupColors.map((item, index) => {
                  return (
                    <IconButton
                      key={index}
                      type="button"
                      value={1}
                      onClick={() => {
                        setUpdatedColor1(item.color);
                        alert("In first color pallate")
                      }}
                    >
                      <Box
                        key={index}
                        height={"24px"}
                        width={"24px"}
                        bgcolor={item.color}
                      />
                    </IconButton>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>

        </div>
      }

      {(dailyData1.length !== 0) &&
        <div>
          <p>Daily Data</p>

          {variable && (

            <LineChart width={300} height={300} data={dailyData1}>
              <XAxis dataKey="day" fontSize={10} tickLine={false} />
              <YAxis fontSize={10} tickLine={false} />
              <Tooltip />
              <Legend />
              <Line dataKey={`${variable}.${graphData}`} stroke={updatedColor2} dot={false} />
            </LineChart>

          )}
          <Grid
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            mt={"30px"}
            container={false}
          >
            <Grid container justifyContent={"center"}>
              <Grid item md={12}>
                {PopupColors.map((item, index) => {
                  return (
                    <IconButton
                      key={index}
                      type="button"
                      value={1}
                      onClick={() => {
                        setUpdatedColor2(item.color);
                        alert("In second color pallate")
                      }}
                    >
                      <Box
                        key={index}
                        height={"24px"}
                        width={"24px"}
                        bgcolor={item.color}
                      />
                    </IconButton>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>

        </div>
      }

      {(monthlyData1.length !== 0) &&
        <div>
          <p>Monthly Data</p>

          {variable && (

            <LineChart width={300} height={300} data={monthlyData1}>
              <XAxis dataKey="month" fontSize={10} tickLine={false} />
              <YAxis fontSize={10} tickLine={false} />
              <Tooltip />
              <Legend />
              <Line dataKey={`${variable}.${graphData}`} stroke={updatedColor3} dot={false} />
            </LineChart>

          )}
          <Grid
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            mt={"30px"}
            container={false}
          >
            <Grid container justifyContent={"center"}>
              <Grid item md={12}>
                {PopupColors.map((item, index) => {
                  return (
                    <IconButton
                      key={index}
                      type="button"
                      value={1}
                      onClick={() => {
                        setUpdatedColor3(item.color);
                        alert("In third color pallate")
                      }}
                    >
                      <Box
                        key={index}
                        height={"24px"}
                        width={"24px"}
                        bgcolor={item.color}
                      />
                    </IconButton>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>

        </div>
      }

      {(yearlyData1.length !== 0) &&
        <div>
          <p>Yearly Data</p>

          {variable && (

            <LineChart width={300} height={300} data={monthlyData1}>
              <XAxis dataKey="year" fontSize={10} tickLine={false} />
              <YAxis fontSize={10} tickLine={false} />
              <Tooltip />
              <Legend />
              <Line dataKey={`${variable}.${graphData}`} stroke={updatedColor4} dot={false} />
            </LineChart>

          )}
          <Grid
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            mt={"30px"}
            container={false}
          >
            <Grid container justifyContent={"center"}>
              <Grid item md={12}>
                {PopupColors.map((item, index) => {
                  return (
                    <IconButton
                      key={index}
                      type="button"
                      value={1}
                      onClick={() => {
                        setUpdatedColor4(item.color);
                        alert("In fourth color pallate")
                      }}
                    >
                      <Box
                        key={index}
                        height={"24px"}
                        width={"24px"}
                        bgcolor={item.color}
                      />
                    </IconButton>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>

        </div>
      }
    </>
  )

};

export default LineChartComp;
