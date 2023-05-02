import { useState } from "react";
import { Switch } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import rwp from "../../../assets/images/rwp-motor.svg";
import ampv1 from "../../../assets/images/ampv1.svg";
import ampv2 from "../../../assets/images/ampv2.svg";
import conductivity from "../../../assets/images/conductivity.svg";
import dosingpump from "../../../assets/images/dosingpump.svg";
import feedflowsensor from "../../../assets/images/feedflowsensor.svg";
import filterbig1 from "../../../assets/images/filterbig1.svg";
import filterbig2 from "../../../assets/images/filterbig2.svg";
import filtersmall1 from "../../../assets/images/filtersmall1.svg";
import filtersmall2 from "../../../assets/images/filtersmall2.svg";
import hpp from "../../../assets/images/hpp.svg";
import hps from "../../../assets/images/hps.svg";
import iotmodule from "../../../assets/images/iotmodule.svg";
import lps from "../../../assets/images/lps.svg";
import membrane from "../../../assets/images/membrane.svg";
import premeteflowsensor from "../../../assets/images/premeteflowsensor.svg";
import rawtank from "../../../assets/images/rawtank.svg";
import twtank from "../../../assets/images/twtank.svg";
import roipanel from "../../../assets/images/roipanel.svg";
import RwpForm from "../../../Forms/ControlAndMonitor/WaterTreatment/RwpForm";
import FeedFlowSensorForm from "../../../Forms/ControlAndMonitor/WaterTreatment/FeedFlowSensorForm";
import Ampv1Form from "../../../Forms/ControlAndMonitor/WaterTreatment/Ampv1Form";
import Ampv2Form from "../../../Forms/ControlAndMonitor/WaterTreatment/Ampv2Form";
import RoiPanelForm from "../../../Forms/ControlAndMonitor/WaterTreatment/RoiPanelForm";
import HppForm from "../../../Forms/ControlAndMonitor/WaterTreatment/HppForm";
import PremeteFlowSensorForm from "../../../Forms/ControlAndMonitor/WaterTreatment/PremeteFlowSensorForm";
import ConductivityForm from "../../../Forms/ControlAndMonitor/WaterTreatment/ConductivityForm";

const WaterTreatmentUnit = ({ toDisplay }) => {
  const [selected, setSelected] = useState(null);
  const [toggleValue, setToggleValue] = useState('');
  const [changeConductivity, setChangeConductivity] = useState('conductivity')

  return (
    <div
      className={
        toDisplay
          ? "bg-gray-bg-2 mx-3 block px-2.5 mb-5 rounded-b-xl"
          : "bg-gray-bg-2 mx-3 hidden px-2.5 mb-5 rounded-b-xl"
      }
    >
      <div className="flex justify-between py-4 items-center">
        <span className="text-xs">Working Hours</span>
        <input className="h-8 w-40 rounded-md focus:outline-none text-sm"></input>
      </div>
      <div className="flex justify-between py-4 items-center">
        <span className="text-xs">Select Panel Mode</span>
        <input className="h-8 w-40 rounded-md focus:outline-none text-sm"></input>
      </div>
      <div className="flex justify-between py-4 items-center">
        <span className="text-xs">Conductivity / TDS</span>
        <input className="h-8 w-40 rounded-md focus:outline-none text-sm"></input>
      </div>
      <>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'rwp' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">Raw Water Pump</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('rwp')}>
              <span className="text-lg">Raw Water Pump</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'rwp' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={rwp} alt="rwp" />
              </span>
              <RwpForm/>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'ampv1' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">AMPV 1</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('ampv1')}>
              <span className="text-lg">AMPV 1</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'ampv1' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={ampv1} alt="ampv1" />
              </span>
                <Ampv1Form/>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'ampv2' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">AMPV 2</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('ampv2')}>
              <span className="text-lg">AMPV 2</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'ampv2' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={ampv2} alt="ampv2" />
              </span>
              <Ampv2Form/>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'conductivity' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">Conductivity</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded bg-red-color text-white" onClick={()=> setToggleValue('conductivity')}>
              <span className="text-lg">Conductivity</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'conductivity' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={conductivity} alt="conductivity" />
              </span>
              <ConductivityForm/>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'dosingpump' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">Dosing Pump</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded bg-light-black-color text-white" onClick={()=> setToggleValue('dosingpump')}>
              <span className="text-lg">Dosing Pump</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'dosingpump' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={dosingpump} alt="dosingpump" />
              </span>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'feedflowsensor' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">Feed Flow Sensor</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded bg-light-black-color text-white" onClick={()=> setToggleValue('feedflowsensor')}>
              <span className="text-lg">Feed Flow Sensor</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'feedflowsensor' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={feedflowsensor} alt="feedflowsensor" />
              </span>
              <FeedFlowSensorForm/>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'filterbig1' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">Filter Big 1</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded " onClick={()=> setToggleValue('filterbig1')}>
              <span className="text-lg">Filter Big 1</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'filterbig1' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={filterbig1} alt="filterbig1" />
              </span>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'filterbig2' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">Filter Big 2</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('filterbig2')}>
              <span className="text-lg">Filter Big 2</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'filterbig2' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={filterbig2} alt="filterbig2" />
              </span>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'filtersmall1' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">Filter Small 1</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded bg-red-color text-white" onClick={()=> setToggleValue('filtersmall1')}>
              <span className="text-lg">Filter Small 1</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'filtersmall1' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={filtersmall1} alt="filtersmall1" />
              </span>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'filtersmall2' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">Filter Small 2</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('filtersmall2')}>
              <span className="text-lg">Filter Small 2</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'filtersmall2' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={filtersmall2} alt="filtersmall2" />
              </span>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'hpp' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">HPP</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded bg-red-color text-white" onClick={()=> setToggleValue('hpp')}>
              <span className="text-lg">HPP</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'hpp' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={hpp} alt="hpp" />
              </span>
              <HppForm/>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'hps' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">HPS Range</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('hps')}>
              <span className="text-lg">HPS Range</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'hps' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={hps} alt="hps" />
              </span>
              <div className="flex items-center w-full mb-5 flex-wrap justify-center">
                  <div className="flex items-center m-2 ">
                      <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div> 
                      <span>State variables</span>
                  </div>
              </div>
              <div className="flex items-center mt-5 mx-2">
                  <p className='w-40 my-2 font-bold'>State Variables</p>
              </div>
              <div className="flex items-center py-3">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                  <p className='w-52'>High Pressure Switch : </p>
                  <p className='mx-5 w-30'>High</p>
              </div>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'iot' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">IOT Module</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('iot')}>
              <span className="text-lg">IOT Module</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'iot' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={iotmodule} alt="iotmodule" />
              </span>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'lps' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">LPS Range</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('lps')}>
              <span className="text-lg">LPS Range</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'lps' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={lps} alt="lps" />
              </span>
              <div className="flex items-center w-full mb-5 flex-wrap justify-center">
                  <div className="flex items-center m-2 ">
                      <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div> 
                      <span>State variables</span>
                  </div>
              </div>
              <div className="flex items-center mt-5 mx-2">
                  <p className='w-40 my-2 font-bold'>State Variables</p>
              </div>
              <div className="flex items-center py-3">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-52'>Low Pressure Switch : </p>
                <p className='w-30 mx-5'>Low</p>
              </div>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'membrane' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">Membrane</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('membrane')}>
              <span className="text-lg">Membrane</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'membrane' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={membrane} alt="membrane" />
              </span>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'premeteflowsensor' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">Premeate Flow Sensor</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded bg-light-black-color text-white" onClick={()=> setToggleValue('premeteflowsensor')}>
              <span className="text-lg">Premeate Flow Sensor</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'premeteflowsensor' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={premeteflowsensor} alt="premeteflowsensor" />
              </span>
              <PremeteFlowSensorForm/>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'rawwatertank' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">Raw Water Tank</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('rawwatertank')}>
              <span className="text-lg">Raw Water Tank</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'rawwatertank' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={rawtank} alt="rawtank" />
              </span>
              <div className="flex items-center w-full mb-5 flex-wrap justify-center">
                  <div className="flex items-center m-2 ">
                      <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div> 
                      <span>State variables</span>
                  </div>
              </div>
              <div className="flex items-center mt-5 mx-2">
                  <p className='w-40 my-2 font-bold'>State Variables</p>
              </div>
              <div className="flex items-center py-3">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40'>Status : </p>
                <p className='w-40'>Full</p>
              </div>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'twtank' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">Treated Water Tank</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('twtank')}>
              <span className="text-lg">Treated Water Tank</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'twtank' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={twtank} alt="twtank" />
              </span>
              <div className="flex items-center w-full mb-5 flex-wrap justify-center">
                  <div className="flex items-center m-2 ">
                      <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div> 
                      <span>State variables</span>
                  </div>
              </div>
              <div className="flex items-center mt-5 mx-2">
                  <p className='w-40 my-2 font-bold'>State Variables</p>
              </div>
              <div className="flex items-center py-3">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40'>Status : </p>
                <p className='w-40'>Empty</p>
              </div>
            </div>
        }
      </div>
      <div className="bg-gray-bg-2 py-2" >
        {
          toggleValue === 'roipanel' ?
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
              <span className="text-lg">ROI Panel</span>
              <span><KeyboardArrowDownRoundedIcon /></span>
            </div>
          :
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('roipanel')}>
              <span className="text-lg">ROI Panel</span>
              <span><KeyboardArrowRightRoundedIcon /></span>
            </div>
        }
        {
          toggleValue === 'roipanel' &&
            <div className="p-3.5 bg-white rounded-b-3xl text-xs">
              <span className="flex justify-center py-8 items-center">
                <img src={roipanel} alt="roipanel" />
              </span>
              
              <RoiPanelForm/>
            </div>
        }
      </div>
      </>
    </div>
  );
};

export default WaterTreatmentUnit;
