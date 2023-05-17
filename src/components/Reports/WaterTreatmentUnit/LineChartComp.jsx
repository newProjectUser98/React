import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import axios from "axios";

const LineChartComp = ({ color, chartData, Yaxis }) => {

  const [hourlyData1, setHourlyData1] = useState([])
  const [monthlyData1, setMonthlyData1] = useState([])
  const [dailyData1, setDailyData1] = useState([])
  const [yearlyData1, setYearlyData1] = useState([])


  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/topicapirepo_hourly/")
  //     .then(res => setHourlyData1(res.data))
  //     .catch(err => console.log(err))

  //   axios.get("http://127.0.0.1:8000/topicapirepo_daily/")
  //     .then(res => setDailyData1(res.data))
  //     .catch(err => console.log(err))

  //   axios.get("http://127.0.0.1:8000/topicapirepo_monthly/")
  //     .then(res => setMonthlyData1(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/topicapirepo_hourly/")
      .then(res => {
        const filteredData = res.data.filter(obj => obj.service === Yaxis)
        setHourlyData1(filteredData)
        // console.log(filteredData)
      })
      .catch(err => console.log(err))
  },
  // eslint-disable-next-line
  [hourlyData1])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/topicapirepo_daily/")
      .then(res => {
        const filteredData = res.data.filter(obj => obj.service === Yaxis)
        setDailyData1(filteredData)
        // console.log(filteredData)
      })
      .catch(err => console.log(err))
  },
  // eslint-disable-next-line
  [dailyData1])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/topicapirepo_monthly/")
      .then(res => {
        const filteredData = res.data.filter(obj => obj.service === Yaxis)
        setMonthlyData1(filteredData)
        // console.log(filteredData)
      })
      .catch(err => console.log(err))
  },
  // eslint-disable-next-line
  [monthlyData1])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/topicapirepo_yearly/")
      .then(res => {
        const filteredData = res.data.filter(obj => obj.service === Yaxis)
        setYearlyData1(filteredData)
        // console.log(filteredData)
      })
      .catch(err => console.log(err))
  },
  // eslint-disable-next-line
  [yearlyData1])

  return (
    <>
      {(hourlyData1.length !== 0) &&
        <div>
          <p>Hourly Data</p>
          <LineChart width={300} height={300} data={hourlyData1}>
            <XAxis dataKey="hour" fontSize={10} tickLine={false} />
            <YAxis dataKey="avg" fontSize={10} tickLine={false} />
            <Line dataKey="avg" stroke={color} dot={false} />
            <YAxis dataKey="count" fontSize={10} tickLine={false} />
            <Line dataKey="count" stroke={color} dot={false} />
            <YAxis dataKey="sum" fontSize={10} tickLine={false} />
            <Line dataKey="sum" stroke={color} dot={false} />
          </LineChart>
        </div>
      }

      {(dailyData1.length !== 0) &&
        <div>
          <p>Daily Data</p>
          <LineChart width={300} height={300} data={dailyData1}>
            <XAxis dataKey="day" fontSize={10} tickLine={false} />
            <YAxis dataKey="avg" fontSize={10} tickLine={false} />
            <Line dataKey="avg" stroke={color} dot={false} />
            <YAxis dataKey="count" fontSize={10} tickLine={false} />
            <Line dataKey="count" stroke={color} dot={false} />
            <YAxis dataKey="sum" fontSize={10} tickLine={false} />
            <Line dataKey="sum" stroke={color} dot={false} />
          </LineChart>
        </div>
      }

      {(monthlyData1.length !== 0) &&
        <div>
          <p>Monthly Data</p>
          <LineChart width={300} height={300} data={monthlyData1}>
            <XAxis dataKey="month" fontSize={10} tickLine={false} />
            <YAxis dataKey="avg" fontSize={10} tickLine={false} />
            <Line dataKey="avg" stroke={color} dot={false} />
            <YAxis dataKey="count" fontSize={10} tickLine={false} />
            <Line dataKey="count" stroke={color} dot={false} />
            <YAxis dataKey="sum" fontSize={10} tickLine={false} />
            <Line dataKey="sum" stroke={color} dot={false} />
          </LineChart>
        </div>
      }

{(yearlyData1.length !== 0) &&
        <div>
          <p>Monthly Data</p>
          <LineChart width={300} height={300} data={yearlyData1}>
            <XAxis dataKey="year" fontSize={10} tickLine={false} />
            <YAxis dataKey="avg" fontSize={10} tickLine={false} />
            <Line dataKey="avg" stroke={color} dot={false} />
            <YAxis dataKey="count" fontSize={10} tickLine={false} />
            <Line dataKey="count" stroke={color} dot={false} />
            <YAxis dataKey="sum" fontSize={10} tickLine={false} />
            <Line dataKey="sum" stroke={color} dot={false} />
          </LineChart>
        </div>
      }
    </>
  )

};

export default LineChartComp;
