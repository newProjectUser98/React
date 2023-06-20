import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import axios from "axios";
import {
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import trueIcon from '../../../assets/icons/ReportsIcon/SelectColorIcon.png'

const LineChartComp = ({ color, Yaxis, variable, deviceID, graphData, fromDate, toDate }) => {

  const [hourlyData1, setHourlyData1] = useState([])
  const [monthlyData1, setMonthlyData1] = useState([])
  const [dailyData1, setDailyData1] = useState([])
  const [yearlyData1, setYearlyData1] = useState([])
  const [updatedColor1, setUpdatedColor1] = useState('#F3C82F')
  const [updatedColor2, setUpdatedColor2] = useState('#F3C82F')
  const [updatedColor3, setUpdatedColor3] = useState('#F3C82F')
  const [updatedColor4, setUpdatedColor4] = useState('#F3C82F')
  const [isActive1, setIsActive1] = useState(false)
  const [isActive2, setIsActive2] = useState(false)
  const [isActive3, setIsActive3] = useState(false)
  const [isActive4, setIsActive4] = useState(false)

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

      //New code for hourlyData starts here
      axios
        .get(`/topicapi/${Yaxis}_hourly/`)
        .then((res) => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return (
              docDate >= fromDateObj &&
              docDate <= toDateObj &&
              obj.device_id === deviceID
            );
          });

          const hourArray = Array.from({ length: 24 }, (_, i) => i + 1);

          const hourlyDataArray = hourArray.map((hour) => {
            const hourData = filteredData.find((obj) => {
              const objDate = new Date(obj.year, obj.month - 1, obj.day);
              return objDate.getTime() === toDateObj.getTime() && obj.hour === String(hour);
            });
            // return hourData ? hourData : { hour: String(hour) };
            return {
              hour: String(hour),
              [variable]: {
                [graphData]: hourData ? hourData[variable][graphData] : 0
              }
            };
          });

          setHourlyData1(hourlyDataArray);
          console.log('hourlyData1', hourlyDataArray);
        })
        .catch((err) => console.log(err));
      //New code for hourlyData ends


      //New code for dailyData starts
      axios.get(`/topicapi/${Yaxis}_daily/`)
        .then(res => {
          const filteredData = res.data.filter(obj => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return (
              docDate >= fromDateObj &&
              docDate <= toDateObj &&
              obj.device_id === deviceID &&
              docDate.getMonth() + 1 === parseInt(toDateObj.getMonth()) + 1
            );
          });

          const dailyDataArray = Array.from({ length: 31 }, (_, i) => {
            const day = i + 1;
            const dayData = filteredData.find(obj => {
              const docDate = new Date(obj.year, obj.month - 1, obj.day);
              return (
                docDate.getDate() === day &&
                docDate.getMonth() === toDateObj.getMonth() &&
                docDate.getFullYear() === toDateObj.getFullYear()
              );
            });
            // return hourData ? hourData : { hour: String(hour) };
            // return dayData ? dayData : { day: String(day) };
            // return {
            //   hour: String(hour),
            //   [variable]: {
            //     [graphData]: hourData ? hourData[variable][graphData] : 0
            //   }
            // };
            return {
              day: String(day),
              [variable]: {
                [graphData]: dayData ? dayData[variable][graphData] : 0
              }
            };
          });

          console.log('dailyData', dailyDataArray);
          console.log('filteredData', filteredData);

          setDailyData1(dailyDataArray);
        })
        .catch(err => console.log(err));
      //New code for dailyData ends

      // New code for monthlyData starts here
      const startYear = fromDateObj.getFullYear();
      const endYear = toDateObj.getFullYear();

      const allMonthsData = [];

      for (let year = (endYear - 2); year <= endYear; year++) {
        for (let month = 1; month <= 12; month++) {
          allMonthsData.push({ year, month });
        }
      }

      axios
        .get(`/topicapi/${Yaxis}_monthly/`)
        .then((res) => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, 1);
            return (
              docDate >= fromDateObj &&
              docDate <= toDateObj &&
              obj.device_id === deviceID
            );
          });

          const mergedData = allMonthsData.map((monthData) => {
            const { year, month } = monthData;
            const foundData = filteredData.find(
              (obj) => Number(obj.year) === year && Number(obj.month) === month
            );
            if (foundData) {
              return foundData;
            } else {
              return { year, month, value: 0, [variable]: { [graphData]: 0 } };
            }
          });

          setMonthlyData1(mergedData);
          console.log('mergedData in monthlyData', mergedData);
          console.log('filteredData in monthlyData', filteredData);
          console.log('res.data', res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      // New code for monthlyData ends here


      // New code for yearlyData starts here
      axios.get(`/topicapi/${Yaxis}_yearly/`)
        .then(res => {
          const filteredData = res.data.filter(obj => {
            // const docDate = new Date(obj.year, obj.month - 1, obj.day);
            const docDate = new Date(obj.year);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID;
          })
            .sort((a, b) => new Date(a.year, a.month - 1, a.day) - new Date(b.year, b.month - 1, b.day));

          const allYearsData = [
            { year: endYear - 2 },
            { year: endYear - 1 },
            { year: endYear }
          ];
          const currentDate = new Date(fromDateObj.getFullYear(), 0, 1); // Start from January 1st of the start year

          // while (currentDate.getFullYear() <= endYear) {
          //   allYearsData.push({ year: currentDate.getFullYear() });
          //   currentDate.setFullYear(currentDate.getFullYear() + 1); // Move to the next year
          // }

          const dataByYear = {}; // Dictionary to store data objects by year

          filteredData.forEach(obj => {
            dataByYear[obj.year] = obj; // Store data object with year as key
          });

          const mergedData = allYearsData.map(yearData => {
            const { year } = yearData;
            const foundData = dataByYear[year];

            if (foundData) {
              return foundData;
            } else {
              return { year, value: 0, [variable]: { [graphData]: 0 } };
            }
          })

          setYearlyData1(mergedData);
          console.log('mergedData in yearlyData1', mergedData);
          console.log('filteredData in yearlyData1', filteredData);
        })
        .catch(err => console.log(err))
      // New code for yearlyData ends here
    }
  },
    // eslint-disable-next-line
    [variable, fromDate, toDate, graphData])

  const ColorPallet1 = () => {

    if (!isActive1) {
      setIsActive1(true)
    } else {
      setIsActive1(false)
    }
  }

  const ColorPallet2 = () => {

    if (!isActive2) {
      setIsActive2(true)
    } else {
      setIsActive2(false)
    }
  }

  const ColorPallet3 = () => {

    if (!isActive3) {
      setIsActive3(true)
    } else {
      setIsActive3(false)
    }
  }

  const ColorPallet4 = () => {

    if (!isActive4) {
      setIsActive4(true)
    } else {
      setIsActive4(false)
    }
  }

  return (
    <>
      {(hourlyData1.length !== 0) &&
        <div>
          {graphData && (
            <>
              <p>Hourly Data</p>
              <LineChart width={1000} height={300} data={hourlyData1}>
                <XAxis dataKey="hour" fontSize={10} tickLine={false} />
                <YAxis fontSize={10} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line dataKey={`${variable}.${graphData}`} stroke={updatedColor1} dot={true} />
              </LineChart>

              <Grid
                display={"flex"}
                justifyContent="center"
                alignItems="center"
                mt={"30px"}
                container={false}
              >
                <Grid container justifyContent={"center"}>
                  <Grid md={12}>
                    <img src={trueIcon} onClick={ColorPallet1} alt="" className="ml-2"
                    //style={{display:"inline"}}
                    />
                  </Grid>
                  <Grid item md={6}>
                    {isActive1 &&
                      PopupColors.map((item, index) => {
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

      {(dailyData1.length !== 0) &&
        <div>
          {graphData && (
            <>
              <p>Daily Data</p>
              <LineChart width={1000} height={300} data={dailyData1}>
                <XAxis dataKey="day" fontSize={10} tickLine={false}
                // tickFormatter={(day) => {
                //   const month = dailyData1.find(data => data.day === day)?.month;
                //   return `${day}/${month}`;
                // }}
                />
                <YAxis fontSize={10} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line dataKey={`${variable}.${graphData}`} stroke={updatedColor2} dot={true} />
              </LineChart>

              <Grid
                display={"flex"}
                justifyContent="center"
                alignItems="center"
                mt={"30px"}
                container={false}
              >
                <Grid container justifyContent={"center"}>
                  <Grid md={12}>
                    <img src={trueIcon} onClick={ColorPallet2} alt="" className="ml-2"
                    //style={{display:"inline"}}
                    />
                  </Grid>
                  <Grid item md={6}>
                    {isActive2 &&
                      PopupColors.map((item, index) => {
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

      {(monthlyData1.length !== 0) &&
        <div>
          {graphData && (
            <>
              <p>Monthly Data</p>
              <LineChart width={1000} height={300} data={monthlyData1}>
                <XAxis dataKey="month" fontSize={10} tickLine={false}
                // tickFormatter={(month) => {
                //   const year = monthlyData1.find(data => data.month === month)?.year;
                //   return `${month}/${year}`;
                // }}
                />
                <YAxis fontSize={10} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line dataKey={`${variable}.${graphData}`} stroke={updatedColor3} dot={true} />
              </LineChart>

              <Grid
                display={"flex"}
                justifyContent="center"
                alignItems="center"
                mt={"30px"}
                container={false}
              >
                <Grid container justifyContent={"center"}>
                  <Grid md={12}>
                    <img src={trueIcon} onClick={ColorPallet3} alt="" className="ml-2"
                    //style={{display:"inline"}}
                    />
                  </Grid>
                  <Grid item md={6}>
                    {isActive3 &&
                      PopupColors.map((item, index) => {
                        return (
                          <IconButton
                            key={index}
                            type="button"
                            value={1}
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
                        )
                      })}
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}
        </div>
      }

      {(yearlyData1.length !== 0) &&
        <div>
          {graphData && (
            <>
              <p>Yearly Data</p>
              <LineChart width={1000} height={300} data={yearlyData1}>
                <XAxis dataKey="year" fontSize={10} tickLine={false} />
                <YAxis fontSize={10} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line dataKey={`${variable}.${graphData}`} stroke={updatedColor4} dot={true} />
              </LineChart>

              <Grid
                display={"flex"}
                justifyContent="center"
                alignItems="center"
                mt={"30px"}
                container={false}
              >
                <Grid container justifyContent={"center"}>
                  <Grid md={12}>
                    <img src={trueIcon} onClick={ColorPallet4} alt="" className="ml-2"
                    //style={{display:"inline"}}
                    />
                  </Grid>
                  <Grid item md={6}>
                    {isActive4 &&
                      PopupColors.map((item, index) => {
                        return (
                          <IconButton
                            key={index}
                            type="button"
                            value={1}
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
                        )
                      })}
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}
        </div>
      }
    </>
  )

};

export default LineChartComp;
