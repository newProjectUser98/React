import { useState } from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import conductivity from '../../../assets/images/conductivity.svg'
import roipanel from '../../../assets/images/roipanel.svg'
import tap from '../../../assets/images/tap.svg'
import twtank from '../../../assets/images/twtank.svg'
import iotmodule from '../../../assets/images/iotmodule.svg'
import feedflowsensor from '../../../assets/images/feedflowsensor.svg'
import Conductivity2Form from "../../../Forms/ControlAndMonitor/Dispensing/Conductivity2Form";
import RoiPanelAtmForm from "../../../Forms/ControlAndMonitor/Dispensing/RoiPanelAtmForm";
import Tap1Form from "../../../Forms/ControlAndMonitor/Dispensing/Tap1Form";
import Tap2Form from "../../../Forms/ControlAndMonitor/Dispensing/Tap2Form";
import Tap3Form from "../../../Forms/ControlAndMonitor/Dispensing/Tap3Form";
import Tap4Form from "../../../Forms/ControlAndMonitor/Dispensing/Tap4Form";
import FeedFlowSensor1Form from "../../../Forms/ControlAndMonitor/Dispensing/FeedFlowSensor1Form";
import FeedFlowSensor2Form from "../../../Forms/ControlAndMonitor/Dispensing/FeedFlowSensor2Form";
import FeedFlowSensor3Form from "../../../Forms/ControlAndMonitor/Dispensing/FeedFlowSensor3Form";
import FeedFlowSensor4Form from "../../../Forms/ControlAndMonitor/Dispensing/FeedFlowSensor4Form";


const WaterDispensingUnit = ({ toDisplay }) => {
  const [toggleValue, setToggleValue] = useState('');
  
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
        <span className="text-xs">Total Dispensed Water</span>
        <input className="h-8 w-40 rounded-md focus:outline-none text-sm"></input>
      </div>
      <div className="flex justify-between py-4 items-center">
        <span className="text-xs">Total Recharge Amount</span>
        <input className="h-8 w-40 rounded-md focus:outline-none text-sm"></input>
      </div>
      <div className="flex justify-between py-4 items-center">
        <span className="text-xs">Total Number Of Cards</span>
        <input className="h-8 w-40 rounded-md focus:outline-none text-sm"></input>
      </div>
      <div className="flex justify-between py-4 items-center">
        <span className="text-xs">Total Coins Collected</span>
        <input className="h-8 w-40 rounded-md focus:outline-none text-sm"></input>
      </div>
      <>
        <div className="bg-gray-bg-2 py-2" >
          {
            toggleValue === 'conductivity1' ?
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
                <span className="text-lg">Conductivity 1</span>
                <span><KeyboardArrowDownRoundedIcon /></span>
              </div>
            :
              <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('conductivity1')}>
                <span className="text-lg">Conductivity 1</span>
                <span><KeyboardArrowRightRoundedIcon /></span>
              </div>
          }
          {
            toggleValue === 'conductivity1' &&
              <div className="p-3.5 bg-white rounded-b-3xl text-xs">
                <span className="flex justify-center py-8 items-center">
                  <img src={conductivity} alt="conductivity" />
                </span>
                
                {/* <div className="flex items-center py-3">
                    <p className='w-40'>Conductivity/TDS</p>
                    <p className='w-40'>1000</p>
                </div>
                <div className="flex items-center py-3 justify-between">
                    <p className=''>Span</p>
                    <input type="text" name="spn" id="spn" className="px-3 py-2 border rounded-md w-52 outline-none font-medium leading-5" placeholder="Span" value={3300}/>
                </div>
                <div className="flex items-center py-3 justify-between">
                    <p className=''>Trip Setpoint</p>
                    <input type="text" name="tsp" id="tsp" className="px-3 py-2 border rounded-md w-52 outline-none font-medium leading-5" placeholder="Trip Setpoint" value={500}/>
                </div>
                <div className="flex items-center py-3 justify-between">
                    <p className=''>Atert Setpoint</p>
                    <input type="text" name="asp" id="asp" className="px-3 py-2 border rounded-md w-52 outline-none font-medium leading-5" placeholder="Atert Setpoint" value={700}/>
                </div>
                <button className='px-5 bg-primary-color py-2 text-white flex items-center justify-center rounded-lg hover:bg-text-title shadow-md'>Submit</button> */}
              </div>
          }
        </div>
        <div className="bg-gray-bg-2 py-2" >
          {
            toggleValue === 'conductivity2' ?
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
                <span className="text-lg">Conductivity 2</span>
                <span><KeyboardArrowDownRoundedIcon /></span>
              </div>
            :
              <div className="bg-red-color text-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('conductivity2')}>
                <span className="text-lg">Conductivity 2</span>
                <span><KeyboardArrowRightRoundedIcon /></span>
              </div>
          }
          {
            toggleValue === 'conductivity2' &&
              <div className="p-3.5 bg-white rounded-b-3xl text-xs">
                <span className="flex justify-center py-8 items-center">
                  <img src={conductivity} alt="conductivity" />
                </span>
                
                <Conductivity2Form/>
              </div>
          }
        </div>
        <div className="bg-gray-bg-2 py-2" >
          {
            toggleValue === 'wateratm' ?
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
                <span className="text-lg">Water ATM</span>
                <span><KeyboardArrowDownRoundedIcon /></span>
              </div>
            :
              <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('wateratm')}>
                <span className="text-lg">Water ATM</span>
                <span><KeyboardArrowRightRoundedIcon /></span>
              </div>
          }
          {
            toggleValue === 'wateratm' &&
              <div className="p-3.5 bg-white rounded-b-3xl text-xs">
                <span className="flex justify-center py-8 items-center">
                  <img src={roipanel} alt="roipanel" />
                </span>
                <RoiPanelAtmForm/>
              </div>
          }
        </div>
        <div className="bg-gray-bg-2 py-2" >
          {
            toggleValue === 'tap1' ?
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
                <span className="text-lg">Tap 1</span>
                <span><KeyboardArrowDownRoundedIcon /></span>
              </div>
            :
              <div className="bg-light-black-color text-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('tap1')}>
                <span className="text-lg">Tap 1</span>
                <span><KeyboardArrowRightRoundedIcon /></span>
              </div>
          }
          {
            toggleValue === 'tap1' &&
              <div className="p-3.5 bg-white rounded-b-3xl text-xs">
                <span className="flex justify-center py-8 items-center">
                  <img src={tap} alt="tap" />
                </span>
                <Tap1Form/>
              </div>
          }
        </div>
        <div className="bg-gray-bg-2 py-2" >
          {
            toggleValue === 'tap2' ?
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
                <span className="text-lg">Tap 2</span>
                <span><KeyboardArrowDownRoundedIcon /></span>
              </div>
            :
              <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('tap2')}>
                <span className="text-lg">Tap 2</span>
                <span><KeyboardArrowRightRoundedIcon /></span>
              </div>
          }
          {
            toggleValue === 'tap2' &&
              <div className="p-3.5 bg-white rounded-b-3xl text-xs">
                <span className="flex justify-center py-8 items-center">
                  <img src={tap} alt="tap" />
                </span>
                <Tap2Form/>
              </div>
          }
        </div>
        <div className="bg-gray-bg-2 py-2" >
          {
            toggleValue === 'tap3' ?
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
                <span className="text-lg">Tap 3</span>
                <span><KeyboardArrowDownRoundedIcon /></span>
              </div>
            :
              <div className="bg-red-color text-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('tap3')}>
                <span className="text-lg">Tap 3</span>
                <span><KeyboardArrowRightRoundedIcon /></span>
              </div>
          }
          {
            toggleValue === 'tap3' &&
              <div className="p-3.5 bg-white rounded-b-3xl text-xs">
                <span className="flex justify-center py-8 items-center">
                  <img src={tap} alt="tap" />
                </span>
                <Tap3Form/>
              </div>
          }
        </div>
        <div className="bg-gray-bg-2 py-2" >
          {
            toggleValue === 'tap4' ?
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
                <span className="text-lg">Tap 4</span>
                <span><KeyboardArrowDownRoundedIcon /></span>
              </div>
            :
              <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('tap4')}>
                <span className="text-lg">Tap 4</span>
                <span><KeyboardArrowRightRoundedIcon /></span>
              </div>
          }
          {
            toggleValue === 'tap4' &&
              <div className="p-3.5 bg-white rounded-b-3xl text-xs">
                <span className="flex justify-center py-8 items-center">
                  <img src={tap} alt="tap" />
                </span>
                <Tap4Form/>
              </div>
          }
        </div>
        <div className="bg-gray-bg-2 py-2" >
          {
            toggleValue === 'rwtank' ?
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
                <span className="text-lg">Raw Weter Tank</span>
                <span><KeyboardArrowDownRoundedIcon /></span>
              </div>
            :
              <div className="bg-light-black-color text-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('rwtank')}>
                <span className="text-lg">Raw Weter Tank</span>
                <span><KeyboardArrowRightRoundedIcon /></span>
              </div>
          }
          {
            toggleValue === 'rwtank' &&
              <div className="p-3.5 bg-white rounded-b-3xl text-xs">
                <span className="flex justify-center py-8 items-center">
                  <img src={twtank} alt="twtank" />
                </span>
                <div className="flex items-center w-full mb-5 flex-wrap">
                  <div className="flex items-center m-2 ">
                      <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div> 
                      <span>State variables</span>
                  </div>
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
            toggleValue === 'feedflowsensor1' ?
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
                <span className="text-lg">Feed Flow Sensor 1</span>
                <span><KeyboardArrowDownRoundedIcon /></span>
              </div>
            :
              <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('feedflowsensor1')}>
                <span className="text-lg">Feed Flow Sensor 1</span>
                <span><KeyboardArrowRightRoundedIcon /></span>
              </div>
          }
          {
            toggleValue === 'feedflowsensor1' &&
              <div className="p-3.5 bg-white rounded-b-3xl text-xs">.
                <span className="flex justify-center py-8 items-center">
                  <img src={feedflowsensor} alt="feedflowsensor" />
                </span>
                <FeedFlowSensor1Form/>
              </div>
          }
        </div>
        <div className="bg-gray-bg-2 py-2" >
          {
            toggleValue === 'feedflowsensor2' ?
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
                <span className="text-lg">Feed Flow Sensor 2</span>
                <span><KeyboardArrowDownRoundedIcon /></span>
              </div>
            :
              <div className="bg-red-color text-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('feedflowsensor2')}>
                <span className="text-lg">Feed Flow Sensor 2</span>
                <span><KeyboardArrowRightRoundedIcon /></span>
              </div>
          }
          {
            toggleValue === 'feedflowsensor2' &&
              <div className="p-3.5 bg-white rounded-b-3xl text-xs">
                <span className="flex justify-center py-8 items-center">
                  <img src={feedflowsensor} alt="feedflowsensor" />
                </span>
                <FeedFlowSensor2Form/>
              </div>
          }
        </div>
        <div className="bg-gray-bg-2 py-2" >
          {
            toggleValue === 'feedflowsensor3' ?
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
                <span className="text-lg">Feed Flow Sensor 3</span>
                <span><KeyboardArrowDownRoundedIcon /></span>
              </div>
            :
              <div className="bg-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('feedflowsensor3')}>
                <span className="text-lg">Feed Flow Sensor 3</span>
                <span><KeyboardArrowRightRoundedIcon /></span>
              </div>
          }
          {
            toggleValue === 'feedflowsensor3' &&
              <div className="p-3.5 bg-white rounded-b-3xl text-xs">
                <span className="flex justify-center py-8 items-center">
                  <img src={feedflowsensor} alt="feedflowsensor" />
                </span>
                <FeedFlowSensor3Form/>
              </div>
          }
        </div>
        <div className="bg-gray-bg-2 py-2" >
          {
            toggleValue === 'feedflowsensor4' ?
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
                <span className="text-lg">Feed Flow Sensor 4</span>
                <span><KeyboardArrowDownRoundedIcon /></span>
              </div>
            :
              <div className="bg-light-black-color text-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('feedflowsensor4')}>
                <span className="text-lg">Feed Flow Sensor 4</span>
                <span><KeyboardArrowRightRoundedIcon /></span>
              </div>
          }
          {
            toggleValue === 'feedflowsensor4' &&
              <div className="p-3.5 bg-white rounded-b-3xl text-xs">
                <span className="flex justify-center py-8 items-center">
                  <img src={feedflowsensor} alt="feedflowsensor" />
                </span>
                <FeedFlowSensor4Form/>
              </div>
          }
        </div>
        <div className="bg-gray-bg-2 py-2" >
          {
            toggleValue === 'iot' ?
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl text-white font-medium" onClick={()=> setToggleValue('')}>
                <span className="text-lg">IOT</span>
                <span><KeyboardArrowDownRoundedIcon /></span>
              </div>
            :
              <div className="bg-red-color text-white flex items-center justify-between px-4 py-2 rounded" onClick={()=> setToggleValue('iot')}>
                <span className="text-lg">IOT</span>
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

        {/* {test.map((val, i) => (
          <div className="bg-gray-bg-2 py-4" key={i}>
            <div
              className={
                selected === i
                  ? "flex justify-between items-center px-4 h-14 bg-gradient-to-r from-text-gradient to-text-gradient-2 rounded-t-3xl"
                  : val.type === "none"
                  ? "bg-white h-9 flex items-center justify-between px-4 rounded"
                  : val.type === "error"
                  ? "bg-red-color text-white h-9 flex items-center justify-between px-4 rounded"
                  : "bg-light-black-color text-white h-9 flex items-center justify-between px-4 rounded"
              }
              onClick={() => toggleAccordion(i)}
            >
              <span className="text-lg">{val.comp}</span>
              <span>
                {selected === i ? (
                  <KeyboardArrowDownRoundedIcon />
                ) : (
                  <KeyboardArrowRightRoundedIcon />
                )}
              </span>
            </div>
            <div
              className="px-3.5 bg-white pb-5 rounded-b-3xl"
              style={
                selected === i ? { display: "block" } : { display: "none" }
              }
            >
              <span className="flex justify-center py-8">
                <img src="../Group 118.png" alt="sample" />
              </span>
              <div className="flex items-center justify-between h-8 my-4">
                <span className="text-text-secondary text-xs font-normal w-32">
                  Select Sensor Type
                </span>
                <input
                  placeholder="Select"
                  className="placeholder:text-text-secondary font-normal text-center w-40 bg-gray-bg h-8 rounded-md focus:outline-none text-sm"
                ></input>
              </div>
              <div className="flex items-center justify-between h-8 my-4">
                <span className="text-text-secondary text-xs font-normal w-32">
                  Conductivity
                </span>
                <span className="text-left w-40 text-xs font-medium text-text-secondary">
                  100 us
                </span>
              </div>
              <div className="flex items-center justify-between h-8 my-4">
                <span className="text-text-secondary text-xs font-normal">TDS</span>
                <span className="text-left text-text-secondary text-xs font-medium w-40">
                  50 ppm
                </span>
              </div>
              <div className="flex items-center justify-between my-4">
                <span className="text-text-secondary text-xs font-normal">Span</span>
                <input
                  placeholder="3300"
                  className="placeholder:text-text-secondary font-normal text-center w-40 bg-gray-bg h-8 rounded-md focus:outline-none text-sm"
                ></input>
              </div>
              <div className="flex items-center justify-between my-4">
                <span className="text-xs font-normal">Trip Points</span>
                <input
                  placeholder="500 us / ppm"
                  className="placeholder:text-text-secondary font-normal text-center w-40 bg-gray-bg h-8 rounded-md focus:outline-none text-sm"
                ></input>
              </div>
              <div className="flex items-center justify-between my-4">
                <span className="text-xs font-normal">Alert Points</span>
                <input
                  placeholder="250 us / ppm"
                  className="placeholder:text-text-secondary font-normal text-center w-40 bg-gray-bg h-8 rounded-md focus:outline-none text-sm"
                ></input>
              </div>
            </div>
          </div>
        ))} */}
      </>
    </div>
  );
};

export default WaterDispensingUnit;
