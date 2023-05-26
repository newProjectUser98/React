
import React from 'react'
import rwp from '../../../assets/images/rwp-motor.svg'
import ampv1 from '../../../assets/images/ampv1.svg'
import ampv2 from '../../../assets/images/ampv2.svg'
import conductivity from '../../../assets/images/conductivity.svg'
import dosingpump from '../../../assets/images/dosingpump.svg'
import feedflowsensor from '../../../assets/images/feedflowsensor.svg'
import filterbig1 from '../../../assets/images/filterbig1.jpg'
import filterbig2 from '../../../assets/images/filterbig2.jpg'
import filtersmall1 from '../../../assets/images/filtersmall1.svg'
import filtersmall2 from '../../../assets/images/filtersmall2.svg'
import hpp from '../../../assets/images/hpp.svg'
import hps from '../../../assets/images/hps.svg'
import iotmodule from '../../../assets/images/iotmodule.svg'
import lps from '../../../assets/images/lps.svg'
import membrane from '../../../assets/images/membrane.svg'
import premeteflowsensor from '../../../assets/images/premeteflowsensor.svg'
import rawtank from '../../../assets/images/rawtank.svg'
import twtank from '../../../assets/images/twtank.jpg'
import roipanel from '../../../assets/images/roipanel.svg'
import tap from '../../../assets/images/tap.svg'
import RwpForm from '../../../Forms/ControlAndMonitor/WaterTreatment/RwpForm'
import FeedFlowSensorForm from '../../../Forms/ControlAndMonitor/WaterTreatment/FeedFlowSensorForm'
import Ampv1Form from '../../../Forms/ControlAndMonitor/WaterTreatment/Ampv1Form'
import Ampv2Form from '../../../Forms/ControlAndMonitor/WaterTreatment/Ampv2Form'
import RoiPanelForm from '../../../Forms/ControlAndMonitor/WaterTreatment/RoiPanelForm'
import HppForm from '../../../Forms/ControlAndMonitor/WaterTreatment/HppForm'
import PremeteFlowSensorForm from '../../../Forms/ControlAndMonitor/WaterTreatment/PremeteFlowSensorForm'
import ConductivityForm from '../../../Forms/ControlAndMonitor/WaterTreatment/ConductivityForm'
import RoiPanelAtmForm from '../../../Forms/ControlAndMonitor/Dispensing/RoiPanelAtmForm'
import Tap1Form from '../../../Forms/ControlAndMonitor/Dispensing/Tap1Form'
import Tap2Form from '../../../Forms/ControlAndMonitor/Dispensing/Tap2Form'
import Tap3Form from '../../../Forms/ControlAndMonitor/Dispensing/Tap3Form'
import Tap4Form from '../../../Forms/ControlAndMonitor/Dispensing/Tap4Form'
import Conductivity2Form from '../../../Forms/ControlAndMonitor/Dispensing/Conductivity2Form'
import FeedFlowSensor1Form from '../../../Forms/ControlAndMonitor/Dispensing/FeedFlowSensor1Form'
import FeedFlowSensor2Form from '../../../Forms/ControlAndMonitor/Dispensing/FeedFlowSensor2Form'
import FeedFlowSensor3Form from '../../../Forms/ControlAndMonitor/Dispensing/FeedFlowSensor3Form'
import FeedFlowSensor4Form from '../../../Forms/ControlAndMonitor/Dispensing/FeedFlowSensor4Form'

const EquipmentDetail = ({ proTitle }) => {
    let intervalTime = 5000;
    return (
        <div className='equipment-detail relative my-20'>

            <div className='rounded-3xl w-full border'>
                <div className="text-center p-3 rounded-tl-3xl rounded-tr-3xl font-bold text-xl text-white title-header">
                    <span>{proTitle}</span>
                </div>
                {/* <div className="p5 flex flex-wrap items-center justify-between p-5">
px-md-18 px-lg-28 py-12
            </div> */}
                {
                    proTitle === 'Raw Water Tank' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={rawtank} alt="rawtank" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
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
                                    <p className='w-40'>Status</p>
                                    <p className='w-40'>Full</p>
                                    {/* <div className='w-40'>
                                    <Switch color='primary'/>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'RWP' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={rwp} alt="rwp" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <RwpForm intervalTime={intervalTime} />
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Feed Flow Sensor' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={feedflowsensor} alt="feedflowsensor" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <FeedFlowSensorForm intervalTime={intervalTime} />
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Ampv1' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={ampv1} alt="ampv1" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <Ampv1Form intervalTime={intervalTime} />
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Ampv2' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={ampv2} alt="ampv2" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <Ampv2Form intervalTime={intervalTime} />
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Filter Big 1' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={filterbig1} alt="filterbig1" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            {/* <div className="p-5">
                            <div className="flex items-center py-3">
                                <p className='w-40'>Status</p>
                                <p className='w-40'>OFF</p>
                                <div className='w-40'>
                                    <Switch color='primary'/>
                                </div>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Current</p>
                                <p className='w-40'>10.5A</p>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Error</p>
                                <p className='w-40'>Error</p>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Settings</p>
                                <p className='w-40'>Settings</p>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Customer Name</p>
                                <input type="text" name="customername" id="customername" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Customer Name" />
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Dry Run Current</p>
                                <input type="text" name="dryruncurrent" id="dryruncurrent" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Dry Run Current" />
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Over load Current</p>
                                <input type="text" name="overloadcurrent" id="overloadcurrent" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Over load Current" />
                            </div>
                        </div> */}
                        </div>
                    </div>
                }
                {
                    proTitle === 'Filter Big 2' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={filterbig2} alt="filterbig2" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            {/* <div className="p-5">
                            <div className="flex items-center py-3">
                                <p className='w-40'>Status</p>
                                <p className='w-40'>OFF</p>
                                <div className='w-40'>
                                    <Switch color='primary'/>
                                </div>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Current</p>
                                <p className='w-40'>10.5A</p>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Error</p>
                                <p className='w-40'>Error</p>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Settings</p>
                                <p className='w-40'>Settings</p>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Customer Name</p>
                                <input type="text" name="customername" id="customername" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Customer Name" />
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Dry Run Current</p>
                                <input type="text" name="dryruncurrent" id="dryruncurrent" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Dry Run Current" />
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Over load Current</p>
                                <input type="text" name="overloadcurrent" id="overloadcurrent" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Over load Current" />
                            </div>
                        </div> */}
                        </div>
                    </div>
                }
                {
                    proTitle === 'Dosing Pump' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={dosingpump} alt="dosingpump" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            {/* <div className="p-5">
                            <div className="flex items-center py-3">
                                <p className='w-40'>Status</p>
                                <p className='w-40'>OFF</p>
                                <div className='w-40'>
                                    <Switch color='primary'/>
                                </div>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Current</p>
                                <p className='w-40'>10.5A</p>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Error</p>
                                <p className='w-40'>Error</p>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Settings</p>
                                <p className='w-40'>Settings</p>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Customer Name</p>
                                <input type="text" name="customername" id="customername" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Customer Name" />
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Dry Run Current</p>
                                <input type="text" name="dryruncurrent" id="dryruncurrent" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Dry Run Current" />
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Over load Current</p>
                                <input type="text" name="overloadcurrent" id="overloadcurrent" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Over load Current" />
                            </div>
                        </div> */}
                        </div>
                    </div>
                }
                {
                    proTitle === 'ROI Panel' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={roipanel} alt="roipanel" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <RoiPanelForm intervalTime={intervalTime} />
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'IOT Module' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={iotmodule} alt="iotmodule" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            {/* <div className="p-5">
                            <div className="flex items-center py-3">
                                <p className='w-40'>Status</p>
                                <p className='w-40'>OFF</p>
                                <div className='w-40'>
                                    <Switch color='primary'/>
                                </div>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Current</p>
                                <p className='w-40'>10.5A</p>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Error</p>
                                <p className='w-40'>Error</p>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Settings</p>
                                <p className='w-40'>Settings</p>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Customer Name</p>
                                <input type="text" name="customername" id="customername" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Customer Name" />
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Dry Run Current</p>
                                <input type="text" name="dryruncurrent" id="dryruncurrent" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Dry Run Current" />
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Over load Current</p>
                                <input type="text" name="overloadcurrent" id="overloadcurrent" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Over load Current" />
                            </div>
                        </div> */}
                        </div>
                    </div>
                }
                {
                    proTitle === 'Filter Small 1' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={filtersmall1} alt="filtersmall1" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            {/* <div className="p-5">
                            <div className="flex items-center py-3">
                                <p className='w-40'>Status</p>
                                <p className='w-40'>OFF</p>
                                <div className='w-40'>
                                    <Switch color='primary'/>
                                </div>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Current</p>
                                <p className='w-40'>10.5A</p>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Error</p>
                                <p className='w-40'>Error</p>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Settings</p>
                                <p className='w-40'>Settings</p>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Customer Name</p>
                                <input type="text" name="customername" id="customername" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Customer Name" />
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Dry Run Current</p>
                                <input type="text" name="dryruncurrent" id="dryruncurrent" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Dry Run Current" />
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Over load Current</p>
                                <input type="text" name="overloadcurrent" id="overloadcurrent" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Over load Current" />
                            </div>
                        </div> */}
                        </div>
                    </div>
                }
                {
                    proTitle === 'Filter Small 2' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={filtersmall2} alt="filtersmall2" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            {/* <div className="p-5">
                            <div className="flex items-center py-3">
                                <p className='w-40'>Flow Rate</p>
                                <p className='w-40'>054</p>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Flow Factor</p>
                                <input type="text" name="ff2" id="ff2" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Flow Factor" value={3300} />
                            </div>
                        </div> */}
                        </div>
                    </div>
                }
                {
                    proTitle === 'LPS Range' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={lps} alt="lps" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
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
                                    <p className='w-40 mx-5'>Low</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'HPP Range' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={hpp} alt="hpp" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <HppForm intervalTime={intervalTime} />
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'HPS Range' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={hps} alt="hps" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
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
                                    <p className='mx-5 w-40'>High</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Membrane' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={membrane} alt="membrane" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            {/* <div className="p-5">
                            <div className="flex items-center py-3">
                                <p className='w-40'>Status</p>
                                <p className='w-40'>OFF</p>
                                <div className='w-40'>
                                    <Switch color='primary'/>
                                </div>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Current</p>
                                <p className='w-40'>10.5A</p>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Error</p>
                                <p className='w-40'>Error</p>
                            </div>
                            <div className="flex items-center py-3">
                                <p className='w-40'>Settings</p>
                                <p className='w-40'>Settings</p>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Customer Name</p>
                                <input type="text" name="customername" id="customername" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Customer Name" />
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Dry Run Current</p>
                                <input type="text" name="dryruncurrent" id="dryruncurrent" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Dry Run Current" />
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Over load Current</p>
                                <input type="text" name="overloadcurrent" id="overloadcurrent" className="p-3 border rounded-md w-auto outline-none font-medium text-sm leading-5" placeholder="Over load Current" />
                            </div>
                        </div> */}
                        </div>
                    </div>
                }
                {
                    proTitle === 'Premeate Flow Sensor' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={premeteflowsensor} alt="premeteflowsensor" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <PremeteFlowSensorForm intervalTime={intervalTime}/>
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Conductivity' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={conductivity} alt="conductivity" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <ConductivityForm intervalTime={intervalTime} />
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Treated Water Tank' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={twtank} alt="twtank" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
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
                        </div>
                    </div>
                }
                {
                    proTitle === 'IOT' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={iotmodule} alt="iotmodule" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                        </div>
                    </div>
                }
                {
                    proTitle === 'Water ATM' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={roipanel} alt="roipanel" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <RoiPanelAtmForm intervalTime={intervalTime} />
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Tap 1' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={tap} alt="tap" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <Tap1Form intervalTime={intervalTime} />
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Tap 2' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={tap} alt="tap" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <Tap2Form intervalTime={intervalTime} />
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Tap 3' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={tap} alt="tap" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <Tap3Form intervalTime={intervalTime} />
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Tap 4' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={tap} alt="tap" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <Tap4Form intervalTime={intervalTime} />
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Conductivity 1' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={conductivity} alt="conductivity" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <div className="flex items-center py-3">
                                    <p className='w-40'>Conductivity/TDS</p>
                                    <p className='w-40'>1000</p>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <p className='w-40'>Span</p>
                                    <input type="text" name="spn" id="spn" className="p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Span" value={3300} />
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <p className='w-40'>Trip Setpoint</p>
                                    <input type="text" name="tsp" id="tsp" className="p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Trip Setpoint" value={500} />
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <p className='w-40'>Atert Setpoint</p>
                                    <input type="text" name="asp" id="asp" className="p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Atert Setpoint" value={700} />
                                </div>
                                <button className='px-5 bg-primary-color py-2 text-white flex items-center justify-center rounded-lg hover:bg-text-title shadow-md'>Submit</button>
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Conductivity 2' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={conductivity} alt="conductivity" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <Conductivity2Form intervalTime={intervalTime}/>
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Raw Weter Tank' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={twtank} alt="twtank" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            {/* <div className="p-5">
                            <div className="flex items-center py-3">
                                <p className='w-40'>Conductivity/TDS</p>
                                <p className='w-40'>1000</p>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Span</p>
                                <input type="text" name="spn" id="spn" className="p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Span" value={3300}/>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Trip Setpoint</p>
                                <input type="text" name="tsp" id="tsp" className="p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Trip Setpoint" value={500}/>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Atert Setpoint</p>
                                <input type="text" name="asp" id="asp" className="p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Atert Setpoint" value={700}/>
                            </div>
                        </div> */}
                        </div>
                    </div>
                }
                {
                    proTitle === 'Feed Flow Sensor 1' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={feedflowsensor} alt="feedflowsensor" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <FeedFlowSensor1Form intervalTime={intervalTime}/>
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Feed Flow Sensor 2' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={feedflowsensor} alt="feedflowsensor" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <FeedFlowSensor2Form intervalTime={intervalTime}/>
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Feed Flow Sensor 3' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={feedflowsensor} alt="feedflowsensor" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <FeedFlowSensor3Form intervalTime={intervalTime}/>
                            </div>
                        </div>
                    </div>
                }
                {
                    proTitle === 'Feed Flow Sensor 4' &&
                    <div className="p-5 flex flex-wrap items-stretch justify-between">
                        <div className="flex items-center justify-center  w-5/12  ">
                            <img src={feedflowsensor} alt="feedflowsensor" className='w-40' />
                        </div>
                        <div className=" w-1/2 divider relative m-5">
                            <div className="p-5">
                                <FeedFlowSensor4Form intervalTime={intervalTime}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default EquipmentDetail