import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Grid, Typography } from "@mui/material";

function createData(time, status, current, dryRunCurrent, overLoadCurrent) {
  return { time, status, current, dryRunCurrent, overLoadCurrent };
}
const tableHeadData = [
  { name: "Status" },
  { name: "Current" },
  { name: "Dry Run Current" },
  { name: "Over Load Current" },
];


const component_variable_data = {
  cnd: ["spn", "tsp", "asp", "cnd"],

  tds: ["spn", "tsp", "asp", "tds"],

  rwp: ["crt", "olc", "drc", "spn"],

  hpp: ["crt", "olc", "drc", "spn"],

  panel: ["ipv", "unv", "ovv", "nmv", "spn", "srt", "bkt", "rst"],

  ampv1: ["rmt", "cct", "srt", "bkt", "rst", "mot"],

  ampv2: ["rmt", "cct", "srt", "bkt", "rst", "mot"],

  ampv3: ["rmt", "cct", "srt", "bkt", "rst", "mot"],

  ampv4: ["rmt", "cct", "srt", "bkt", "rst", "mot"],

  ampv5: ["rmt", "cct", "srt", "bkt", "rst", "mot"],

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

  atm: ["ndv", "nta", "tmp", "ntp", "nov", "vl1", "vl2", "vl3", "vl4", "re1", "re2", "re3", "re4"]
}

// const rwpData = [{
//   "_id": {
//     "$oid": "644d4ed74f77a4ea479d4418"
//   },
//   "id": 1,
//   "device_id": "123",
//   "message_type": "updsta",
//   "sts": "on",
//   "crt": 1050,
//   "olc": 1250,
//   "drc": 150,
//   "spn": 100,
//   "year": "2023",
//   "month": "04",
//   "day": "29",
//   "hour": "22",
//   "minit": "37",
//   "second": "35",
//   "is_active": true,
//   "created_at": {
//     "$date": {
//       "$numberLong": "1682788055445"
//     }
//   },
//   "updated_at": {
//     "$date": {
//       "$numberLong": "1682788055458"
//     }
//   }
// }, {
//   "_id": {
//     "$oid": "644d518c4571cb22491bf69f"
//   },
//   "id": 2,
//   "device_id": "123",
//   "message_type": "updsta",
//   "sts": "on",
//   "crt": 1050,
//   "olc": 1250,
//   "drc": 150,
//   "spn": 100,
//   "year": "2023",
//   "month": "04",
//   "day": "29",
//   "hour": "22",
//   "minit": "49",
//   "second": "08",
//   "is_active": true,
//   "created_at": {
//     "$date": {
//       "$numberLong": "1682788748928"
//     }
//   },
//   "updated_at": {
//     "$date": {
//       "$numberLong": "1682788748940"
//     }
//   }
// }, {
//   "_id": {
//     "$oid": "644d639f5a1ec3b8f454318a"
//   },
//   "id": 3,
//   "device_id": "123",
//   "message_type": "updsta",
//   "sts": "on",
//   "crt": 1050,
//   "olc": 1250,
//   "drc": 150,
//   "spn": 100,
//   "year": "2023",
//   "month": "04",
//   "day": "30",
//   "hour": "00",
//   "minit": "06",
//   "second": "15",
//   "is_active": true,
//   "created_at": {
//     "$date": {
//       "$numberLong": "1682793375055"
//     }
//   },
//   "updated_at": {
//     "$date": {
//       "$numberLong": "1682793375074"
//     }
//   }
// }]

// const rows = [
//   createData("10:00 AM", "---------", "---------", "---------", "---------"),
//   createData("10:15 AM", "---------", "---------", "---------", "---------"),
//   createData("10:30 AM", "---------", "---------", "---------", "---------"),
//   createData("10:45 AM", "---------", "---------", "---------", "---------"),
// ];

const rows = [
  createData("10:00 AM", "----", "----", "----", "----"),
  // createData("10:15 AM", "----", "----", "----", "----"),
  // createData("10:30 AM", "----", "----", "----", "----"),
  // createData("10:45 AM", "----", "----", "----", "----"),
];

export default function BasicTable({ component, Yaxis }) {
  return (
    <Grid>
      <Grid p={"30px"}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="sm:bg-white bg-none">
              <TableRow>
                <TableCell></TableCell>
                {/* {tableHeadData.map((item, index) => ( */}
                {component_variable_data[Yaxis]?.map((item, index) => (
                  <TableCell key={index}>
                    <Typography
                      fontWeight={600}
                      color={"#464E5F"}
                      fontSize={"14px"}
                      fontFamily={"Poppins"}
                    >
                      {item}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {/* {rows.map((row, index) => ( */}
              <TableRow sx={{ height: "80px" }}>
                <TableCell>
                  <Typography
                    fontWeight={600}
                    color={"#55A0A9"}
                    fontSize={"12px"}
                    fontFamily={"Poppins"}
                  >
                    10:00 AM
                  </Typography>
                </TableCell>
                {component_variable_data[Yaxis]?.map(() => {
                  return (
                    <TableCell>----</TableCell>
                  )
                })}
                {/* <TableCell>{row.status}</TableCell>
                  <TableCell>{row.current}</TableCell>
                  <TableCell>{row.dryRunCurrent}</TableCell>
                  <TableCell>{row.overLoadCurrent}</TableCell> */}
              </TableRow>
              {/* ))} */}
            </TableBody>

            {/* {(component === 'rwp') &&
              <TableBody>
                {rwpData.map((row, index) => (
                  <TableRow key={index} sx={{ height: "80px" }}>
                    <TableCell>
                      <Typography
                        fontWeight={600}
                        color={"#55A0A9"}
                        fontSize={"12px"}
                        fontFamily={"Poppins"}
                      >
                        {index}
                      </Typography>
                    </TableCell>
                    <TableCell>{row.sts}</TableCell>
                    <TableCell>{row.crt}</TableCell>
                    <TableCell>{row.drc}</TableCell>
                    <TableCell>{row.olc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            } */}


          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

<TableContainer>
  <Table aria-label="simple pagination table sticky" stickyHeader></Table>
</TableContainer>;
