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
  //   axios.get("http://127.0.0.1:8000/topicapirepo_hourly/")
  //     .then(res => console.log('hourlyData', res.data[0][variable]))
  //     .catch(err => console.log(err))

  //   axios.get("http://127.0.0.1:8000/topicapirepo_daily/")
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

  //   axios.get("http://127.0.0.1:8000/topicapirepo_monthly/")
  //     .then(res => console.log('monthlyData', res.data))
  //     .catch(err => console.log(err))

  //   axios.get("http://127.0.0.1:8000/topicapirepo_yearly/")
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [variable])


  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/topicapirepo_hourly/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setHourlyData(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [hourlyData])

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/topicapirepo_daily/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setDailyData(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [dailyData])

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/topicapirepo_monthly/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setMonthlyData(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [monthlyData])

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/topicapirepo_yearly/")
  //     .then(res => {
  //       const filteredData = res.data.filter(obj => obj.service === Yaxis)
  //       setYearlyData(filteredData)
  //       // console.log(filteredData)
  //     })
  //     .catch(err => console.log(err))
  // }, [yearlyData])




  useEffect(() => {

    if (Yaxis === 'cnd_tds') {
      axios.get("http://127.0.0.1:8000/topicapicnd_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapicnd_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapicnd_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapicnd_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapirwp_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapirwp_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapirwp_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapirwp_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapihpp_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapihpp_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapihpp_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapihpp_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapipanel_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapipanel_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapipanel_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapipanel_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiflowsen_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiflowsen_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiflowsen_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiflowsen_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiampv1_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv1_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv1_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv1_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiampv2_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv2_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv2_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv2_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiampv3_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv3_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv3_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv3_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiampv4_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv4_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv4_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv4_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiampv5_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv5_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv5_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiampv5_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiatm_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiatm_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiatm_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiatm_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapitap1_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapitap1_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapitap1_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapitap1_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapitap2_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapitap2_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapitap2_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapitap2_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapitap3_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapitap3_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapitap3_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapitap3_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapitap4_hourly/")
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

    axios.get("http://127.0.0.1:8000/topicapitap4_daily/")
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

    axios.get("http://127.0.0.1:8000/topicapitap4_monthly/")
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

    axios.get("http://127.0.0.1:8000/topicapitap4_yearly/")
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
      axios.get("http://127.0.0.1:8000/topicapiconsen_hourly/")
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

      axios.get("http://127.0.0.1:8000/topicapiconsen_daily/")
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

      axios.get("http://127.0.0.1:8000/topicapiconsen_monthly/")
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

      axios.get("http://127.0.0.1:8000/topicapiconsen_yearly/")
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
