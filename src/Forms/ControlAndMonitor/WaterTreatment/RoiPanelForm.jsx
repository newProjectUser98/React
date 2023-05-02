import { Switch } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';


const RoiPanelForm = () => {
    const [statusVal, setStatusVal] = useState(false)
    const [dosingpumpVal, setdosingpumpVal] = useState(true)
    const [editSetting, setEditSetting] = useState(false)

    const initialValues = {
        mod:'',
        nmv:'',
        stp:'',
        srt1: 99,
        srt2: 59,
        unv:180,
        ovv:280,
        spn:330,
        srt: 9959,
        bkt: 99,
        rst: 99,

      };
  return (
    <>
        <div className="flex items-center w-full mb-5 flex-wrap justify-center">
            <div className="flex items-center m-2 ">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div> 
                <span>State variables</span>
            </div>
            <div className="flex items-center m-2 ">
                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                <span>Setting variable</span>
            </div>
        </div>
        <div className="flex items-center mt-5 mx-2">
            <p className='w-40 my-2 font-bold'>State Variables</p>
        </div>
        <div className="flex items-center py-3">
            <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
            <p className='w-40'>Status</p>
            <p className='w-30 mx-2'>{statusVal? 'ON' : 'OFF'}</p>
            <div className='w-30'>
                <Switch name='status' checked={statusVal} onChange={(e)=> setStatusVal(e.target.checked)} color='primary'/>
            </div>
        </div>
        <div className="flex items-center py-3 flex-wrap">
            <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
            <p className='w-40 my-2'>Row Water Tank Level</p>
            <select name="rtl" id="rtl" className='w-52 p-2 border my-2 rounded'>
                <option value="full">Full</option>
                <option value="emp">Empty</option>
            </select>
        </div>
        <div className="flex items-center py-3 flex-wrap">
            <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
            <p className='w-40 my-2'>Trated Water Tank Level</p>
            <select name="ttl" id="ttl" className='w-52 p-2 border my-2 rounded'>
                <option value="full">Full</option>
                <option value="emp">Empty</option>
            </select>
        </div>
        <div className="flex items-center py-3 flex-wrap">
            <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
            <p className='w-40 my-2'>Low Pressure Switch</p>
            <select name="lps" id="lps" className='w-52 p-2 border my-2  rounded'>
                <option value="low">Low</option>
                <option value="high">High</option>
            </select>
        </div>
        <div className="flex items-center py-3 flex-wrap">
            <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
            <p className='w-40 my-2'>High Pressure Switch</p>
            <select name="hps" id="hps" className='w-52 p-2 border my-2 rounded'>
                <option value="low">Low</option>
                <option value="high">High</option>
            </select>
        </div>
        <div className="flex items-center py-3 flex-wrap">
            <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
            <p className='w-40 my-2'>Dosing Pump</p>
            <p className='w-30 mx-2'>{dosingpumpVal? 'ON' : 'OFF'}</p>
            <div className='w-30'>
                <Switch name='status' checked={dosingpumpVal} onChange={(e)=> setdosingpumpVal(e.target.checked)} color='primary'/>
            </div>
        </div>
        <div className="flex items-center py-3">
            <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
            <p className='w-40'>Input Voltage</p>
            <p className=''>230</p>
            <span className='mx-1'>Volts</span>
        </div>
        <div className="flex items-center py-3 flex-wrap">
            <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
            <p className='w-40 my-2'>Error</p>
            <select name="stp" id="stp" className='my-2 w-52 p-2 border rounded'>
                <option value="opl">Operational</option>
                <option value="lpst">LPS Trip</option>
                <option value="hpst">HPS Trip</option>
                <option value="rwpot">RWP Overload Trip</option>
                <option value="hppot">HPP Overload Trip</option>
                <option value="rwpdt">RWP Dryrun Trip</option>
                <option value="hppdt">HPP Dryrun Trip</option>
                <option value="uvl">Under Voltage</option>
                <option value="ovl">Over Voltage Trip</option>
                <option value="cont">Conductivity Trip</option>
            </select>
        </div>
        <Formik initialValues={initialValues}>
            {
                (formik)=>{
                    return(
                        <Form autoComplete='off'>
                            <div className="flex items-center mt-5 mx-2">
                                <p className='w-40 my-2 font-bold'>Setting Variables</p>
                                <div className="flex items-center justify-center cursor-pointer rounded-full bg-primary-color hover:bg-text-title w-8 h-8 mx-2 hover:text-white">
                                    <BorderColorIcon fontSize='small' onClick={ ()=> setEditSetting(!editSetting)} />
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Mode</p>
                                <Field as="select" disabled={!editSetting} name="mod" className='w-52 my-2 p-2 border rounded'>
                                    <option value="" disabled>Select Mode</option>
                                    <option value="aut">Auto</option>
                                    <option value="sem">Semi Auto</option>
                                    <option value="man">Manual</option>
                                </Field>
                            </div>
                            
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Under Voltage</p>
                                <div>
                                    <Field disabled={!editSetting} type="text" name="unv" id="unv" className=" my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Under Voltage"/>
                                    <span className='mx-5 my-2'>Volts</span>
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Over Voltage</p>
                                <div>
                                    <Field disabled={!editSetting} type="text" name="ovv" id="ovv" className=" my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Over Voltage"/>
                                    <span className='mx-5 my-2'>Volts</span>
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Span</p>
                                <Field disabled={!editSetting} type="text" name="spn" id="spn" className="p-3 my-2 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Span"/>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>No.of Multiport valve</p>
                                <Field as="select" disabled={!editSetting} name="nmv" className='w-52 my-2 p-2 border rounded'>
                                    <option value="" disabled>Please Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </Field>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Sensor Type</p>
                                <Field as="select" disabled={!editSetting} name="stp" className='w-52 my-2 p-2 border rounded'>
                                    <option value="" disabled>Select Sensor Type</option>
                                    <option value="t">Time</option>
                                    <option value="f">Flow</option>
                                </Field>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Service Time</p>
                                <div>
                                    <Field disabled={!editSetting} type="text" name="srt1" id="srth" className="my-2 p-3 border rounded-md w-20 outline-none font-medium text-sm leading-5" placeholder="Service Time"/>
                                    <span className='mx-1'>:</span>
                                    <Field disabled={!editSetting} type="text" name="srt2" id="srts" className="my-2 p-3 border rounded-md w-20 outline-none font-medium text-sm leading-5" placeholder="Service Time"/>
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Backwash Time</p>
                                <Field disabled={!editSetting} type="text" name="bkt" id="bkt" className="p-3 my-2 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Backwash Time"/>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Rinse Time</p>
                                <Field disabled={!editSetting} type="text" name="rst" id="rst" className="p-3 my-2 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rinse Time"/>
                            </div>
                            
                            {
                                editSetting &&
                                    <button type="submit" className='mx-2 px-5 bg-primary-color py-2 text-white flex items-center justify-center rounded-lg hover:bg-text-title shadow-md'>Submit</button>
                            }
                        </Form>
                    )
                }
            }
        </Formik>
    </>
  )
}

export default RoiPanelForm