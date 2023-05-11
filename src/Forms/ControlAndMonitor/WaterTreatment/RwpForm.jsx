import { Switch } from '@material-ui/core'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import * as Yup from "yup";
import TextError from '../../TextError';
import axios from 'axios';
import BackdropComp from '../../../hoc/Backdrop/Backdrop';
const RwpForm = () => {

    const [statusVal, setStatusVal] = useState(false)
    const [editState, setEditState] = useState(false)
    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);

    const initialValuesState = {
        sts: "",
        crt: "",
    };
    const initialValuesSetting = {
        olc: 12.5,
        drc: 1.5,
        spn: 3300,
    }
    const validationSchemaSetting = Yup.object({
        olc: Yup.number('Please enter numbers')
    })

    const onSubmitState = (values, submitProps) => {
        console.log("values", values);
        const userData = JSON.parse(localStorage.getItem('user'));
        let newData = {
            company_name: userData.company_name,
            unit_type: "water_treatment",
            componant_name: "rwp",
            sts: statusVal === true ? "on" : "off"
        }
        let allData = { ...newData }
        console.log("all data", allData);
        axios.post('http://127.0.0.1:8000/topicapiRwp_state/', allData).then((res) => {
            setIsLoading(true);
            setOpen(true);
            setTimeout(() => {
                setIsLoading(false)
                setOpen(false);
            }, 20000);
        }).catch((err) => {
            console.log("err", err);
        })
    }
    const onSubmitSetting = (values, submitProps) => {
        const userData = JSON.parse(localStorage.getItem('user'));
        let newData = {
            company_name: userData.company_name,
            unit_type: "water_treatment",
            componant_name: "rwp"
        }
        let allData = { ...newData, ...values }
        axios.post('http://127.0.0.1:8000/topicapiRwp_setting/', allData).then((res) => {
            console.log("res", res);
            setIsLoading(true);
            setOpen(true);
            setTimeout(() => {
                setIsLoading(false)
                setOpen(false);
            }, 10000);
        }).catch((err) => {
            console.log("err", err);
        })
    }
    return (
        <>
            {isLoading &&
            <BackdropComp open={open}/>
            }
            <div className="flex items-center w-full mb-5 flex-wrap justify-center">
                <div className="flex items-center m-2 ">
                    <div className="rounded-full bg-yellow-300 w-3 h-3 mx-2"></div>
                    <span>Dynamic state variables</span>
                </div>
                <div className="flex items-center m-2 ">
                    <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                    <span>State variables</span>
                </div>
                <div className="flex items-center m-2 ">
                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                    <span>Setting variable</span>
                </div>
            </div>
            <Formik
                initialValues={initialValuesState}
                onSubmit={onSubmitState}
            >
                {
                    (formik) => {
                        return (
                            <Form autoComplete='off'>
                                <div className="flex items-center mt-5 mx-2">
                                    <p className='w-40 my-2 font-bold'>State Variables</p>
                                    <div className="flex items-center justify-center cursor-pointer rounded-full bg-primary-color hover:bg-text-title w-8 h-8 mx-2 hover:text-white">
                                        <BorderColorIcon fontSize='small' onClick={() => setEditState(!editState)} />
                                    </div>
                                </div>
                                <div className="flex items-center py-3">
                                    <div className="rounded-full bg-yellow-300 w-3 h-3 mx-2"></div>
                                    <p className='w-40'>Status</p>
                                    <p className='w-30 mx-2'>{statusVal ? 'ON' : 'OFF'}</p>
                                    <div className='w-30'>
                                        <Switch name='sts' disabled={!editState} value={statusVal} checked={statusVal} onChange={(e) => setStatusVal(e.target.checked)} color='primary' />
                                    </div>
                                </div>
                                <div className="flex items-center py-3">
                                    <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40'>Current</p>
                                    <p className='w-40'>10.5 Ampere</p>
                                </div>
                                {
                                    editState &&
                                    <button type="submit" className='mx-2 px-5 bg-primary-color py-2 text-white flex items-center justify-center rounded-lg hover:bg-text-title shadow-md'>Submit</button>
                                }
                            </Form>
                        )
                    }
                }
            </Formik>
            <Formik
                initialValues={initialValuesSetting}
                onSubmit={onSubmitSetting}
            //validationSchema={validationSchemaSetting}
            >
                {
                    (formik) => {
                        return (
                            <Form autoComplete='off'>
                                <div className="flex items-center mt-5 mx-2">
                                    <p className='w-40 my-2 font-bold'>Setting Variables</p>
                                    <div className="flex items-center justify-center cursor-pointer rounded-full bg-primary-color hover:bg-text-title w-8 h-8 mx-2 hover:text-white">
                                        <BorderColorIcon fontSize='small' onClick={() => setEditSetting(!editSetting)} />
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Over Load Current</p>
                                    <div>
                                        <Field disabled={!editSetting} type='text' id='olc' name='olc' placeholder="Over Load Current" className=" my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" />
                                        <span className='mx-1 my-2'>Ampere</span>
                                    </div>
                                    <ErrorMessage name="olc" component={TextError} />
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Dry Run Current</p>
                                    <div>
                                        <Field disabled={!editSetting} type='text' id='drc' name='drc' placeholder="Dry Run Current" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" />
                                        <span className='mx-1 my-2'>Ampere</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Span</p>
                                    <Field disabled={!editSetting} type='text' id='spn' name='spn' placeholder="Span" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" />
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

export default RwpForm