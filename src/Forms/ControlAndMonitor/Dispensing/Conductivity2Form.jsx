import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios';
import BackdropComp from '../../../hoc/Backdrop/Backdrop';
import { useNavigate } from 'react-router-dom';

const Conductivity2Form = ({ intervalTime }) => {
    let localStorageData = JSON.parse(localStorage.getItem('localStorage_data_cnd_consen'))

    const [changeConductivityDis, setChangeConductivityDis] = useState('cnd')
    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [spn, setSpn] = React.useState(localStorageData?.spn);
    const [asp, setAsp] = React.useState(localStorageData?.asp);
    const [cnd, setCnd] = React.useState(localStorageData?.cnd);
    const [tds, setTds] = React.useState(localStorageData?.tds);

    const navigate = useNavigate();
    let access_token = localStorage.getItem("access_token")
    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            if (changeConductivityDis === "cnd") {
                localStorage.setItem("component_Name", "cnd_consen")
                let newData = {
                    "unit_type": "water_dispense",
                    "company_name": userData.company_name,
                    "componant_name": "cnd_consen",
                }
                axios.post("/topicapi/updated_disp_cnd_consen/", newData).then((resp) => {

                    // Retrieve data from localStorage
                    let localStorageData = JSON.parse(localStorage.getItem("localStorage_data_cnd_consen"));

                    // Check if localStorageData exists and has values
                    if (!localStorageData) {
                        localStorageData = {};
                    }

                    // Update the variables with new values if they are not zero
                    if (resp.data[0].data.data_sta.cnd !== 0) {
                        localStorageData.cnd = resp.data[0].data.data_sta.cnd;
                    }

                    if (resp.data[0].data.data_set.spn !== 0) {
                        localStorageData.spn = resp.data[0].data.data_set.spn;
                    }

                    if (resp.data[0].data.data_set.asp !== 0) {
                        localStorageData.asp = resp.data[0].data.data_set.asp;
                    }

                    // Store the updated data in localStorage
                    localStorage.setItem("localStorage_data_cnd_consen", JSON.stringify(localStorageData));

                    let updated_Time_state = localStorage.getItem("updated_time_cnd_consen_state")
                    let updated_Time_settng = localStorage.getItem("updated_time_cnd_consen_settings")

                    if (updated_Time_state != resp.data[0].data.data_sta.updated_at || updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                        if (resp.data[0].data.data_sta.cnd != 0) {
                            setCnd(resp.data[0].data.data_sta.cnd)
                        }
                        if (resp.data[0].data.data_set.spn != 0) {
                            setSpn(resp.data[0].data.data_set.spn)
                        }
                        if (resp.data[0].data.data_set.asp != 0) {
                            setAsp(resp.data[0].data.data_set.asp)
                        }

                        setIsLoading(false);
                        if (updated_Time_state != resp.data[0].data.data_sta.updated_at) {
                            alert(`Device state of cnd_consen component is updated successfully`)
                        } else if (updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                            alert(`Device setting of cnd_consen component is updated successfully`)
                        }
                        localStorage.setItem('updated_time_cnd_consen_state', resp.data[0].data.data_sta.updated_at);
                        localStorage.setItem('updated_time_cnd_consen_settings', resp.data[0].data.data_set.updated_at);
                    }
                }).catch((err) => {
                    console.log("err", err);
                })

            }
        }
        fetchData();
        const intervalId = setInterval(fetchData, intervalTime);
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalTime, changeConductivityDis]);

    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            if (changeConductivityDis === "tds") {
                localStorage.setItem("component_Name", "tds_consen")
                let newData = {
                    "unit_type": "water_dispense",
                    "company_name": userData.company_name,
                    "componant_name": "tds_consen",
                }
                axios.post("/topicapi/updated_disp_tds_consen/", newData).then((resp) => {

                    // Retrieve data from localStorage
                    let localStorageData = JSON.parse(localStorage.getItem("localStorage_data_tds_consen"));

                    // Check if localStorageData exists and has values
                    if (!localStorageData) {
                        localStorageData = {};
                    }

                    // Update the variables with new values if they are not zero
                    if (resp.data[0].data.data_sta.tds !== 0) {
                        localStorageData.tds = resp.data[0].data.data_sta.tds;
                    }

                    if (resp.data[0].data.data_set.spn !== 0) {
                        localStorageData.spn = resp.data[0].data.data_set.spn;
                    }

                    if (resp.data[0].data.data_set.asp !== 0) {
                        localStorageData.asp = resp.data[0].data.data_set.asp;
                    }

                    // Store the updated data in localStorage
                    localStorage.setItem("localStorage_data_tds_consen", JSON.stringify(localStorageData));

                    let updated_Time_state = localStorage.getItem("updated_time_tds_consen_state")
                    let updated_Time_settng = localStorage.getItem("updated_time_tds_consen_settings")

                    if (updated_Time_state != resp.data[0].data.data_sta.updated_at || updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                        if (resp.data[0].data.data_sta.tds != 0) {
                            setTds(resp.data[0].data.data_sta.tds)
                        }
                        if (resp.data[0].data.data_set.spn != 0) {
                            setSpn(resp.data[0].data.data_set.spn)
                        }
                        if (resp.data[0].data.data_set.asp != 0) {
                            setAsp(resp.data[0].data.data_set.asp)
                        }

                        setIsLoading(false);
                        if (updated_Time_state != resp.data[0].data.data_sta.updated_at) {
                            alert(`Device state of tds_consen component is updated successfully`)
                        } else if (updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                            alert(`Device setting of tds_consen component is updated successfully`)
                        }
                        localStorage.setItem('updated_time_tds_consen_state', resp.data[0].data.data_sta.updated_at);
                        localStorage.setItem('updated_time_tds_consen_settings', resp.data[0].data.data_set.updated_at);
                    }
                }).catch((err) => {
                    console.log("err", err);
                })

            }
        }
        fetchData();
        const intervalId = setInterval(fetchData, intervalTime);
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalTime, changeConductivityDis]);

    const initialValues = {
        spn: "",
        asp: "",
    };

    const onSubmitSetting = (values, submitProps) => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (changeConductivityDis === "cnd") {
            let newData = {
                company_name: userData.company_name,
                unit_type: "water_dispense",
                componant_name: "cnd_consen",
                spn: spn,
                asp: asp,
            };
            setTimeout(() => {
                axios.post('/topicapi/cnd_consen_setting/', newData, {
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
        } else if (changeConductivityDis === "tds") {
            let newData = {
                company_name: userData.company_name,
                unit_type: "water_dispense",
                componant_name: "tds_consen",
                spn: spn,
                asp: asp,
            };
            setTimeout(() => {
                axios.post('/topicapi/tds_consen_setting/', newData, {
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
        }

    }
    return (
        <>
            {isLoading &&
                <BackdropComp open={open} />
            }
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
                <select name="ntp" id="ntp" className='w-40 px-2 py-2 border rounded' value={changeConductivityDis} onChange={(e) => setChangeConductivityDis(e.target.value)}>

                    <option value={changeConductivityDis}>{changeConductivityDis === "cnd" ? "Conductivity" : "TDS"}</option>

                </select>

                {
                    changeConductivityDis == 'cnd' ?
                        <p className='w-30 mx-3'>{cnd} uS</p>
                        :
                        <p className='w-30 mx-3'>{tds} ppm</p>
                }
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmitSetting}>
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
                                    <p className='w-40 my-2 '>Span</p>
                                    <Field disabled={!editSetting} type="text" name="spn" value={spn} onChange={(e) => setSpn(e.target.value)} id="spn" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Span" />
                                </div>

                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Alert Setpoint</p>
                                    <Field disabled={!editSetting} type="text" name="asp" value={asp} onChange={(e) => setAsp(e.target.value)} id="asp" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Atert Setpoint" />
                                    {
                                        changeConductivityDis === 'cnd' ?
                                            <span className='mx-5'>uS</span>
                                            :
                                            <span className='mx-5'>ppm</span>
                                    }
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

export default Conductivity2Form