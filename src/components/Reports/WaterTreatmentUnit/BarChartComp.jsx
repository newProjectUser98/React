import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import { XAxis, BarChart, Bar, YAxis, Tooltip, Legend } from "recharts";

const BarChartComp = ({ Yaxis, variable, deviceID, graphData, fromDate, toDate }) => {

  const [hourlyData, setHourlyData] = useState([])
  const [monthlyData, setMonthlyData] = useState([])
  const [dailyData, setDailyData] = useState([])
  const [yearlyData, setYearlyData] = useState([])
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


    if (fromDate && toDate) {
      const fromDateObj = new Date(fromDate);
      const toDateObj = new Date(toDate);

      axios.get(`/topicapi/${Yaxis}_hourly/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
            // && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order
            .reverse(); // Reverse the order to get ascending order

          const recentDocuments = filteredData.slice(-24); // Get a maximum of 24 most recent documents

          console.log('recent data in hourly date search in bar', recentDocuments);

          console.log('hourlyData', filteredData)
          setHourlyData(recentDocuments)
        })
        .catch(err => console.log(err))

      axios.get(`/topicapi/${Yaxis}_daily/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order
            .reverse(); // Reverse the order to get ascending order

          const recentDocuments = filteredData.slice(-31); // Get a maximum of 31 most recent documents

          console.log('recent data in daily date search in bar', recentDocuments);

          console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(recentDocuments)
        })
        .catch(err => console.log(err))

      axios.get(`/topicapi/${Yaxis}_monthly/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order
            .reverse(); // Reverse the order to get ascending order

          const recentDocuments = filteredData.slice(-36); // Get a maximum of 36 most recent documents

          console.log('recent data in monthly date search in bar', recentDocuments);

          console.log('monthlyData', filteredData)
          setMonthlyData(recentDocuments)
        })
        .catch(err => console.log(err))

      axios.get(`/topicapi/${Yaxis}_yearly/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order
            .reverse(); // Reverse the order to get ascending order

          const recentDocuments = filteredData.slice(-3); // Get a maximum of 3 most recent documents

          console.log('recent data in yearly date search in bar', recentDocuments);

          console.log('yearlyData', filteredData)
          setYearlyData(recentDocuments)
        })
        .catch(err => console.log(err))




    }
  },
    // eslint-disable-next-line
    [variable, fromDate, toDate])


  return (
    <>

      {(hourlyData.length !== 0) &&
        <div>
          {graphData && (
            <>
              <p>Hourly data</p>
              <BarChart width={1000} height={300} data={hourlyData}>
                <XAxis dataKey="hour" fontSize={10} axisLine={false} tickLine={false}
                // tickFormatter={(hour) => {
                //   const day = hourlyData.find(data => data.hour === hour)?.day;
                //   return `${hour}/${day}`;
                // }} 
                />

                <YAxis fontSize={10} axisLine={false} tickLine={false} />

                <Tooltip />
                <Legend />

                <defs>
                  <linearGradient id={"chartLG" + updatedColor1} x2="0" y2="100%">
                    <stop offset="0" stopColor={updatedColor1} />
                    <stop offset="1" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>

                <Bar
                  dataKey={`${variable}.${graphData}`}
                  fill={`url("#${"chartLG" + updatedColor1}")`}
                  barSize={35}
                  radius={50}
                />
              </BarChart>

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
                            // alert("In first color pallate")
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
            </>
          )}
        </div>
      }

      {(dailyData.length !== 0) &&
        <div>
          {graphData && (
            <>
              <p>Daily data</p>
              <BarChart width={1000} height={300} data={dailyData}>
                <XAxis dataKey="day" fontSize={10} axisLine={false} tickLine={false}
                  tickFormatter={(day) => {
                    const month = dailyData.find(data => data.day === day)?.month;
                    return `${day}/${month}`;
                  }}
                />
                <YAxis fontSize={10} axisLine={false} tickLine={false} />

                <Tooltip />
                <Legend />

                <defs>
                  <linearGradient id={"chartLG" + updatedColor2} x2="0" y2="100%">
                    <stop offset="0" stopColor={updatedColor2} />
                    <stop offset="1" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>

                <Bar
                  dataKey={`${variable}.${graphData}`}
                  fill={`url("#${"chartLG" + updatedColor2}")`}
                  barSize={35}
                  radius={50}
                />
              </BarChart>

              <Grid
                display={"flex"}
                justifyContent="center"
                alignItems="center"
                mt={"30px"}
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
                            // alert("In second color pallate")
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
            </>
          )}
        </div>
      }

      {(monthlyData.length !== 0) &&
        <div>
          {graphData && (
            <>
              <p>Monthly data</p>
              <BarChart width={1000} height={300} data={monthlyData}>
                <XAxis dataKey="month" fontSize={10} axisLine={false} tickLine={false}
                  tickFormatter={(month) => {
                    const year = monthlyData.find(data => data.month === month)?.year;
                    return `${month}/${year}`;
                  }}
                />
                <YAxis fontSize={10} axisLine={false} tickLine={false} />

                <Tooltip />
                <Legend />

                <defs>
                  <linearGradient id={"chartLG" + updatedColor3} x2="0" y2="100%">
                    <stop offset="0" stopColor={updatedColor3} />
                    <stop offset="1" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>

                <Bar
                  dataKey={`${variable}.${graphData}`}
                  fill={`url("#${"chartLG" + updatedColor3}")`}
                  barSize={35}
                  radius={50}
                />
              </BarChart>

              <Grid
                display={"flex"}
                justifyContent="center"
                alignItems="center"
                mt={"30px"}
              >
                <Grid container justifyContent={"center"}>
                  <Grid item md={12}>
                    {PopupColors.map((item, index) => (
                      <IconButton
                        key={index}
                        type="button"
                        onClick={() => {
                          setUpdatedColor3(item.color);
                          // alert("In third color pallate")
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
            </>
          )}
        </div>
      }


      {(yearlyData.length !== 0) &&
        <div>
          {graphData && (
            <>
              <p>Yearly data</p>
              <BarChart width={1000} height={300} data={yearlyData}>
                <XAxis dataKey="year" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis fontSize={10} axisLine={false} tickLine={false} />

                <Tooltip />
                <Legend />

                <defs>
                  <linearGradient id={"chartLG" + updatedColor4} x2="0" y2="100%">
                    <stop offset="0" stopColor={updatedColor4} />
                    <stop offset="1" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>

                <Bar
                  dataKey={`${variable}.${graphData}`}
                  fill={`url("#${"chartLG" + updatedColor4}")`}
                  barSize={35}
                  radius={50}
                />
              </BarChart>

              <Grid
                display={"flex"}
                justifyContent="center"
                alignItems="center"
                mt={"30px"}
              >
                <Grid container justifyContent={"center"}>
                  <Grid item md={12}>
                    {PopupColors.map((item, index) => (
                      <IconButton
                        key={index}
                        type="button"
                        onClick={() => {
                          setUpdatedColor4(item.color);
                          // alert("In fourth color pallate")
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
            </>
          )}
        </div>
      }
    </>
  );
};

export default BarChartComp;