import { useState } from "react";
import { Switch } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import WaterDispensingUnit from "./WaterDispensingUnit";
import WaterTreatmentUnit from "./WaterTreatmentUnit";

const ControlAndMonitoringMob = () => {
  const [tabStyle, setTabStyle] = useState(true);

  const test = [
    { comp: "TWS", type: "none" },
    { comp: "HPP", type: "none" },
    { comp: "Panel", type: "none" },
    { comp: "AMPV 1", type: "error" },
    { comp: "Flow Sensor 1", type: "blackout" },
  ];

  const handleStyle = (item) => {
    setTabStyle(item)
  };

  const title = [{id:true,name:'Water Treatment Unit'},{id:false,name:'Water Dispensing Unit'}]

  return (
    <>
      <div className="mx-3">
          <p className="my-4 text-base">Select Site</p>
          <div className="flex bg-gray-bg rounded-xl h-10 flex items-center my-4">
            <span>
              <SearchOutlinedIcon className="ml-2" />
            </span>
            <input
              className="bg-gray-bg ml-3 focus:outline-none placeholder:text-xs"
              placeholder="Search Site Name"
            ></input>
          </div>
          <p className="my-4 text-base">Select City/State</p>
          <div className="flex bg-gray-bg rounded-xl h-10 flex items-center my-4">
            <span>
              <SearchOutlinedIcon className="ml-2" />
            </span>
            <input
              className="bg-gray-bg ml-3 focus:outline-none placeholder:text-xs"
              placeholder="Select City/State"
            ></input>
            <span className="pl-10">
              <KeyboardArrowDownRoundedIcon />
            </span>
          </div>
        <div className="my-4 flex justify-between">
          <span className="text-base font-medium">Status</span>
          <div className="flex items-center">
            <span>
              <RadioButtonCheckedIcon className="text-green-500" />
            </span>
            <span className="ml-4 text-green-500 font-normal">Active</span>
          </div>
        </div>
        <p className="text-base font-medium my-4">Last Update</p>
        <p className="text-sm my-4">Today</p>
        <div className="my-4 border-2 shadow-date-shadow rounded-xl h-10 flex items-center justify-between px-2">
          <div>
            <span className="text-sm font-normal">09/08/2022</span>
            <span className="text-sm font-normal pl-2">12:15 AM</span>
          </div>
          <div>
            <span>
              <CalendarTodayOutlinedIcon />
            </span>
            <span className="pl-2">
              <AutorenewOutlinedIcon className="rotate-90 text-text-gradient" />
            </span>
          </div>
        </div>
        <div className="my-4 px-2 border-2 shadow-date-shadow rounded-xl h-10 flex items-center justify-between">
          <span className="text-sm font-normal">Data Transfer</span>
          <span className="text-primary-color text-xs">1.2 TB/min</span>
        </div>
        <div className="my-6 px-2 flex bg-gray-bg rounded-xl h-10 flex justify-between items-center">
          <span className="text-button-hover text-lg font-bold">
            Plant Start / Stop
          </span>
          <span>
            <Switch color="secondary" />
          </span>
        </div>
      </div>

      <div className="h-10 flex mt-4 mx-3">
        {title.map((item,i) =>
        <span key={i}
          className={
            item.id == tabStyle
              ? "text-xs rounded-t-xl w-3/6 flex items-center justify-center bg-gray-bg-2 text-text-gradient font-semibold"
              : "text-xs rounded-t-xl w-3/6 flex items-center justify-center bg-white text-button-hover font-normal"
          }
          onClick={() => handleStyle(item.id)}
        >
          {item.name}
        </span>)}
      </div>

      <WaterTreatmentUnit toDisplay={tabStyle} />
      <WaterDispensingUnit toDisplay={!tabStyle} />
    </>
  );
};

export default ControlAndMonitoringMob;
