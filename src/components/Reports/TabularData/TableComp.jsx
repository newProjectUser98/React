import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";

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
  const [tabData, setTabData] = useState([]);
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");

  const fetchMostRecentData = () => {
    setTabData([]);
    axios
      .get(`/topicapi/all_${Yaxis}/`)
      .then((res) => {
        const data = res.data;

        const currentDate = new Date();
        const previousDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);

        const filteredData = data.filter((obj) => {
          const createdDate = new Date(obj.created_at);
          return (
            createdDate >= previousDate &&
            createdDate <= currentDate &&
            obj.device_id === deviceID
          );
        });

        if (filteredData.length > 0) {
          const sortedData = filteredData.sort(
            (a, b) => new Date(a.created_at) - new Date(b.created_at)
          );

          const selectedFields = sortedData.map((doc) => {
            const fields = {};
            Object.keys(doc).forEach((key) => {
              if (component_variable_data[Yaxis].includes(key)) {
                fields[key] = doc[key];
              }
            });
            return {
              ...fields,
              hour: doc.hour, minit: doc.minit
            };
          });

          // const recentDocument = sortedData[sortedData.length - 1];
          // setHour(recentDocument.hour);
          // setMin(recentDocument.minit);

          // Set the hour and minit values for each document
          // selectedFields.forEach((doc) => {
          //   setHour((prevHour) => [...prevHour, doc.hour]);
          //   setMin((prevMin) => [...prevMin, doc.minit]);
          // });

          setTabData((prevData) => {
            const existingIds = prevData.map((item) => item.id);
            console.log('prevData', prevData);
            const newData = selectedFields.filter((item) => !existingIds.includes(item.id));
            console.log('newData', newData);
            return [...prevData, ...newData]
          });

          console.log('res.data is', res.data);
          console.log('filteredData', filteredData);
          console.log('sotredData', sortedData);
          console.log('selectedFields', selectedFields);
          console.log('tabData in then', tabData);
        } else {
          console.log("No data found for the given deviceID:", deviceID);
          setTabData([]);
          setHour("");
          setMin("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // Fetch data initially when the component mounts
    fetchMostRecentData();
    console.log('tabData in useEffect', tabData);

    // Set up the interval to fetch data every 10 minutes
    const interval = setInterval(fetchMostRecentData
      , 10 * 60 * 1000
      // , 30000
    );

    // Clean up the interval when the component unmounts or Yaxis changes
    return () => {
      clearInterval(interval);
    };

  }, [Yaxis, deviceID]);

  return (
    <Grid>
      <Grid p="30px">
        <TableContainer style={{ maxHeight: "400px" }}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead className="sm:bg-white bg-none">
              <TableRow>
                <TableCell>Time</TableCell>
                {Object.keys(tabData[0] || {}).map((field, index) => {
                  if (field !== "hour" && field !== "minit") {
                    return (
                      <TableCell key={index}>
                        <Typography
                          fontWeight={600}
                          color="#464E5F"
                          fontSize="14px"
                          fontFamily="Poppins"
                        >
                          {field}
                        </Typography>
                      </TableCell>
                    );
                  }
                  return null; // Skip rendering for "hour" and "minit" fields
                })}
              </TableRow>

            </TableHead>

            <TableBody>
            {console.log('Rendering tabData:', tabData)}
              {tabData.slice().reverse().map((doc, index) => (
                <TableRow key={index} sx={{ height: "80px" }}>
                  <TableCell>
                    <Typography
                      fontWeight={600}
                      color="#55A0A9"
                      fontSize="12px"
                      fontFamily="Poppins"
                    >
                      {doc.hour}:{doc.minit}
                    </Typography>
                  </TableCell>
                  {Object.entries(doc).map(([field, value], idx) => {
                    if (field !== "hour" && field !== "minit") {
                      return (
                        <TableCell key={idx}>
                          <Typography
                            color="#464E5F"
                            fontSize="14px"
                            fontFamily="Poppins"
                          >
                            {value}
                          </Typography>
                        </TableCell>
                      );
                    }
                    return null; // Skip rendering for "hour" and "minit" fields
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
