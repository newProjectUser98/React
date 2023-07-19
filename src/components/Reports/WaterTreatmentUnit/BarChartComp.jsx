import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { XAxis, BarChart, Bar, YAxis, Tooltip, Legend } from "recharts";
import trueIcon from '../../../assets/icons/ReportsIcon/SelectColorIcon.png'

const BarChartComp = ({ Yaxis, variable, deviceID, graphData, fromDate, toDate, variableFullName }) => {

  const [hourlyData, setHourlyData] = useState([])
  const [monthlyData, setMonthlyData] = useState([])
  const [dailyData, setDailyData] = useState([])
  const [yearlyData, setYearlyData] = useState([])
  const [updatedColor1, setUpdatedColor1] = useState('#F3C82F')
  const [updatedColor2, setUpdatedColor2] = useState('#F3C82F')
  const [updatedColor3, setUpdatedColor3] = useState('#F3C82F')
  const [updatedColor4, setUpdatedColor4] = useState('#F3C82F')
  const [isActive1, setIsActive1] = useState(false)
  const [isActive2, setIsActive2] = useState(false)
  const [isActive3, setIsActive3] = useState(false)
  const [isActive4, setIsActive4] = useState(false)
  // const [gwidth, setGwidth] = useState(950)

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
            return hourData ? hourData : { hour: String(hour) };
          });

          setHourlyData(hourlyDataArray);
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

            return dayData ? dayData : { day: String(day) };
          });

          console.log('dailyData', dailyDataArray);
          console.log('filteredData in dailyData', filteredData);

          setDailyData(dailyDataArray);
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
              // docDate >= fromDateObj &&
              docDate <= toDateObj &&
              obj.device_id === deviceID
            );
          });

          const mergedData = allMonthsData.map((monthData) => {
            const { year, month } = monthData;
            const foundData = filteredData.find(
              (obj) => Number(obj.year) === year && Number(obj.month) === month
            );
            // if (foundData) {
            //   return foundData;
            // } else {
            //   return { year, month, value: 0 };
            // }
            const monthYear = `${String(month).padStart(1, '0')}/${String(year).slice(2)}`;
            if (foundData) {
              return { ...foundData, monthYear };
            } else {
              return { year, month, value: 0, monthYear };
            }
          });

          setMonthlyData(mergedData);
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
          console.log('res in yearly before filtering', res.data);
          const filteredData = res.data.filter(obj => {
            // const docDate = new Date(obj.year, obj.month - 1, obj.day);
            const docDate = new Date(obj.year);
            return (
              // docDate >= fromDateObj &&
              docDate <= toDateObj &&
              obj.device_id === deviceID
            )
          })
            .sort((a, b) => new Date(a.year, a.month - 1, a.day) - new Date(b.year, b.month - 1, b.day));

          console.log('filteredData in log before', filteredData);

          const allYearsData = [
            { year: endYear - 2 },
            { year: endYear - 1 },
            { year: endYear }
          ];
          const currentDate = new Date(fromDateObj.getFullYear(), 0, 1);
          // Start from January 1st of the start year

          // const currentDate = new Date(endYear - 2, 0, 1); 
          // Start from January 1st of the year two years before the endYear


          // while (currentDate.getFullYear() <= endYear) {
          //   allYearsData.push({ year: currentDate.getFullYear() });
          //   currentDate.setFullYear(currentDate.getFullYear() + 1); 
          // Move to the next year

          // const allYearsData = [];
          // const previousYear = endYear - 1;
          // const currentYear = endYear;

          // allYearsData.push({ year: previousYear });
          // allYearsData.push({ year: currentYear });
          // allYearsData.push({ year: endYear });

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
              return { year, value: 0 };
            }
          })

          setYearlyData(mergedData);
          console.log('mergedData in yearlyData', mergedData);
          console.log('filteredData in yearlyData', filteredData);
        })
        .catch(err => console.log(err))
      // New code for yearlyData ends here
    }
  },
    // eslint-disable-next-line
    [variable, fromDate, toDate])

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

  const customLegend = [
  [
    { value: `${variableFullName}[${graphData}]`, type: "square" , color: updatedColor1 },
  ],
  [
    { value: `${variableFullName}[${graphData}]`, type: "square" , color: updatedColor2 }
  ],
  [
    { value: `${variableFullName}[${graphData}]`, type: "square" , color: updatedColor3 }
  ],
  [
    { value: `${variableFullName}[${graphData}]`, type: "square" , color: updatedColor4 }
  ]
]

// const matches = useMediaQuery("(max-width: 1222px)")
// const matches1 = useMediaQuery("(max-width: 1028px)")
// const matches2 = useMediaQuery("(max-width: 640px)")
// const matches3 = useMediaQuery("(max-width: 450px)")


// useEffect(() => {
//   if(matches){
//     setGwidth(750)
//   }
//   if(matches1){
//     setGwidth(650)
//   }
//   if(matches2){
//     setGwidth(450)
//   }
//   if(matches3){
//     setGwidth(350)
//   }
//   else{
//     setGwidth(950)
//   }
// }, [matches, matches1, matches2, matches3])


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
                <Legend payload={customLegend[0]}/>

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

      {(dailyData.length !== 0) &&
        <div>
          {graphData && (
            <>
              <p>Daily data</p>
              <BarChart width={1000} height={300} data={dailyData}>
                <XAxis dataKey="day" fontSize={10} axisLine={false} tickLine={false}
                // tickFormatter={(day) => {
                //   const month = dailyData.find(data => data.day === day)?.month;
                //   return `${day}/${month}`;
                // }}
                />
                <YAxis fontSize={10} axisLine={false} tickLine={false} />

                <Tooltip />
                <Legend payload={customLegend[1]}/>

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

      {(monthlyData.length !== 0) &&
        <div>
          {graphData && (
            <>
              <p>Monthly data</p>
              <BarChart width={1000} height={300} data={monthlyData}>
                {/* <XAxis dataKey="month" fontSize={10} axisLine={false} tickLine={false} */}
                <XAxis dataKey="monthYear" fontSize={10} axisLine={false} tickLine={false}
                // tickFormatter={(month) => {
                //   const year = monthlyData.find(data => data.month === month)?.year;
                //   return `${month}/${year}`;
                // }}
                />
                <YAxis fontSize={10} axisLine={false} tickLine={false} />

                <Tooltip />
                <Legend payload={customLegend[2]}/>

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
                  <Grid md={12}>
                    <img src={trueIcon} onClick={ColorPallet3} alt="" className="ml-2"
                    //style={{display:"inline"}}
                    />
                  </Grid>
                  <Grid item md={6}>
                    {isActive3 &&
                      PopupColors.map((item, index) => (
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
                <Legend payload={customLegend[3]}/>

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
                  <Grid md={12}>
                    <img src={trueIcon} onClick={ColorPallet4} alt="" className="ml-2"
                    //style={{display:"inline"}}
                    />
                  </Grid>
                  <Grid item md={6}>
                    {isActive4 &&
                      PopupColors.map((item, index) => (
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