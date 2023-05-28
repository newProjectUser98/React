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

const WaterTreatmentUnit = ({ deviceID, fromDate, toDate }) => {
  const [value, setValue] = React.useState(0);
  const [totalVolumeProduced, setTotalVolumeProduced] = useState()
  const [averageWaterQualityInTreat, setAverageWaterQualityInTreat] = useState()
  const [averageWaterQualityInDisp, setAverageWaterQualityInDisp] = useState()
  const [permeateFlowRate, setPermeateFlowRate] = useState()
  const [numberOfFaults, setNumberOfFaults] = useState()
  const [qrCollection, setqrCollection] = useState()
  const [cardCollection, setCardCollection] = useState()
  const [coinCollection, setCoinCollection] = useState()


  const handleChange = (_, newValue) => {
    setValue(newValue);
  };


  useEffect(() => {

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
            .reverse(); // Reverse the order to get ascending order

          const recentDocuments = filteredData.slice(-31); // Get a maximum of 31 most recent documents

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



      axios.get(`/topicapi/cnd_tds_daily/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order
            .reverse(); // Reverse the order to get ascending order

          const recentDocuments = filteredData.slice(-31); // Get a maximum of 31 most recent documents

          console.log('filtered data in date search', recentDocuments);

          const SumOfAverageWaterQualityInTreat = recentDocuments.reduce((total, document) => {
            return total + document.cnd.avg;
          }, 0);

          const numberOfDocuments = recentDocuments.length;
          const AvgOfAverageWaterQualityInTreat = SumOfAverageWaterQualityInTreat / numberOfDocuments;

          console.log('sum of avg of treat_tds variable', AvgOfAverageWaterQualityInTreat);

          setAverageWaterQualityInTreat(AvgOfAverageWaterQualityInTreat)
        })
        .catch(err => console.log(err))


      axios.get(`/topicapi/all_minit_tablespannel/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order
            .reverse(); // Reverse the order to get ascending order

          const recentDocuments = filteredData.slice(-31); // Get a maximum of 31 most recent documents

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


      axios.get(`/topicapi/tds_consen_daily/`)
        .then(res => {
          const filteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order
            .reverse(); // Reverse the order to get ascending order

          const recentDocuments = filteredData.slice(-31) // Get a maximum of 31 most recent documents
          

          console.log('filtered data in date search', recentDocuments);

          const SumOfAverageWaterQualityInDisp = recentDocuments.reduce((total, document) => {
            return total + document.cnd.avg;
          }, 0);

          const numberOfDocuments = recentDocuments.length;
          const AvgOfAverageWaterQualityInDisp = SumOfAverageWaterQualityInDisp / numberOfDocuments;

          console.log('sum of avg of disp_tds variable', AvgOfAverageWaterQualityInDisp);

          setAverageWaterQualityInDisp(AvgOfAverageWaterQualityInDisp)
        })
        .catch(err => console.log(err))


      axios.get(`/topicapi/all_minit_tablesatm/`)
        .then(res => {

          //Coin collection code starts
          const coinfilteredData = res.data.filter((obj) => {
            const docDate = new Date(obj.year, obj.month - 1, obj.day);
            return docDate >= fromDateObj && docDate <= toDateObj && obj.device_id === deviceID && obj.ntt == 'cn'
          })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date in descending order
            .reverse(); // Reverse the order to get ascending order

          const coinrecentDocuments = coinfilteredData.slice(-31); // Get a maximum of 31 most recent documents

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
            .reverse(); // Reverse the order to get ascending order

          const cardrecentDocuments = cardfilteredData.slice(-31); // Get a maximum of 31 most recent documents

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
            .reverse(); // Reverse the order to get ascending order

          const QRrecentDocuments = QRfilteredData.slice(-31); // Get a maximum of 31 most recent documents

          console.log('res in QRfilteredData', QRrecentDocuments);

          const TotalQR = QRrecentDocuments.reduce((total, document) => {
            return total + document.nta;
          }, 0);

          console.log('Total collection of QR', TotalQR);
          setqrCollection(TotalQR)
          //QR collection code ends

        })
        .catch(err => console.log(err))

    }




  }, [fromDate, toDate, deviceID])


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
    { value: "120 Hrs", icon: <WorkingHoursIcon />, title: "Working Hours" },
    {
      // value: "240",
      value: `XYZ m3`,
      icon: <TotalVolumeProducedIcon />,
      title: "Total Volume Produced",
    },
    {
      // value: "240",
      value: `${averageWaterQualityInDisp} ppm`,
      icon: <AverageWaterQualityIcon />,
      title: "Average Water Quality",
    },
    { value: `${numberOfFaults}`, icon: <NumberOfFaultsIcon />, title: "Number Of Faults" },
    { value: "XYZ", icon: <DownTimeIcon />, title: "Down Time" },
    { value: `${qrCollection} Rs`, icon: <DownTimeIcon />, title: "Total QR collection" },
    { value: `${cardCollection} Rs`, icon: <DownTimeIcon />, title: "Total Card collection" },
    { value: `${coinCollection} Rs`, icon: <DownTimeIcon />, title: "Total Coin Collection" },
    { value: `${qrCollection + cardCollection + coinCollection} Rs`, icon: <DownTimeIcon />, title: "Total Collection" },
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
            <ChartComp deviceID={deviceID} value={value} fromDate={fromDate} toDate={toDate} />
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
            <ChartComp deviceID={deviceID} value={value} fromDate={fromDate} toDate={toDate} />
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