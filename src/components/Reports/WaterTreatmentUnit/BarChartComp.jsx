import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Popup from "../../../hoc/Popup/Popup";
import SelectColorIcon from "../../../assets/icons/ReportsIcon/SelectColorIcon.png";
import { XAxis, BarChart, Bar, YAxis, Tooltip, Legend } from "recharts";

const BarChartComp = ({ color, Yaxis, variable, deviceID, graphData, item, index, setUpdatedColor, setUpdatedIndex, updatedColor }) => {

  const [hourlyData, setHourlyData] = useState([])
  const [monthlyData, setMonthlyData] = useState([])
  const [dailyData, setDailyData] = useState([])
  const [yearlyData, setYearlyData] = useState([])
  const [openPopup, setOpenPopup] = useState(false);
  const [updatedColor1, setUpdatedColor1] = useState(false)
  const [updatedColor2, setUpdatedColor2] = useState(false)
  const [updatedColor3, setUpdatedColor3] = useState(false)
  const [updatedColor4, setUpdatedColor4] = useState(false)
  const [index1, setIndex1] = useState(false)
  const [index2, setIndex2] = useState(false)
  const [index3, setIndex3] = useState(false)
  const [index4, setIndex4] = useState(false)



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
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapi/cnd_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('dailyData', filteredData)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapi/cnd_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('monthlyData', filteredData)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapi/cnd_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('yearlyData', filteredData)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    } else {

      axios.get(`/topicapi/${Yaxis}_hourly/`)
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('hourlyData', filteredData)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get(`/topicapi/${Yaxis}_daily/`)
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get(`/topicapi/${Yaxis}_monthly/`)
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('monthlyData', filteredData)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get(`/topicapi/${Yaxis}_yearly/`)
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          console.log('yearlyData', filteredData)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))

    }
  }, [variable])


  return (
    <>

      {(hourlyData.length !== 0) &&
        <div>
          <p>Hourly data</p>

          {variable && (
            <BarChart width={300} height={300} data={hourlyData}>
              <XAxis dataKey="hour" fontSize={10} axisLine={false} tickLine={false} />

              <YAxis fontSize={10} axisLine={false} tickLine={false} />

              <Tooltip />
              <Legend />

              <defs>
                <linearGradient id={"chartLG" + color} x2="0" y2="100%">
                  <stop offset="0" stopColor={index1 ? updatedColor1 : color} />
                  <stop offset="1" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>

              <Bar
                dataKey={`${variable}.${graphData}`}
                fill={`url("#${"chartLG" + color}")`}
                barSize={35}
                radius={50}
              />
            </BarChart>
          )}

          <Grid
            display={"flex"}
            justifyContent="center"
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
                  // setUpdatedIndex(index1);
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
                  {PopupColors.map((item, index) => (
                    <IconButton
                      key={index}
                      type="button"
                      value={1}
                      onClick={(e) => {
                        setUpdatedColor1(item.color);
                        setOpenPopup(false);
                        setIndex1(true)
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
          {console.log("checking index1", index1)}
        </div>
      }

      {(dailyData.length !== 0) &&
        <div>
          <p>Daily data</p>

          {variable && (
            <BarChart width={300} height={300} data={dailyData}>
              <XAxis dataKey="day" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis fontSize={10} axisLine={false} tickLine={false} />

              <Tooltip />
              <Legend />

              <defs>
                <linearGradient id={"chartLG" + color} x2="0" y2="100%">
                  <stop offset="0" stopColor={index2 ? color : updatedColor2} />
                  <stop offset="1" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>

              <Bar
                dataKey={`${variable}.${graphData}`}
                fill={`url("#${"chartLG" + color}")`}
                barSize={35}
                radius={50}
              />
            </BarChart>
          )}


          <Grid
            display={"flex"}
            justifyContent="center"
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
                  // setUpdatedIndex(0);
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
                  {PopupColors.map((item, index) => (
                    <IconButton
                      key={index}
                      type="button"
                      onClick={() => {
                        setUpdatedColor2(item.color);
                        setOpenPopup(false);
                        setIndex2(true)
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
        </div>
      }

      {(monthlyData.length !== 0) &&
        <div>
          <p>Monthly data</p>

          {variable && (

            <BarChart width={300} height={300} data={monthlyData}>
              <XAxis dataKey="month" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis fontSize={10} axisLine={false} tickLine={false} />

              <Tooltip />
              <Legend />

              <defs>
                <linearGradient id={"chartLG" + color} x2="0" y2="100%">
                  <stop offset="0" stopColor={index3 ? color : updatedColor3} />
                  <stop offset="1" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>

              <Bar
                dataKey={`${variable}.${graphData}`}
                fill={`url("#${"chartLG" + color}")`}
                barSize={35}
                radius={50}
              />
            </BarChart>

          )}


          <Grid
            display={"flex"}
            justifyContent="center"
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
                  // setUpdatedIndex(0);
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
                  {PopupColors.map((item, index) => (
                    <IconButton
                      key={index}
                      type="button"
                      onClick={() => {
                        setUpdatedColor3(item.color);
                        setOpenPopup(false);
                        setIndex3(true)
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
        </div>
      }


      {(yearlyData.length !== 0) &&
        <div>
          <p>Yearly data</p>

          {variable && (

            <BarChart width={300} height={300} data={yearlyData}>
              <XAxis dataKey="year" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis fontSize={10} axisLine={false} tickLine={false} />

              <Tooltip />
              <Legend />

              <defs>
                <linearGradient id={"chartLG" + color} x2="0" y2="100%">
                  <stop offset="0" stopColor={index4 ? color : updatedColor4} />
                  <stop offset="1" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>

              <Bar
                dataKey={`${variable}.${graphData}`}
                fill={`url("#${"chartLG" + color}")`}
                barSize={35}
                radius={50}
              />
            </BarChart>

          )}

          <Grid
            display={"flex"}
            justifyContent="center"
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
                  // setUpdatedIndex(0);
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
                  {PopupColors.map((item, index) => (
                    <IconButton
                      key={index}
                      type="button"
                      onClick={() => {
                        setUpdatedColor4(item.color);
                        setOpenPopup(false);
                        setIndex4(true)
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
        </div>
      }
    </>
  );
};

export default BarChartComp;