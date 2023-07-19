import React, { useEffect, useState } from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import SummaryCard from "./SummaryCard";
import ChartComp from "./ChartComp";
import { Box, Tab, Tabs } from "@mui/material";
import "../ReportComp.scss";

import { ReactComponent as WorkingHoursIcon } from "../../../assets/icons/ReportsIcon/WorkingHoursIcon.svg";
import { ReactComponent as AverageWaterQualityIcon } from "../../../assets/icons/ReportsIcon/AverageWaterQualityIcon.svg";
import { ReactComponent as DownTimeIcon } from "../../../assets/icons/ReportsIcon/DownTimeIcon.svg";
import { ReactComponent as TotalVolumeProducedIcon } from "../../../assets/icons/ReportsIcon/TotalVolumeProducedIcon.svg";
import { ReactComponent as NumberOfFaultsIcon } from "../../../assets/icons/ReportsIcon/NumberOfFaultsIcon.svg";
import { ReactComponent as PermeateFlowRateIcon } from "../../../assets/icons/ReportsIcon/PermeateFlowRateIcon.svg";
import axios from "axios";

const WaterTreatmentUnit = ({ deviceID, fromDate, toDate, Yaxis, setYaxis }) => {
  const [value, setValue] = React.useState(0);
  const [totalVolumeProduced, setTotalVolumeProduced] = useState()
  const [averageWaterQualityInTreat, setAverageWaterQualityInTreat] = useState()
  const [averageWaterQualityInDisp, setAverageWaterQualityInDisp] = useState()
  const [permeateFlowRate, setPermeateFlowRate] = useState()
  const [numberOfFaults, setNumberOfFaults] = useState()
  const [qrCollection, setqrCollection] = useState()
  const [cardCollection, setCardCollection] = useState()
  const [coinCollection, setCoinCollection] = useState()
  const [flowsen1, setFlowSen1] = useState()
  const [flowsen2, setFlowSen2] = useState()
  const [flowsen3, setFlowSen3] = useState()
  const [flowsen4, setFlowSen4] = useState()
  const [workingHoursInDisp, setWorkingHoursInDisp] = useState()
  const [registrationDate, setRegistrationDate] = useState()
  const [workingDate, setWorkingDate] = useState()
  const [difference, setDifference] = useState()


  const handleChange = (_, newValue) => {
    setValue(newValue);
  };


  useEffect(() => {
    handleData()
  }, [fromDate, toDate, deviceID])

  async function handleData() {

    if (fromDate && toDate) {
      const fromDateObj = new Date(fromDate);
      const toDateObj = new Date(toDate);

      axios.get(`/topicapi/P_flowsen_daily/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order


          const recentDocuments = filteredData
          //.slice(-31); 
          // Get a maximum of 31 most recent documents

          console.log('filtered data in date search', recentDocuments);

          const TotalVolumeProduced = recentDocuments.reduce((total, document) => {
            return total + document.fr2.avg;
          }, 0);

          console.log('sum of avg of P_flowsen variable', TotalVolumeProduced);

          const numberOfDocuments = recentDocuments.length;
          const AvgOfTotalVolumeProduced = TotalVolumeProduced / numberOfDocuments;

          setTotalVolumeProduced(TotalVolumeProduced)
          setPermeateFlowRate(AvgOfTotalVolumeProduced / 24)
        })
        .catch(err => console.log(err))



      axios.get(`/topicapi/tds_daily/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order


          const recentDocuments = filteredData
          //.slice(-31); 
          // Get a maximum of 31 most recent documents

          console.log('filtered data in date search', recentDocuments);

          const SumOfAverageWaterQualityInTreat = recentDocuments.reduce((total, document) => {
            return total + document.tds.avg;
          }, 0);

          const numberOfDocuments = recentDocuments.length;
          const AvgOfAverageWaterQualityInTreat = SumOfAverageWaterQualityInTreat / numberOfDocuments;

          console.log('sum of avg of treat_tds variable', AvgOfAverageWaterQualityInTreat);

          setAverageWaterQualityInTreat(AvgOfAverageWaterQualityInTreat)
        })
        .catch(err => console.log(err))


      axios.get(`/topicapi/all_panel/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order


          const recentDocuments = filteredData
          //.slice(-31); 
          // Get a maximum of 31 most recent documents

          console.log('res in updated treat panel', recentDocuments);


          let errCount = 0;
          let prevErr = '';

          recentDocuments.map((document) => {
            const err = document.err;

            if (err !== prevErr) {
              errCount++;
              prevErr = err;
            }
            return null; // Return null since map requires a return value
          });

          console.log('number of faults', errCount);
          setNumberOfFaults(errCount)

        })
        .catch(err => console.log(err))


      // axios.get(`/topicapi/tds_consen_daily/`)
      axios.get(`/topicapi/atm_daily/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order


          const recentDocuments = filteredData
          //.slice(-31) 
          // Get a maximum of 31 most recent documents


          console.log('filtered data in date search', recentDocuments);

          const SumOfAverageWaterQualityInDisp = recentDocuments.reduce((total, document) => {
            // return total + document.tds.avg;
            return total + document.ndv.avg;
          }, 0);

          const numberOfDocuments = recentDocuments.length;
          const AvgOfAverageWaterQualityInDisp = SumOfAverageWaterQualityInDisp / numberOfDocuments;

          // console.log('sum of avg of disp_tds variable', AvgOfAverageWaterQualityInDisp);
          console.log('sum of avg of ndv variable', AvgOfAverageWaterQualityInDisp);

          setAverageWaterQualityInDisp(AvgOfAverageWaterQualityInDisp)
        })
        .catch(err => console.log(err))


      axios.get(`/topicapi/all_atm/`)
        .then(res => {

          //Coin collection code starts
          const coinfilteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID && obj.ntt == 'cn'
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order


          const coinrecentDocuments = coinfilteredData
          //.slice(-31); 
          // Get a maximum of 31 most recent documents

          console.log('res in coinfilteredData', coinrecentDocuments);

          const TotalCoins = coinrecentDocuments.reduce((total, document) => {
            return total + document.nta;
          }, 0);

          console.log('Total collection of coin', TotalCoins);
          setCoinCollection(TotalCoins)
          //Coin collection code ends

          //Card collection code starts
          const cardfilteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID && obj.ntt == 'cd'
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order


          const cardrecentDocuments = cardfilteredData
          //.slice(-31); 
          // Get a maximum of 31 most recent documents

          console.log('res in cardfilteredData', cardrecentDocuments);

          const TotalCards = cardrecentDocuments.reduce((total, document) => {
            return total + document.nta;
          }, 0);

          console.log('Total collection of cards', TotalCards);
          setCardCollection(TotalCards)
          //Card collection code ends


          //QR collection code starts
          const QRfilteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID && obj.ntt == 'qr'
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order


          const QRrecentDocuments = QRfilteredData
          //.slice(-31); 
          // Get a maximum of 31 most recent documents

          console.log('res in QRfilteredData', QRrecentDocuments);

          const TotalQR = QRrecentDocuments.reduce((total, document) => {
            return total + document.nta;
          }, 0);

          console.log('Total collection of QR', TotalQR);
          setqrCollection(TotalQR)
          //QR collection code ends

        })
        .catch(err => console.log(err))

      axios.get(`/topicapi/flowsen1_daily/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order


          const recentDocuments = filteredData
          //.slice(-31); 
          // Get a maximum of 31 most recent documents

          console.log('filtered data in flowsen1 search', recentDocuments);

          const FlowSen1VolumeProduced = recentDocuments.reduce((total, document) => {
            return total + document.fr.avg;
          }, 0);

          console.log('sum of avg of flowsen1 variable', FlowSen1VolumeProduced);

          setFlowSen1(FlowSen1VolumeProduced)
        })
        .catch(err => console.log(err))

      axios.get(`/topicapi/flowsen2_daily/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order


          const recentDocuments = filteredData
          //.slice(-31); 
          // Get a maximum of 31 most recent documents

          console.log('filtered data in flowsen2 search', recentDocuments);

          const FlowSen2VolumeProduced = recentDocuments.reduce((total, document) => {
            return total + document.fr.avg;
          }, 0);

          console.log('sum of avg of flowsen2 variable', FlowSen2VolumeProduced);

          setFlowSen2(FlowSen2VolumeProduced)
        })
        .catch(err => console.log(err))

      axios.get(`/topicapi/flowsen3_daily/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order


          const recentDocuments = filteredData
          //.slice(-31); 
          // Get a maximum of 31 most recent documents

          console.log('filtered data in flowsen3 search', recentDocuments);

          const FlowSen3VolumeProduced = recentDocuments.reduce((total, document) => {
            return total + document.fr.avg;
          }, 0);

          console.log('sum of avg of flowsen3 variable', FlowSen3VolumeProduced);

          setFlowSen3(FlowSen3VolumeProduced)
        })
        .catch(err => console.log(err))

      axios.get(`/topicapi/flowsen4_daily/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order


          const recentDocuments = filteredData
          //.slice(-31); 
          // Get a maximum of 31 most recent documents

          console.log('filtered data in flowsen4 search', recentDocuments);

          const FlowSen4VolumeProduced = recentDocuments.reduce((total, document) => {
            return total + document.fr.avg;
          }, 0);

          console.log('sum of avg of flowsen4 variable', FlowSen4VolumeProduced);

          setFlowSen4(FlowSen4VolumeProduced)
        })
        .catch(err => console.log(err))


      //For device_info
      axios.get(`/topicapi/device_info/`)
        .then(res => {
          const filteredData = res.data.filter(information => information.componant_name === 'atm' && information.unit_type === "water_dispense")
          console.log('device_info_filteredData', filteredData);
          const date = new Date(filteredData[0].created_at).toISOString().slice(0, 10);
          const dateMain = new Date(date);
          // console.log('date of device_info', date);
          setRegistrationDate(dateMain)
          console.log('type of date', typeof (date));
        })
        .catch(err => console.log(err))


      //For Working Hours in Dispense unit
      axios.get(`/topicapi/atm_daily/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order


          const recentDocuments = filteredData
          //.slice(-31); 
          // Get a maximum of 31 most recent documents

          console.log('filtered data in disp_working_hours', recentDocuments);

          const WorkingHoursDone = recentDocuments.reduce((total, document) => {
            return total + document.whr.sum;
          }, 0);

          console.log('sum of working hours', WorkingHoursDone);

          setWorkingHoursInDisp(WorkingHoursDone)
          const wdate = new Date(filteredData[0].created_at).toISOString().slice(0, 10);
          const wdateMain = new Date(wdate);
          setWorkingDate(wdateMain)
        })
        .catch(err => console.log(err))
    }
  }

  // Use another useEffect to calculate the difference when both dates are ready
  useEffect(() => {
    if (workingDate && registrationDate) {
      const differenceInMilliseconds = Math.floor(workingDate - registrationDate);
      const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
      setDifference(differenceInHours);
    }
  }, [workingDate, registrationDate]);

  console.log('date of device_registration', registrationDate);
  console.log('date of device_working', workingDate);
  console.log('difference between date in hours', difference);
  console.log('value in tabpanel', value);
  const SummaryCardData = [
    { value: "120 Hrs", icon: <WorkingHoursIcon />, title: "Working Hours" },
    {
      // value: "240",
      value: `${totalVolumeProduced} m3`,
      icon: <TotalVolumeProducedIcon />,
      title: "Total Volume Produced",
    },
    {
      // value: "240",
      value: `${averageWaterQualityInTreat} ppm`,
      icon: <AverageWaterQualityIcon />,
      title: "Average Water Quality",
    },
    {
      // value: "XYZ",
      value: `${permeateFlowRate} m3/hr`,
      icon: <PermeateFlowRateIcon />,
      title: "Permeate Flow Rate",
    },
    { value: `${numberOfFaults}`, icon: <NumberOfFaultsIcon />, title: "Number Of Faults" },
    { value: "XYZ", icon: <DownTimeIcon />, title: "Down Time" },
  ];




  const SummaryCardData1 = [
    {
      value: `${workingHoursInDisp} Hrs`,
      icon: <WorkingHoursIcon />,
      title: "Working Hours"
    },
    {
      // value: "240",
      value: `${flowsen1 + flowsen2 + flowsen3 + flowsen4} m3`,
      icon: <TotalVolumeProducedIcon />,
      title: "Total Volume Produced",
    },
    {
      // value: "240",
      // value: `${averageWaterQualityInDisp} ppm`,
      value: `${averageWaterQualityInDisp} m3/hr`,
      icon: <AverageWaterQualityIcon />,
      title: "Average Water Quality",
    },
    {
      value: `${numberOfFaults}`,
      icon: <NumberOfFaultsIcon />,
      title: "Number Of Faults"
    },
    {
      value: `${difference - workingHoursInDisp} Hrs`,
      icon: <DownTimeIcon />,
      title: "Down Time"
    },
    {
      value: `${qrCollection} Rs`,
      icon: <DownTimeIcon />,
      title: "Total QR collection"
    },
    {
      value: `${cardCollection} Rs`,
      icon: <DownTimeIcon />,
      title: "Total Card collection"
    },
    {
      value: `${coinCollection} Rs`,
      icon: <DownTimeIcon />,
      title: "Total Coin Collection"
    },
    {
      value: `${qrCollection + cardCollection + coinCollection} Rs`,
      icon: <DownTimeIcon />,
      title: "Total Collection"
    },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "40px",
        width: "100%",
      }}
    >
      <Grid
        className={
          "sm:rounded-t-[40px] rounded-t-[20px] sm:items-start items-center iw-water-treatment-unit__warpper"
        }
        display={"flex"}
        sx={{
          height: "69px",
          background: "linear-gradient(270deg, #BBE2E4 8.66%, #B68FE7 103.05%)",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: {
              background: "white",
            },
          }}
        >
          <Tab
            label={
              <Typography
                fontWeight={value === 0 ? 600 : 400}
                fontFamily={"Poppins"}
                textTransform="none"
                className={
                  value === 0
                    ? "sm:text-[16px] text-[14px] sm:text-white text-[#B68FE7]"
                    : "sm:text-[16px] text-[14px] sm:text-[#ECECEC] text-[#464E5F]"
                }
              >
                Water Treatment Unit
              </Typography>
            }
            className="sm:p-5 p-2 sm:text-white "
          />
          <Tab
            label={
              <Typography
                fontWeight={value === 1 ? 600 : 400}
                fontFamily={"Poppins"}
                textTransform="none"
                className={
                  value === 1
                    ? "sm:text-[16px] text-[14px] sm:text-white text-[#B68FE7]"
                    : "sm:text-[16px] text-[14px] sm:text-[#ECECEC] text-[#464E5F]"
                }
              >
                Dispensing Unit
              </Typography>
            }
            className="sm:p-5 p-2 sm:text-white "
          />
        </Tabs>

        {/* <Typography
          fontWeight={600}
          fontFamily={"Poppins"}
          className="sm:text-[18px] text-[14px] sm:p-5 p-2 sm:text-white text-[#B68FE7]"
        >
          Water Treatment Unit
        </Typography>
        <Typography
          fontWeight={500}
          fontFamily={"Poppins"}
          className="sm:text-[18px] text-[14px] sm:p-5 p-2 sm:text-[#ECECEC] text-[#464E5F]"
        >
          Dispensing Unit
        </Typography> */}
      </Grid>

      <TabPanel value={value} index={0}>
        <Grid
          bgcolor={"#F7F7F7"}
          pb={"30px"}
          className="sm:bg-[#F7F7F7] bg-white"
        >
          <Grid container justifyContent="flex-end" className="sm:flex hidden">
            <Typography
              fontWeight={500}
              fontSize={"14px"}
              fontFamily={"Poppins"}
              p={"24px"}
              color={"#464E5F"}
            >
              Summary Overview
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            gap={"20px"}
            className="sm:flex-wrap flex-nowrap sm:justify-evenly 
          justify-start overflow-auto sm:pb-0 p-5 sm:pl-0 iw-Summary-card-data"
          >
            {SummaryCardData.map((item, i) => (
              <SummaryCard
                key={i}
                value={item.value}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </Grid>
          <Grid pt={"30px"}>
            <Divider
              className="border-white"
              variant="middle"
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Grid>
            <ChartComp deviceID={deviceID} value={value} fromDate={fromDate} toDate={toDate} Yaxis={Yaxis} setYaxis={setYaxis} />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        {/* {"Dispensing Unit Data"} */}
        <Grid
          bgcolor={"#F7F7F7"}
          pb={"30px"}
          className="sm:bg-[#F7F7F7] bg-white"
        >
          <Grid container justifyContent="flex-end" className="sm:flex hidden">
            <Typography
              fontWeight={500}
              fontSize={"14px"}
              fontFamily={"Poppins"}
              p={"24px"}
              color={"#464E5F"}
            >
              Summary Overview
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            gap={"20px"}
            className="sm:flex-wrap flex-nowrap sm:justify-evenly 
          justify-start overflow-auto sm:pb-0 p-5 sm:pl-0 iw-Summary-card-data"
          >
            {SummaryCardData1.map((item, i) => (
              <SummaryCard
                key={i}
                value={item.value}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </Grid>
          <Grid pt={"30px"}>
            <Divider
              className="border-white"
              variant="middle"
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Grid>
            <ChartComp deviceID={deviceID} value={value} fromDate={fromDate} toDate={toDate} Yaxis={Yaxis} setYaxis={setYaxis} />
          </Grid>
        </Grid>
      </TabPanel>
    </Paper>
  );
};

export default WaterTreatmentUnit;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return <Box {...other}>{value === index && <Box>{children}</Box>}</Box>;
}