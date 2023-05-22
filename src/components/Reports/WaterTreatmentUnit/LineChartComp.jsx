import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import axios from "axios";

const LineChartComp = ({ color, Yaxis, variable, deviceID, graphData }) => {

  const [hourlyData1, setHourlyData1] = useState([])
  const [monthlyData1, setMonthlyData1] = useState([])
  const [dailyData1, setDailyData1] = useState([])
  const [yearlyData1, setYearlyData1] = useState([])


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
              <Tooltip/>
              <Legend/>
              <Line dataKey={`${variable}.${graphData}`} stroke={color} dot={false} />
            </LineChart>

          )}

        </div>
      }

      {(dailyData1.length !== 0) &&
        <div>
          <p>Daily Data</p>

          {variable && (

            <LineChart width={300} height={300} data={dailyData1}>
              <XAxis dataKey="day" fontSize={10} tickLine={false} />
              <YAxis fontSize={10} tickLine={false} />
              <Tooltip/>
              <Legend/>
              <Line dataKey={`${variable}.${graphData}`} stroke={color} dot={false} />
            </LineChart>

          )}

        </div>
      }

      {(monthlyData1.length !== 0) &&
        <div>
          <p>Monthly Data</p>

          {variable && (

            <LineChart width={300} height={300} data={monthlyData1}>
              <XAxis dataKey="month" fontSize={10} tickLine={false} />
              <YAxis fontSize={10} tickLine={false} />
              <Tooltip/>
              <Legend/>
              <Line dataKey={`${variable}.${graphData}`} stroke={color} dot={false} />
            </LineChart>

          )}

        </div>
      }

      {(yearlyData1.length !== 0) &&
        <div>
          <p>Yearly Data</p>

          {variable && (

            <LineChart width={300} height={300} data={monthlyData1}>
              <XAxis dataKey="year" fontSize={10} tickLine={false} />
              <YAxis fontSize={10} tickLine={false} />
              <Tooltip/>
              <Legend/>
              <Line dataKey={`${variable}.${graphData}`} stroke={color} dot={false} />
            </LineChart>

          )}

        </div>
      }
    </>
  )

};

export default LineChartComp;
