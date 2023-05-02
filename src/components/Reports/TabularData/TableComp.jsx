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

const rows = [
  createData("10:00 AM", "---------", "---------", "---------", "---------"),
  createData("10:15 AM", "---------", "---------", "---------", "---------"),
  createData("10:30 AM", "---------", "---------", "---------", "---------"),
  createData("10:45 AM", "---------", "---------", "---------", "---------"),
];

export default function BasicTable() {
  return (
    <Grid>
      <Grid p={"30px"}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="sm:bg-white bg-none">
              <TableRow>
                <TableCell></TableCell>
                {tableHeadData.map((item, index) => (
                  <TableCell key={index}>
                    <Typography
                      fontWeight={600}
                      color={"#464E5F"}
                      fontSize={"14px"}
                      fontFamily={"Poppins"}
                    >
                      {item.name}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} sx={{ height: "80px" }}>
                  <TableCell>
                    <Typography
                      fontWeight={600}
                      color={"#55A0A9"}
                      fontSize={"12px"}
                      fontFamily={"Poppins"}
                    >
                      {row.time}
                    </Typography>
                  </TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.current}</TableCell>
                  <TableCell>{row.dryRunCurrent}</TableCell>
                  <TableCell>{row.overLoadCurrent}</TableCell>
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
