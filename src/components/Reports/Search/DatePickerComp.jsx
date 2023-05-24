import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ReactComponent as CalendarIcon } from "../../../assets/images/calendar-icon.svg";

const DatePickerComp = () => {
  const [value, setValue] = React.useState();

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  console.log('value in date component', value);

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          inputFormat="dd/MM/yyyy"
          components={{
            OpenPickerIcon: CalendarIcon,
          }}
          maxDate={new Date()}
          value={value}
          onChange={handleChange}
          renderInput={({ inputRef, inputProps, InputProps }) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "#FFFFFF",
                  pr: 3,
                  borderRadius: "8px",
                }}
              >
                <TextField
                  sx={{
                    "& fieldset": { border: "none", outline: "none" },
                    "& input": {
                      fontSize: "14px",
                      p: "9px",
                      fontWeight: 400,
                      flex: 1,
                      textAlign: "center",
                    },
                  }}
                  ref={inputRef}
                  {...inputProps}
                />
                {InputProps?.endAdornment}
              </Box>
            );
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerComp;
