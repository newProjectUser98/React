import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios';
import BackdropComp from '../../../hoc/Backdrop/Backdrop';
import { useNavigate } from 'react-router-dom';

let CNDTDS = [
    { value: "cnd", label: "Conductivity" },
    { value: "tds", label: "TDS" }
]

const ConductivityForm = ({ intervalTime }) => {
    // eslint-disable-next-line
    let localStorageData = JSON.parse(localStorage.getItem('localStorage_data'))
    useEffect(() => {
        let component_Name = localStorage.getItem("component_Name")
        if (component_Name != "cnd_sen") {
            localStorage.removeItem("localStorage_data")
        }
    }, [])
    const [changeConductivity, setChangeConductivity] = useState('cnd')
    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [spn, setSpn] = React.useState(localStorageData?.spn);
    const [tsp, setTsp] = React.useState(localStorageData?.tsp);
    const [asp, setAsp] = React.useState(localStorageData?.asp);
    const [cnd, setCnd] = React.useState(localStorageData?.cnd);
    const [tds, setTds] = React.useState(localStorageData?.tds);
    const navigate = useNavigate();
    let access_token = localStorage.getItem("access_token")

    let componentsJSON = localStorage.getItem("components");
    let components = JSON.parse(componentsJSON);
    console.log("components ==>", changeConductivity);

    const initialValues = {
        spn: 330,
        tsp: 500,
        asp: 700
    };

    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            if (changeConductivity === "cnd") {
                localStorage.setItem("component_Name", "cnd_sen")
                let newData = {
                    "unit_type": "water_treatment",
                    "company_name": userData.company_name,
                    "componant_name": "cnd_sen",
                }
                console.log(newData);
                axios.post("/topicapi/updated_treat_cnd_sen/", newData).then((resp) => {
                    if (cnd === undefined && spn === undefined && tsp === undefined && asp === undefined) {
                        let localStorage_data = {
                            cnd: resp.data[0].data.data_sta.cnd,
                            spn: resp.data[0].data.data_set.spn,
                            tsp: resp.data[0].data.data_set.tsp,
                            asp: resp.data[0].data.data_set.asp,
                        }
                        localStorage.setItem("localStorage_data", JSON.stringify(localStorage_data));
                    }
                    let updated_Time_state = localStorage.getItem("updated_time_cnd_sen_state")
                    let updated_Time_settng = localStorage.getItem("updated_time_cnd_sen_settings")

                    if (updated_Time_state != resp.data[0].data.data_sta.updated_at || updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                        if (resp.data[0].data.data_sta.cnd != 0) {
                            setCnd(resp.data[0].data.data_sta.cnd)
                        }
                        if (resp.data[0].data.data_set.spn != 0) {
                            setSpn(resp.data[0].data.data_set.spn)
                        }
                        if (resp.data[0].data.data_set.tsp != 0) {
                            setTsp(resp.data[0].data.data_set.tsp)
                        }
                        if (resp.data[0].data.data_set.asp != 0) {
                            setAsp(resp.data[0].data.data_set.asp)
                        }
                        setIsLoading(false);
                        if (resp.data[0].data.data_sta.message_type === "updsta") {
                            alert("Device State Data Updated Successfully")
                        } else if(resp.data[0].data.data_set.message_type === "updset") {
                            alert("Device Setting Data Updated Successfully")
                        }
                    }
                    localStorage.setItem('updated_time_cnd_sen_state', resp.data[0].data.data_sta.updated_at);
                    localStorage.setItem('updated_time_cnd_sen_settings', resp.data[0].data.data_set.updated_at);
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
    }, [intervalTime, changeConductivity]);

    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            if (changeConductivity === "tds") {
                localStorage.setItem("component_Name", "tds_sen")
                let newData = {
                    "unit_type": "water_treatment",
                    "company_name": userData.company_name,
                    "componant_name": "tds_sen",
                }
                console.log(newData);
                axios.post("/topicapi/updated_treat_tds_sen/", newData).then((resp) => {
                    if (cnd === undefined && spn === undefined && tsp === undefined && asp === undefined) {
                        let localStorage_data = {
                            cnd: resp.data[0].data.data_sta.cnd,
                            spn: resp.data[0].data.data_set.spn,
                            tsp: resp.data[0].data.data_set.tsp,
                            asp: resp.data[0].data.data_set.asp,
                        }
                        localStorage.setItem("localStorage_data", JSON.stringify(localStorage_data));
                    }
                    let updated_Time_state = localStorage.getItem("updated_time_tds_sen_state")
                    let updated_Time_settng = localStorage.getItem("updated_time_tds_sen_settings")

                    if (updated_Time_state != resp.data[0].data.data_sta.updated_at || updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                        if (resp.data[0].data.data_sta.tds != 0) {
                            setTds(resp.data[0].data.data_sta.tds)
                        }
                        if (resp.data[0].data.data_set.spn != 0) {
                            setSpn(resp.data[0].data.data_set.spn)
                        }
                        if (resp.data[0].data.data_set.tsp != 0) {
                            setTsp(resp.data[0].data.data_set.tsp)
                        }
                        if (resp.data[0].data.data_set.asp != 0) {
                            setAsp(resp.data[0].data.data_set.asp)
                        }
                        setIsLoading(false);
                        if (resp.data[0].data.data_sta.message_type === "updsta") {
                            alert("Device State Data Updated Successfully")
                        } else if(resp.data[0].data.data_set.message_type === "updset") {
                            alert("Device Setting Data Updated Successfully")
                        }
                    }
                    localStorage.setItem('updated_time_tds_sen_state', resp.data[0].data.data_sta.updated_at);
                    localStorage.setItem('updated_time_tds_sen_settings', resp.data[0].data.data_set.updated_at);
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
    }, [intervalTime, changeConductivity]);

    const onSubmitSetting = (values, submitProps) => {
        const userData = JSON.parse(localStorage.getItem('user'));
        // let newData = {
        //     company_name: userData.company_name,
        //     unit_type: "water_treatment",
        //     componant_name: "cnd_sen",
        //     spn: spn,
        //     tsp: tsp,
        //     asp: asp,
        // }
        // axios.post("/topicapi/get_device_id/", newData).then((resp) => {
        //     console.log("resp", resp);
        let newData = {
            company_name: userData.company_name,
            unit_type: "water_treatment",
            componant_name: changeConductivity === 'cnd' ? "cnd_sen" : "tds_sen",
            spn: spn,
            tsp: tsp,
            asp: asp,
            // device_id: resp?.data[0]?.data?.Device_id
        }
        changeConductivity === 'cnd' ?
            axios.post('/topicapi/cnd_setting/', newData, {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                }
            }).then((res) => {
                console.log("res in cnd", res);
                setIsLoading(true);
                setOpen(true);
                setTimeout(() => {
                    setIsLoading(false)
                    setOpen(false);
                }, 10000);
            }).catch((err) => {
                console.log("err", err);
                if (err.response.statusText === "Unauthorized") {
                    navigate("/");
                    alert("Please enter valid credentials")
                }
            }) :

            axios.post('/topicapi/tds_setting/', newData).then((res) => {
                console.log("res in tds", res);
                setIsLoading(true);
                setOpen(true);
                setTimeout(() => {
                    setIsLoading(false)
                    setOpen(false);
                }, 10000);
            }).catch((err) => {
                console.log("err", err);
            })
        // }).catch((error) => {
        //     console.log("error", error);
        // })

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
                <select name="ntp" id="ntp" className='w-52 p-3 border rounded' value={changeConductivity} onChange={(e) => setChangeConductivity(e.target.value)}>
                    {
                        CNDTDS.map((options) => {
                            return (
                                <option value={options.value}>{options.label}</option>
                            )
                        })
                    }
                </select>
                {
                    // changeConductivity === 'conductivity' ?
                    changeConductivity === 'cnd' ?
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
                                    <p className='w-40 my-2'>Span</p>
                                    <Field disabled={!editSetting} value={spn} onChange={(e) => setSpn(e.target.value)} type="text" name="spn" id="spn" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Span" />
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Trip Setpoint</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="tsp" value={tsp} onChange={(e) => setTsp(e.target.value)} id="tsp" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Trip Setpoint" />
                                        {
                                            // changeConductivity === 'conductivity' ?
                                            changeConductivity === 'cnd' ?
                                                <span className='mx-1'>uS</span>
                                                :
                                                <span className='mx-1'>ppm</span>
                                        }
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Alert Setpoint</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="asp" id="asp" value={asp} onChange={(e) => setAsp(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Alert Setpoint" />
                                        {
                                            // changeConductivity === 'conductivity' ?
                                            changeConductivity === 'cnd' ?
                                                <span className='mx-1'>uS</span>
                                                :
                                                <span className='mx-1'>ppm</span>
                                        }
                                    </div>
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

export default ConductivityForm