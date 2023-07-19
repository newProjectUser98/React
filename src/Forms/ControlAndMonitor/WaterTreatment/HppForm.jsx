import { Switch } from '@material-ui/core'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import * as Yup from "yup";
import TextError from '../../TextError';
import axios from 'axios';
import BackdropComp from '../../../hoc/Backdrop/Backdrop';
import { useNavigate } from 'react-router-dom';
const HppForm = ({ intervalTime }) => {
    let localStorageDataHpp = JSON.parse(localStorage.getItem('localStorage_data_hpp'))

    const [statusVal, setStatusVal] = useState(localStorageDataHpp?.statusVal)
    const [editState, setEditState] = useState(false)
    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [olc, setOlc] = React.useState(localStorageDataHpp?.olc);
    const [drc, setDrc] = React.useState(localStorageDataHpp?.drc);
    const [spn, setSpn] = React.useState(localStorageDataHpp?.spn);
    const [crt, setCrt] = React.useState(localStorageDataHpp?.crt);
    const navigate = useNavigate();
    let access_token = localStorage.getItem("access_token")

    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            let newData = {
                unit_type: "water_treatment",
                company_name: userData.company_name,
                componant_name: "hpp",
                site_name: userData.site_name
            }
            axios.post("/topicapi/updated_treat_hpp/", newData).then((resp) => {

                let localStorageDataHpp = JSON.parse(localStorage.getItem("localStorage_data_hpp"));

                // Check if localStorageDataHpp exists and has values
                if (!localStorageDataHpp) {
                    localStorageDataHpp = {};
                }

                // Update the variables with new values if they are not zero

                localStorageDataHpp.statusVal = resp.data[0].data.data_sta.sts == "on" ? true : false;

                if (resp.data[0].data.data_sta.crt !== 0 && !editState) {
                    localStorageDataHpp.crt = resp.data[0].data.data_sta.crt;
                }

                if (resp.data[0].data.data_set.olc !== 0 && !editSetting) {
                    localStorageDataHpp.olc = resp.data[0].data.data_set.olc;
                }

                if (resp.data[0].data.data_set.drc !== 0 && !editSetting) {
                    localStorageDataHpp.drc = resp.data[0].data.data_set.drc;
                }

                if (resp.data[0].data.data_set.spn !== 0 && !editSetting) {
                    localStorageDataHpp.spn = resp.data[0].data.data_set.spn;
                }

                // Store the updated data in localStorage
                localStorage.setItem("localStorage_data_hpp", JSON.stringify(localStorageDataHpp));

                let updated_Time_state = localStorage.getItem("updated_time_hpp_state")
                let updated_Time_settng = localStorage.getItem("updated_time_hpp_settings")

                if (updated_Time_state != resp.data[0].data.data_sta.updated_at || updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                    if (resp.data[0].data.data_sta.sts != "") {
                        setStatusVal(resp.data[0].data.data_sta.sts == "on" ? true : false)
                    }
                    if (resp.data[0].data.data_sta.crt != 0) {
                        setCrt(resp.data[0].data.data_sta.crt)
                    }
                    if (resp.data[0].data.data_set.olc != 0) {
                        setOlc(resp.data[0].data.data_set.olc)
                    }
                    if (resp.data[0].data.data_set.drc != 0) {
                        setDrc(resp.data[0].data.data_set.drc)
                    }
                    if (resp.data[0].data.data_set.spn != 0) {
                        setSpn(resp.data[0].data.data_set.spn)
                    }
                    if (updated_Time_state != resp.data[0].data.data_sta.updated_at) {
                        alert(`Device state of hpp component is updated successfully`)
                    } else if (updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                        alert(`Device setting of hpp component is updated successfully`)
                    }
                    setIsLoading(false);

                    localStorage.setItem('updated_time_hpp_state', resp.data[0].data.data_sta.updated_at);
                    localStorage.setItem('updated_time_hpp_settings', resp.data[0].data.data_set.updated_at);
                }
            }).catch((err) => {
                console.log("err in hpp state", err);
            })
        };
        fetchData();
        const intervalId = setInterval(fetchData, intervalTime);
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalTime]);


    const initialValuesState = {
        sts: "",
        crt: "",
    };

    const initialValuesSetting = {
        olc: "settingData.olc",
        drc: "settingData.drc",
        spn: "settingData.spn",
    }

    // eslint-disable-next-line
    const validationSchemaSetting = Yup.object({
        olc: Yup.number('Please enter numbers')
    })

    const onSubmitState = (values, submitProps) => {
        const userData = JSON.parse(localStorage.getItem('user'));

        let newData = {
            company_name: userData.company_name,
            unit_type: "water_treatment",
            componant_name: "hpp",
            sts: statusVal === true ? "on" : "off",
            site_name: userData.site_name
        };

        setTimeout(() => {
            axios.post('/topicapi/hpp_state/', newData, {
                headers: {
                    'Authorization': 'Bearer ' + access_token,
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    setIsLoading(true);
                    setOpen(true);
                    setTimeout(() => {
                        setIsLoading(false)
                        setOpen(false);
                    }, 20000);
                })
                .catch((err) => {
                    console.log("err", err);
                    if (err.response.statusText === "Unauthorized") {
                        navigate("/");
                        alert("Please enter valid credentials");
                    }
                });
        }, 3000); // Delay of 3 seconds
    }
    const onSubmitSetting = (values, submitProps) => {
        const userData = JSON.parse(localStorage.getItem('user'));
        let newData = {
            company_name: userData.company_name,
            unit_type: "water_treatment",
            componant_name: "hpp",
            olc: olc,
            spn: spn,
            drc: drc,
            site_name: userData.site_name
        };

        setTimeout(() => {
            axios.post('/topicapi/hpp_setting/', newData, {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                }
            })
                .then((res) => {
                    console.log("res", res);
                    setIsLoading(true);
                    setOpen(true);
                    setTimeout(() => {
                        setIsLoading(false)
                        setOpen(false);
                    }, 10000);
                })
                .catch((err) => {
                    console.log("err", err.response.statusText);
                    if (err.response.statusText === "Unauthorized") {
                        navigate("/");
                        alert("Please enter valid credentials");
                    }
                });
        }, 3000); // Delay of 3 seconds

    }
    return (
        <>
            {isLoading &&
                <BackdropComp open={open} />
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
                                    <p className='w-40'>{crt} A</p>
                                    {/* <p className='w-40'>10.5 Ampere</p> */}
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
                    ({ values }) => {
                        console.log("initialValuesSetting in return", initialValuesSetting);
                        console.log("values....", values);
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
                                        <Field disabled={!editSetting} type='number' required id='olc' name='olc' placeholder="Over Load Current" className=" my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" value={olc}
                                            onChange={(e) => setOlc(e.target.value)} />
                                        <span className='mx-1 my-2'>Ampere</span>
                                    </div>
                                    <ErrorMessage name="olc" component={TextError} />
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Dry Run Current</p>
                                    <div>
                                        <Field disabled={!editSetting} type='number' required id='drc' name='drc' placeholder="Dry Run Current" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" value={drc}
                                            onChange={(e) => setDrc(e.target.value)} />
                                        <span className='mx-1 my-2'>Ampere</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Span</p>
                                    <Field disabled={!editSetting} type='number' required id='spn' name='spn' placeholder="Span" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" value={spn}
                                        onChange={(e) => setSpn(e.target.value)} />
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

export default HppForm