import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Grid, Typography } from "@mui/material";


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

export default function BasicTable({ Yaxis }) {
  return (
    <Grid>
      <Grid p={"30px"}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="sm:bg-white bg-none">
              <TableRow>
                <TableCell></TableCell>
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
              </TableRow>
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
