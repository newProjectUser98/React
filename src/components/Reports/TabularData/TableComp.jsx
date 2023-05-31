import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


const component_variable_data = {
  cnd: ["spn", "tsp", "asp", "cnd"],

  tds: ["spn", "tsp", "asp", "tds"],

  rwp: ["crt", "olc", "drc", "spn", "sts"],

  hpp: ["crt", "olc", "drc", "spn", "sts"],

  panel: ["ipv", "unv", "ovv", "nmv", "spn", "srt", "bkt", "rst", "sts", "rtl", "ttl"
    , "lps", "hps", "dgp", "mod", "stp", "err"],

  ampv1: ["rmt", "cct", "srt", "bkt", "rst", "mot", "pos", "stp", "op1", "op2"
    , "op3", "ip1", "ip2", "ip3", "psi"],

  ampv2: ["rmt", "cct", "srt", "bkt", "rst", "mot", "pos", "stp", "op1", "op2"
    , "op3", "ip1", "ip2", "ip3", "psi"],

  ampv3: ["rmt", "cct", "srt", "bkt", "rst", "mot", "pos", "stp", "op1", "op2"
    , "op3", "ip1", "ip2", "ip3", "psi"],

  ampv4: ["rmt", "cct", "srt", "bkt", "rst", "mot", "pos", "stp", "op1", "op2"
    , "op3", "ip1", "ip2", "ip3", "psi"],

  ampv5: ["rmt", "cct", "srt", "bkt", "rst", "mot", "pos", "stp", "op1", "op2"
    , "op3", "ip1", "ip2", "ip3", "psi"],

  F_flowsen: ["fr1", "ff1"],

  P_flowsen: ["fr2", "ff2"],

  tap1: ["p1", "p2", "p3", "p4"],

  tap2: ["p1", "p2", "p3", "p4"],

  tap3: ["p1", "p2", "p3", "p4"],

  tap4: ["p1", "p2", "p3", "p4"],

  flowsen1: ["fr"],

  flowsen2: ["fr"],

  flowsen3: ["fr"],

  flowsen4: ["fr"],

  cnd_consen: ["cnd", "spn", "asp"],

  tds_consen: ["tds", "spn", "asp"],

  atm: ["ndv", "ntt", "nta", "tmp", "ntp", "nov", "vl1", "vl2", "vl3", "vl4", "re1", "re2", "re3", "re4", "sts"]
}

export default function BasicTable({ Yaxis, deviceID }) {

  const [tabData, setTabData] = useState([])
  const [hour, setHour] = useState()
  const [min, setMin] = useState()

  useEffect(() => {
    // Create a function to fetch the most recent data
    const fetchMostRecentData = () => {
      axios.get(`/topicapi/all_${Yaxis}/`)
        .then(res => {
          const data = res.data;

          const filteredData = data.filter(obj => obj.device_id === deviceID); // Filter data by deviceID

          if (filteredData.length > 0) {
            const sortedData = filteredData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // Sort filtered data by date in descending order

            const recentDocument = sortedData[0]; // Get the most recent data

            console.log('recentDocument in tabular data', recentDocument);

            setHour(recentDocument.hour)
            setMin(recentDocument.minit)

            const selectedFields = {};
            Object.keys(recentDocument).forEach((key) => {
              if (component_variable_data.ampv1.includes(key)) {
                selectedFields[key] = recentDocument[key];
              }
            });

            console.log('Most recent data for device ID', deviceID + ':', selectedFields);
            setTabData([selectedFields]);
          } else {
            console.log('No data found for the given deviceID:', deviceID);
            setTabData([]);
          }
        }).catch(err => {
          console.log(err);
        });
    };

    // Call the fetchMostRecentData() function initially
    fetchMostRecentData();

    // Set up the interval to fetch data every 6 seconds
    const interval = setInterval(fetchMostRecentData, 6000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [Yaxis, deviceID]);


  return (
    <Grid>
      <Grid p={"30px"}>
        <TableContainer>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead className="sm:bg-white bg-none">
              <TableRow>
                <TableCell>Time</TableCell>
                {Object.keys(tabData[0] || {}).map((field, index) => (
                  <TableCell key={index}>
                    <Typography
                      fontWeight={600}
                      color={"#464E5F"}
                      fontSize={"14px"}
                      fontFamily={"Poppins"}
                    >
                      {field}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {tabData.map((doc, index) => (
                <TableRow key={index} sx={{ height: "80px" }}>
                  <TableCell>
                    <Typography
                      fontWeight={600}
                      color={"#55A0A9"}
                      fontSize={"12px"}
                      fontFamily={"Poppins"}
                    >
                      {hour}:{min}
                    </Typography>
                  </TableCell>
                  {Object.values(doc).map((value, idx) => (
                    <TableCell key={idx}>
                      <Typography
                        color={"#464E5F"}
                        fontSize={"14px"}
                        fontFamily={"Poppins"}
                      >
                        {value}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>



      </Grid>
    </Grid>
  );
}

<TableContainer>
  <Table aria-label="simple pagination table sticky" stickyHeader></Table>
</TableContainer>;
