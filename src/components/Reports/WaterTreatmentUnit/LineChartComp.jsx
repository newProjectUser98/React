import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import axios from "axios";

const LineChartComp = ({ color, chartData, Yaxis, variable, deviceID, graphData }) => {

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

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/topicapirepo_hourly/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setHourlyData1(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [hourlyData1])

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/topicapirepo_daily/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setDailyData1(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [dailyData1])

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/topicapirepo_monthly/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setMonthlyData1(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [monthlyData1])

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/topicapirepo_yearly/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setYearlyData1(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [yearlyData1])



  useEffect(() => {

    if (Yaxis === 'cnd_tds') {
      axios.get("http://127.0.0.1:8000/topicapicnd_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapicnd_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapicnd_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapicnd_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapirwp_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapirwp_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapirwp_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapirwp_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapihpp_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapihpp_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapihpp_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapihpp_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapipanel_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapipanel_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapipanel_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapipanel_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiflowsen_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiflowsen_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiflowsen_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiflowsen_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiampv1_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv1_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv1_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv1_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiampv2_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv2_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv2_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv2_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiampv3_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv3_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv3_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv3_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiampv4_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv4_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv4_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv4_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiampv5_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv5_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv5_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv5_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiatm_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiatm_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiatm_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiatm_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapitap1_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapitap1_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapitap1_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapitap1_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapitap2_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapitap2_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapitap2_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapitap2_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapitap3_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapitap3_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapitap3_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapitap3_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapitap4_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapitap4_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapitap4_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapitap4_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiconsen_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiconsen_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiconsen_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiconsen_yearly/")
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
