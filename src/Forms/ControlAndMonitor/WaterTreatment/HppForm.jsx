import { Switch } from '@material-ui/core';
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios';
import BackdropComp from '../../../hoc/Backdrop/Backdrop';
import { useNavigate } from 'react-router-dom';

const HppForm = ({ intervalTime }) => {
    const [statusVal, setStatusVal] = useState(false)
    const [editState, setEditState] = useState(false)
    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [olc, setOlc] = React.useState("");
    const [drc, setDrc] = React.useState("");
    const [spn, setSpn] = React.useState("");
    const [crt, setCrt] = React.useState("");
    const navigate = useNavigate();
    let access_token = localStorage.getItem("access_token")
    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            let newData = {
                unit_type: "water_treatment",
                company_name: userData.company_name,
                componant_name: "hpp"
            }
            axios.post("/topicapi/updated_treat_hpp/", newData).then((resp) => {
                console.log("resp in hpp", resp.data[0].data);
                if (resp.data[0].data.message_type === "updsta") {
                    setStatusVal(resp.data[0].data.sts == "on" ? true : false)
                    setCrt(resp.data[0].data.crt)
                } else if (resp.data[0].data.message_type === "updset") {
                    setOlc(resp.data[0].data.olc)
                    setDrc(resp.data[0].data.drc)
                    setSpn(resp.data[0].data.spn)
                }
                let updated_Time = localStorage.getItem("updated_time_hpp")
                if (updated_Time != resp.data[0].data.updated_at) {
                    setIsLoading(false);
                    alert("Device Setting Updated Successfully")
                }
                localStorage.setItem('updated_time_hpp', resp.data[0].data.updated_at);
            }).catch((err) => {
                console.log("err in rwp state", err);
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
    };
    const onSubmitState = (values, submitProps) => {
        const userData = JSON.parse(localStorage.getItem('user'));
        let newData = {
            company_name: userData.company_name,
            unit_type: "water_treatment",
            componant_name: "hpp"
        };
        axios.post("/topicapi/get_device_id/", newData)
            .then((resp) => {
                console.log("resp in hpp deviceid", resp.data[0].data.Device_id);

                let newData = {
                    company_name: userData.company_name,
                    unit_type: "water_treatment",
                    componant_name: "hpp",
                    device_id: resp?.data[0]?.data?.Device_id,
                    sts: statusVal === true ? "on" : "off"
                };

                setTimeout(() => {
                    axios.post('/topicapi/hpp_state/', newData, {
                        headers: {
                            'Authorization': 'Bearer ' + access_token,
                            'Content-Type': 'application/json'
                        }
                    })
                        .then((res) => {
                            console.log("res", res);
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
                                alert("Please enter valid credentials")
                            }
                        });
                }, 3000); // Delay of 3 seconds

            })
            .catch((error) => {
                console.log("error", error);
            });
    }
    const onSubmitSetting = (values, submitProps) => {
        const userData = JSON.parse(localStorage.getItem('user'));
        let newData = {
            company_name: userData.company_name,
            unit_type: "water_treatment",
            componant_name: "hpp"
        };
        console.log("newData", newData);

        axios.post("/topicapi/get_device_id/", newData)
            .then((resp) => {
                console.log("resp in hpp set device id", resp.data[0].data.Device_id);

                let newData = {
                    company_name: userData.company_name,
                    unit_type: "water_treatment",
                    componant_name: "hpp",
                    olc: olc,
                    spn: spn,
                    drc: drc,
                    device_id: resp?.data[0]?.data?.Device_id
                };

                setTimeout(() => {
                    axios.post('/topicapi/hpp_setting/', newData, {
                        headers: {
                            'Authorization': 'Bearer ' + access_token,
                            'Content-Type': 'application/json'
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
                            console.log("err", err);
                            if (err.response.statusText === "Unauthorized") {
                                navigate("/");
                                alert("Please enter valid credentials")
                            }
                        });
                }, 3000); // Delay of 3 seconds

            })
            .catch((error) => {
                console.log("error", error);
            });

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
                                        <Field disabled={!editSetting} type="text" name="olc" id="olc" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Over Load Current" value={olc}
                                            onChange={(e) => setOlc(e.target.value)} />
                                        <span className='mx-5 my-2'>Ampere</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Dry Run Current</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="drc" id="drc" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Dry Run Current" value={drc}
                                            onChange={(e) => setDrc(e.target.value)} />
                                        <span className='mx-5 my-2'>Ampere</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Span</p>
                                    <Field disabled={!editSetting} type="text" name="spn" id="spn" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Span" value={spn}
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