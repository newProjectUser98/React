import axios from "axios";
import { useEffect, useState } from "react";
import { XAxis, BarChart, Bar, YAxis } from "recharts";

const BarChartComp = ({ color, chartData, Yaxis, variable, deviceID, graphData }) => {

  const [hourlyData, setHourlyData] = useState([])
  const [monthlyData, setMonthlyData] = useState([])
  const [dailyData, setDailyData] = useState([])
  const [yearlyData, setYearlyData] = useState([])

  // console.log("variable in bar", variable);
  // console.log("Yaxis in bar", Yaxis);


  // useEffect(() => {
  //   axios.get("/topicapirepo_hourly/")
  //     .then(res => console.log('hourlyData', res.data[0][variable]))
  //     .catch(err => console.log(err))

  //   axios.get("/topicapirepo_daily/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       // setDailyData(filteredData)
  //       const data = filteredData.map((item) => {
  //         return item[variable]
  //       })
  //       console.log('dailyData', filteredData)
  //       console.log('finalData', data)
  //     })
  //     .catch(err => console.log(err))

  //   axios.get("/topicapirepo_monthly/")
  //     .then(res => console.log('monthlyData', res.data))
  //     .catch(err => console.log(err))

  //   axios.get("/topicapirepo_yearly/")
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [variable])


  // useEffect(() => {
  //   axios.get("/topicapirepo_hourly/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setHourlyData(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [hourlyData])

  // useEffect(() => {
  //   axios.get("/topicapirepo_daily/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setDailyData(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [dailyData])

  // useEffect(() => {
  //   axios.get("/topicapirepo_monthly/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setMonthlyData(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [monthlyData])

  // useEffect(() => {
  //   axios.get("/topicapirepo_yearly/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setYearlyData(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [yearlyData])




  useEffect(() => {

    if (Yaxis === 'cnd_tds') {
      axios.get("/topicapicnd_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapicnd_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapicnd_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapicnd_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'rwp') {
      axios.get("/topicapirwp_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapirwp_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapirwp_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapirwp_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'hpp') {
      axios.get("/topicapihpp_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapihpp_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapihpp_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapihpp_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'panel') {
      axios.get("/topicapipanel_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapipanel_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapipanel_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapipanel_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'flowsen') {
      axios.get("/topicapiflowsen_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiflowsen_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiflowsen_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiflowsen_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'ampv1') {
      axios.get("/topicapiampv1_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv1_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv1_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv1_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          console.log('res.data in ampv1 yearly', res.data);
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('yearlyData in ampv1', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'ampv2') {
      axios.get("/topicapiampv2_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          console.log('res.data of hourly in ampv2', res.data);
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData of ampv2', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv2_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv2_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv2_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'ampv3') {
      axios.get("/topicapiampv3_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv3_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv3_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv3_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'ampv4') {
      axios.get("/topicapiampv4_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv4_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv4_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv4_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'ampv5') {
      axios.get("/topicapiampv5_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv5_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv5_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiampv5_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'atm') {
      axios.get("/topicapiatm_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiatm_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiatm_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiatm_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'tap1') {
      axios.get("/topicapitap1_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap1_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap1_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap1_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'tap2') {
      axios.get("/topicapitap2_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap2_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap2_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap2_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'tap3') {
      axios.get("/topicapitap3_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap3_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap3_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapitap3_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }

    else if (Yaxis === 'tap4') {
      axios.get("/topicapitap4_hourly/")
      .then(res => {
        const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
        // setDailyData(filteredData)
        const data = filteredData.map((item) => {
          return item[variable]
        })
        console.log('hourlyData', filteredData)
        // console.log('finalData in hourly', data)
        setHourlyData(filteredData)
      })
      .catch(err => console.log(err))

    axios.get("/topicapitap4_daily/")
      .then(res => {
        const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
        // setDailyData(filteredData)
        const data = filteredData.map((item) => {
          return item[variable]
        })
        // console.log('dailyData', filteredData)
        // console.log('finalData in daily', data)
        setDailyData(filteredData)
      })
      .catch(err => console.log(err))

    axios.get("/topicapitap4_monthly/")
      .then(res => {
        const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
        // setDailyData(filteredData)
        const data = filteredData.map((item) => {
          return item[variable]
        })
        // console.log('monthlyData', filteredData)
        // console.log('finalData in monthly', data)
        setMonthlyData(filteredData)
      })
      .catch(err => console.log(err))

    axios.get("/topicapitap4_yearly/")
      .then(res => {
        const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
        // setDailyData(filteredData)
        const data = filteredData.map((item) => {
          return item[variable]
        })
        console.log('hourlyData', filteredData)
        // console.log('finalData in hourly', data)
        setYearlyData(filteredData)
      })
      .catch(err => console.log(err))
    }

    else if (Yaxis === 'consen') {
      axios.get("/topicapiconsen_hourly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setHourlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiconsen_daily/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('dailyData', filteredData)
          // console.log('finalData in daily', data)
          setDailyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiconsen_monthly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          // console.log('monthlyData', filteredData)
          // console.log('finalData in monthly', data)
          setMonthlyData(filteredData)
        })
        .catch(err => console.log(err))

      axios.get("/topicapiconsen_yearly/")
        .then(res => {
          const filteredData = res.data.filter(obj => obj.service === Yaxis && obj.device_id === deviceID)
          // setDailyData(filteredData)
          const data = filteredData.map((item) => {
            return item[variable]
          })
          console.log('hourlyData', filteredData)
          // console.log('finalData in hourly', data)
          setYearlyData(filteredData)
        })
        .catch(err => console.log(err))
    }else{
        setHourlyData([])
        setDailyData([])
        setMonthlyData([])
        setYearlyData([])
    }

  }, [variable])

  return (
    <>

      {(hourlyData.length !== 0) &&
        <div>
          <p>Hourly data</p>
          <BarChart width={300} height={300} data={hourlyData}>
            <XAxis dataKey="hour" fontSize={10} axisLine={false} tickLine={false} />
            {variable && (
              <>
                <YAxis dataKey={`${variable}.${graphData}`} fontSize={10} axisLine={false} tickLine={false} />
                {/* <YAxis dataKey={`${variable}.avg`} fontSize={10} axisLine={false} tickLine={false} />
                <YAxis dataKey={`${variable}.count`} fontSize={10} axisLine={false} tickLine={false} /> */}
              </>
            )}
            {/* <YAxis dataKey="sum" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis dataKey="avg" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis dataKey="count" fontSize={10} axisLine={false} tickLine={false} /> */}
            <defs>
              <linearGradient id={"chartLG" + color} x2="0" y2="100%">
                <stop offset="0" stopColor={color} />
                <stop offset="1" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            {variable && (
              <>
                <Bar
                  dataKey={`${variable}.${graphData}`}
                  fill={`url("#${"chartLG" + color}")`}
                  barSize={35}
                  radius={50}
                />
                {/* <Bar
                  dataKey={`${variable}.avg`}
                  fill={`url("#${"chartLG" + color}")`}
                  barSize={35}
                  radius={50}
                />
                <Bar
                  dataKey={`${variable}.count`}
                  fill={`url("#${"chartLG" + color}")`}
                  barSize={35}
                  radius={50}
                /> */}
              </>
            )}

            {/* <Bar
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
            /> */}
          </BarChart>
        </div>
      }

      {(dailyData.length !== 0) &&
        <div>
          <p>Daily data</p>
          <BarChart width={300} height={300} data={dailyData}>
            <XAxis dataKey="day" fontSize={10} axisLine={false} tickLine={false} />
            {variable && (
              <>
                <YAxis dataKey={`${variable}.${graphData}`} fontSize={10} axisLine={false} tickLine={false} />
                {/* <YAxis dataKey={`${variable}.avg`} fontSize={10} axisLine={false} tickLine={false} />
                <YAxis dataKey={`${variable}.count`} fontSize={10} axisLine={false} tickLine={false} /> */}
              </>
            )}
            <defs>
              <linearGradient id={"chartLG" + color} x2="0" y2="100%">
                <stop offset="0" stopColor={color} />
                <stop offset="1" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            {variable && (
              <>
                <Bar
                  dataKey={`${variable}.${graphData}`}
                  fill={`url("#${"chartLG" + color}")`}
                  barSize={35}
                  radius={50}
                />
                {/* <Bar
                  dataKey={`${variable}.avg`}
                  fill={`url("#${"chartLG" + color}")`}
                  barSize={35}
                  radius={50}
                />
                <Bar
                  dataKey={`${variable}.count`}
                  fill={`url("#${"chartLG" + color}")`}
                  barSize={35}
                  radius={50}
                /> */}
              </>
            )}
          </BarChart>
        </div>
      }

      {(monthlyData.length !== 0) &&
        <div>
          <p>Monthly data</p>
          <BarChart width={300} height={300} data={monthlyData}>
            <XAxis dataKey="month" fontSize={10} axisLine={false} tickLine={false} />
            {variable && (
              <>
                <YAxis dataKey={`${variable}.${graphData}`} fontSize={10} axisLine={false} tickLine={false} />
                {/* <YAxis dataKey={`${variable}.avg`} fontSize={10} axisLine={false} tickLine={false} />
                <YAxis dataKey={`${variable}.count`} fontSize={10} axisLine={false} tickLine={false} /> */}
              </>
            )}
            <defs>
              <linearGradient id={"chartLG" + color} x2="0" y2="100%">
                <stop offset="0" stopColor={color} />
                <stop offset="1" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            {variable && (
              <>
                <Bar
                  dataKey={`${variable}.${graphData}`}
                  fill={`url("#${"chartLG" + color}")`}
                  barSize={35}
                  radius={50}
                />
                {/* <Bar
                  dataKey={`${variable}.avg`}
                  fill={`url("#${"chartLG" + color}")`}
                  barSize={35}
                  radius={50}
                />
                <Bar
                  dataKey={`${variable}.count`}
                  fill={`url("#${"chartLG" + color}")`}
                  barSize={35}
                  radius={50}
                /> */}
              </>
            )}
          </BarChart>
        </div>
      }


      {(yearlyData.length !== 0) &&
        <div>
          <p>Yearly data</p>
          <BarChart width={300} height={300} data={yearlyData}>
            <XAxis dataKey="year" fontSize={10} axisLine={false} tickLine={false} />
            {variable && (
              <>
                <YAxis dataKey={`${variable}.${graphData}`} fontSize={10} axisLine={false} tickLine={false} />
                {/* <YAxis dataKey={`${variable}.avg`} fontSize={10} axisLine={false} tickLine={false} />
                <YAxis dataKey={`${variable}.count`} fontSize={10} axisLine={false} tickLine={false} /> */}
              </>
            )}
            <defs>
              <linearGradient id={"chartLG" + color} x2="0" y2="100%">
                <stop offset="0" stopColor={color} />
                <stop offset="1" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            {variable && (
              <>
                <Bar
                  dataKey={`${variable}.${graphData}`}
                  fill={`url("#${"chartLG" + color}")`}
                  barSize={35}
                  radius={50}
                />
                {/* <Bar
                  dataKey={`${variable}.avg`}
                  fill={`url("#${"chartLG" + color}")`}
                  barSize={35}
                  radius={50}
                />
                <Bar
                  dataKey={`${variable}.count`}
                  fill={`url("#${"chartLG" + color}")`}
                  barSize={35}
                  radius={50}
                /> */}
              </>
            )}
          </BarChart>
        </div>
      }
    </>
  );
};

export default BarChartComp;
