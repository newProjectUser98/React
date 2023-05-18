import axios from "axios";
import { useEffect, useState } from "react";
import { XAxis, BarChart, Bar, YAxis } from "recharts";

const BarChartComp = ({ color, chartData, Yaxis }) => {

  const [hourlyData, setHourlyData] = useState([])
  const [monthlyData, setMonthlyData] = useState([])
  const [dailyData, setDailyData] = useState([])
  const [yearlyData, setYearlyData] = useState([])


  // useEffect(() => {
    // axios.get("http://3.108.228.232:8000/topicapirepo_hourly/")
    //   .then(res => setHourlyData(res.data))
    //   .catch(err => console.log(err))

    // axios.get("http://3.108.228.232:8000/topicapirepo_daily/")
    //   .then(res => setDailyData(res.data))
    //   .catch(err => console.log(err))

    // axios.get("http://3.108.228.232:8000/topicapirepo_monthly/")
    //   .then(res => setMonthlyData(res.data))
    //   .catch(err => console.log(err))

    // axios.get("http://3.108.228.232:8000/topicapirepo_yearly/")
    //   .then(res => setYearlyData(res.data))
    //   .catch(err => console.log(err))
  // })


  useEffect(() => {
    axios.get("http://3.108.228.232:8000/topicapirepo_hourly/")
      .then(res => {
        const filteredData = res.data.filter(obj => obj.service === Yaxis)
        setHourlyData(filteredData)
        // console.log(filteredData)
      })
      .catch(err => console.log(err))
  },
  // eslint-disable-next-line
  [hourlyData])

  useEffect(() => {
    axios.get("http://3.108.228.232:8000/topicapirepo_daily/")
      .then(res => {
        const filteredData = res.data.filter(obj => obj.service === Yaxis)
        setDailyData(filteredData)
        // console.log(filteredData)
      })
      .catch(err => console.log(err))
  },
  // eslint-disable-next-line
  [dailyData])

  useEffect(() => {
    axios.get("http://3.108.228.232:8000/topicapirepo_monthly/")
      .then(res => {
        const filteredData = res.data.filter(obj => obj.service === Yaxis)
        setMonthlyData(filteredData)
        // console.log(filteredData)
      })
      .catch(err => console.log(err))
  },
  // eslint-disable-next-line
  [monthlyData])

  useEffect(() => {
    axios.get("http://3.108.228.232:8000/topicapirepo_yearly/")
      .then(res => {
        const filteredData = res.data.filter(obj => obj.service === Yaxis)
        setYearlyData(filteredData)
        // console.log(filteredData)
      })
      .catch(err => console.log(err))
  },
  // eslint-disable-next-line
  [yearlyData])

  return (
    <>

      {(hourlyData.length !== 0) &&
        <div>
          <p>Hourly data</p>
          <BarChart width={300} height={300} data={hourlyData}>
            <XAxis dataKey="hour" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis dataKey="avg" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis dataKey="count" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis dataKey="sum" fontSize={10} axisLine={false} tickLine={false} />
            <defs>
              <linearGradient id={"chartLG" + color} x2="0" y2="100%">
                <stop offset="0" stopColor={color} />
                <stop offset="1" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <Bar
              dataKey="avg"
              fill={`url("#${"chartLG" + color}")`}
              barSize={35}
              radius={50}
            />
            <Bar
              dataKey="count"
              fill={`url("#${"chartLG" + color}")`}
              barSize={35}
              radius={50}
            />
            <Bar
              dataKey="sum"
              fill={`url("#${"chartLG" + color}")`}
              barSize={35}
              radius={50}
            />
          </BarChart>
        </div>
      }

      {(dailyData.length !== 0) &&
        <div>
          <p>Daily data</p>
          <BarChart width={300} height={300} data={dailyData}>
            <XAxis dataKey="day" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis dataKey="avg" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis dataKey="count" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis dataKey="sum" fontSize={10} axisLine={false} tickLine={false} />
            <defs>
              <linearGradient id={"chartLG" + color} x2="0" y2="100%">
                <stop offset="0" stopColor={color} />
                <stop offset="1" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <Bar
              dataKey="avg"
              fill={`url("#${"chartLG" + color}")`}
              barSize={35}
              radius={50}
            />
            <Bar
              dataKey="count"
              fill={`url("#${"chartLG" + color}")`}
              barSize={35}
              radius={50}
            />
            <Bar
              dataKey="sum"
              fill={`url("#${"chartLG" + color}")`}
              barSize={35}
              radius={50}
            />
          </BarChart>
        </div>
      }

      {(monthlyData.length !== 0) &&
        <div>
          <p>Monthly data</p>
          <BarChart width={300} height={300} data={monthlyData}>
            <XAxis dataKey="month" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis dataKey="avg" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis dataKey="count" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis dataKey="sum" fontSize={10} axisLine={false} tickLine={false} />
            <defs>
              <linearGradient id={"chartLG" + color} x2="0" y2="100%">
                <stop offset="0" stopColor={color} />
                <stop offset="1" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <Bar
              dataKey="avg"
              fill={`url("#${"chartLG" + color}")`}
              barSize={35}
              radius={50}
            />
            <Bar
              dataKey="count"
              fill={`url("#${"chartLG" + color}")`}
              barSize={35}
              radius={50}
            />
            <Bar
              dataKey="sum"
              fill={`url("#${"chartLG" + color}")`}
              barSize={35}
              radius={50}
            />
          </BarChart>
        </div>
      }


      {(yearlyData.length !== 0) &&
        <div>
          <p>Yearly data</p>
          <BarChart width={300} height={300} data={yearlyData}>
            <XAxis dataKey="year" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis dataKey="avg" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis dataKey="count" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis dataKey="sum" fontSize={10} axisLine={false} tickLine={false} />
            <defs>
              <linearGradient id={"chartLG" + color} x2="0" y2="100%">
                <stop offset="0" stopColor={color} />
                <stop offset="1" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <Bar
              dataKey="avg"
              fill={`url("#${"chartLG" + color}")`}
              barSize={35}
              radius={50}
            />
            <Bar
              dataKey="count"
              fill={`url("#${"chartLG" + color}")`}
              barSize={35}
              radius={50}
            />
            <Bar
              dataKey="sum"
              fill={`url("#${"chartLG" + color}")`}
              barSize={35}
              radius={50}
            />
          </BarChart>
        </div>
      }
    </>
  );
};

export default BarChartComp;
