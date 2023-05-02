import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const SummaryCard = ({ value, icon, title }) => {
  const [isActive, setIsActive] = useState(true);

  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };
  return (
    <Grid
      // onClick={handleClick}
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        width: "196px",
        minWidth: "120px",
        height: "200px",
        background: isActive
          ? "#FFFFFF"
          : " linear-gradient(186.05deg, #BBE2E4 5.47%, #B68FE7 96.48%)",
        borderRadius: "40px",
      }}
      className="iw-summary-card"
    >
      <Grid>
        <Typography
          fontWeight={700}
          color={isActive ? "#464E5F" : "#FFFFFF"}
          fontSize={"20px"}
          fontFamily={"Poppins"}
        >
          {value}
        </Typography>
      </Grid>

      <Grid>
        <Avatar
          alt="test"
          sx={{
            background: isActive
              ? "linear-gradient(186.05deg, #BBE2E4 5.47%, #B68FE7 96.48%)"
              : "white",
            width: "60px",
            height: "60px",
          }}
        >
          {icon}
        </Avatar>
      </Grid>
      <Grid>
        <Typography
          fontWeight={400}
          color={isActive ? "rgba(70, 78, 95, 0.6)" : "#FFFFFF"}
          fontSize={"14px"}
          fontFamily={"Poppins"}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SummaryCard;
