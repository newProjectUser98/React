import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios';
import BackdropComp from '../../../hoc/Backdrop/Backdrop';
import { useNavigate } from 'react-router-dom';

const ConductivityForm = ({ intervalTime }) => {
    // eslint-disable-next-line
    let localStorageData = JSON.parse(localStorage.getItem('localStorage_data_cnd_sen'))

    const [changeConductivity, setChangeConductivity] = useState('Conductivity')
    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [spn, setSpn] = React.useState(localStorageData?.spn);
    const [tsp, setTsp] = React.useState(localStorageData?.tsp);
    const [asp, setAsp] = React.useState(localStorageData?.asp);
    const [cnd, setCnd] = React.useState(localStorageData?.cnd);
    const navigate = useNavigate();
    let access_token = localStorage.getItem("access_token")

    let componentsJSON = localStorage.getItem("components");
    let components = JSON.parse(componentsJSON);

    const initialValues = {
        spn: 330,
        tsp: 500,
        asp: 700
    };

    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            localStorage.setItem("component_Name", "cnd_sen")
            let newData = {
                "unit_type": "water_treatment",
                "company_name": userData.company_name,
                "componant_name": "cnd_sen",
                "site_name": userData.site_name
            }
            console.log(newData);
            axios.post("/topicapi/updated_treat_cnd_sen/", newData).then((resp) => {

                // Retrieve data from localStorage
                let localStorageData = JSON.parse(localStorage.getItem("localStorage_data_cnd_sen"));

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

                if (resp.data[0].data.data_set.tsp !== 0) {
                    localStorageData.tsp = resp.data[0].data.data_set.tsp;
                }

                if (resp.data[0].data.data_set.asp !== 0) {
                    localStorageData.asp = resp.data[0].data.data_set.asp;
                }

                // Store the updated data in localStorage
                localStorage.setItem("localStorage_data_cnd_sen", JSON.stringify(localStorageData));

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
                    if (updated_Time_state != resp.data[0].data.data_sta.updated_at) {
                        alert(`Device state of cnd_sen component is updated successfully`)
                    } else if (updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                        alert(`Device setting of cnd_sen component is updated successfully`)
                    }
                    localStorage.setItem('updated_time_cnd_sen_state', resp.data[0].data.data_sta.updated_at);
                    localStorage.setItem('updated_time_cnd_sen_settings', resp.data[0].data.data_set.updated_at);
                }
            }).catch((err) => {
                console.log("err", err);
            })
        }

        fetchData();
        const intervalId = setInterval(fetchData, intervalTime);
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalTime, changeConductivity]);


    const onSubmitSetting = (values, submitProps) => {
        const userData = JSON.parse(localStorage.getItem('user'));

        let newData = {
            company_name: userData.company_name,
            unit_type: "water_treatment",
            componant_name: "cnd_sen",
            spn: spn,
            tsp: tsp,
            asp: asp,
            site_name: userData.site_name
        }
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
            }) 
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
                <input type="text" value={changeConductivity} className='w-52 p-3 border rounded' />
                {/* <select name="ntp" id="ntp" className='w-52 p-3 border rounded' value={changeConductivity} onChange={(e) => setChangeConductivity(e.target.value)}>

                    <option value={changeConductivity}>{changeConductivity === "cnd" ? "Conductivity" : "TDS"}</option>

                </select> */}

                <p className='w-30 mx-3'>{cnd} uS</p>

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
                                    <Field disabled={!editSetting} value={spn} required onChange={(e) => setSpn(e.target.value)} type="number" name="spn" id="spn" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Span" />
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Trip Setpoint</p>
                                    <div>
                                        <Field disabled={!editSetting} type="number" required name="tsp" value={tsp} onChange={(e) => setTsp(e.target.value)} id="tsp" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Trip Setpoint" />

                                        <span className='mx-1'>uS</span>

                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Alert Setpoint</p>
                                    <div>
                                        <Field disabled={!editSetting} type="number" required name="asp" id="asp" value={asp} onChange={(e) => setAsp(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Alert Setpoint" />

                                        <span className='mx-1'>uS</span>

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