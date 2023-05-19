import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import axios from "axios";

const LineChartComp = ({ color, chartData, Yaxis, variable, deviceID, graphData }) => {

  const [hourlyData1, setHourlyData1] = useState([])
  const [monthlyData1, setMonthlyData1] = useState([])
  const [dailyData1, setDailyData1] = useState([])
  const [yearlyData1, setYearlyData1] = useState([])


  // useEffect(() => {
  //   axios.get("/topicapirepo_hourly/")
  //     .then(res => setHourlyData1(res.data))
  //     .catch(err => console.log(err))

  //   axios.get("/topicapirepo_daily/")
  //     .then(res => setDailyData1(res.data))
  //     .catch(err => console.log(err))

  //   axios.get("/topicapirepo_monthly/")
  //     .then(res => setMonthlyData1(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  // useEffect(() => {
  //   axios.get("/topicapirepo_hourly/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setHourlyData1(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [hourlyData1])

  // useEffect(() => {
  //   axios.get("/topicapirepo_daily/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setDailyData1(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [dailyData1])

  // useEffect(() => {
  //   axios.get("/topicapirepo_monthly/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setMonthlyData1(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [monthlyData1])

  // useEffect(() => {
  //   axios.get("/topicapirepo_yearly/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setYearlyData1(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [yearlyData1])



  useEffect(() => {

    if (Yaxis === 'cnd_tds') {
      axios.get("/topicapicnd_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapicnd_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapicnd_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapicnd_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'rwp') {
      axios.get("/topicapirwp_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapirwp_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapirwp_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapirwp_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'hpp') {
      axios.get("/topicapihpp_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapihpp_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapihpp_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapihpp_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'panel') {
      axios.get("/topicapipanel_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapipanel_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapipanel_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapipanel_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'flowsen') {
      axios.get("/topicapiflowsen_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiflowsen_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiflowsen_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiflowsen_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'ampv1') {
      axios.get("/topicapiampv1_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv1_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv1_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv1_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'ampv2') {
      axios.get("/topicapiampv2_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv2_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv2_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv2_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'ampv3') {
      axios.get("/topicapiampv3_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv3_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv3_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv3_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'ampv4') {
      axios.get("/topicapiampv4_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv4_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv4_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv4_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'ampv5') {
      axios.get("/topicapiampv5_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv5_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv5_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv5_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'atm') {
      axios.get("/topicapiatm_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiatm_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiatm_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiatm_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'tap1') {
      axios.get("/topicapitap1_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap1_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap1_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap1_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'tap2') {
      axios.get("/topicapitap2_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap2_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap2_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap2_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'tap3') {
      axios.get("/topicapitap3_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap3_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap3_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap3_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'tap4') {
      axios.get("/topicapitap4_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap4_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap4_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap4_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'consen') {
      axios.get("/topicapiconsen_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiconsen_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiconsen_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData1(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiconsen_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData1(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData1(filteredData)
        })
        .catch(err => console.log(err))
    } else {
      setHourlyData1([])
      setDailyData1([])
      setMonthlyData1([])
      setYearlyData1([])
    }

  }, [variable])



  return (
    <>
      {(hourlyData1.length !== 0) &&
        <div>
          <p>Hourly Data</p>
          <LineChart width={300} height={300} data={hourlyData1}>
            <XAxis dataKey="hour" fontSize={10} tickLine={false} />
            {variable && (
              <>
                <YAxis dataKey={`${variable}.${graphData}`} fontSize={10} tickLine={false} />
                <Line dataKey={`${variable}.${graphData}`} stroke={color} dot={false} />
                {/* <YAxis dataKey={`${variable}.avg`} fontSize={10} tickLine={false} />
                <Line dataKey={`${variable}.avg`} stroke={color} dot={false} />
                <YAxis dataKey={`${variable}.count`} fontSize={10} tickLine={false} />
                <Line dataKey={`${variable}.count`} stroke={color} dot={false} /> */}
              </>
            )}
            {/* <YAxis dataKey="sum" fontSize={10} tickLine={false} />
            <Line dataKey="sum" stroke={color} dot={false} />
            <YAxis dataKey="avg" fontSize={10} tickLine={false} />
            <Line dataKey="avg" stroke={color} dot={false} />
            <YAxis dataKey="count" fontSize={10} tickLine={false} />
            <Line dataKey="count" stroke={color} dot={false} /> */}
          </LineChart>
        </div>
      }

      {(dailyData1.length !== 0) &&
        <div>
          <p>Daily Data</p>
          <LineChart width={300} height={300} data={dailyData1}>
            <XAxis dataKey="day" fontSize={10} tickLine={false} />
            {variable && (
              <>
                <YAxis dataKey={`${variable}.${graphData}`} fontSize={10} tickLine={false} />
                <Line dataKey={`${variable}.${graphData}`} stroke={color} dot={false} />
                {/* <YAxis dataKey={`${variable}.avg`} fontSize={10} tickLine={false} />
                <Line dataKey={`${variable}.avg`} stroke={color} dot={false} />
                <YAxis dataKey={`${variable}.count`} fontSize={10} tickLine={false} />
                <Line dataKey={`${variable}.count`} stroke={color} dot={false} /> */}
              </>
            )}
          </LineChart>
        </div>
      }

      {(monthlyData1.length !== 0) &&
        <div>
          <p>Monthly Data</p>
          <LineChart width={300} height={300} data={monthlyData1}>
            <XAxis dataKey="month" fontSize={10} tickLine={false} />
            {variable && (
              <>
                <YAxis dataKey={`${variable}.${graphData}`} fontSize={10} tickLine={false} />
                <Line dataKey={`${variable}.${graphData}`} stroke={color} dot={false} />
                {/* <YAxis dataKey={`${variable}.avg`} fontSize={10} tickLine={false} />
                <Line dataKey={`${variable}.avg`} stroke={color} dot={false} />
                <YAxis dataKey={`${variable}.count`} fontSize={10} tickLine={false} />
                <Line dataKey={`${variable}.count`} stroke={color} dot={false} /> */}
              </>
            )}
          </LineChart>
        </div>
      }

      {(yearlyData1.length !== 0) &&
        <div>
          <p>Yearly Data</p>
          <LineChart width={300} height={300} data={monthlyData1}>
            <XAxis dataKey="year" fontSize={10} tickLine={false} />
            {variable && (
              <>
                <YAxis dataKey={`${variable}.${graphData}`} fontSize={10} tickLine={false} />
                <Line dataKey={`${variable}.${graphData}`} stroke={color} dot={false} />
                {/* <YAxis dataKey={`${variable}.avg`} fontSize={10} tickLine={false} />
                <Line dataKey={`${variable}.avg`} stroke={color} dot={false} />
                <YAxis dataKey={`${variable}.count`} fontSize={10} tickLine={false} />
                <Line dataKey={`${variable}.count`} stroke={color} dot={false} /> */}
              </>
            )}
          </LineChart>
        </div>
      }
    </>
  )

};

export default LineChartComp;
