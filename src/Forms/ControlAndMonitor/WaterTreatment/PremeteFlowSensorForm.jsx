import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios';
import BackdropComp from '../../../hoc/Backdrop/Backdrop';
import { useNavigate } from 'react-router-dom';

const FeedFlowSensorForm = ({ intervalTime }) => {
    let localStorageData = JSON.parse(localStorage.getItem('localStorage_data_P_Flowsen'))

    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [ff2, setff2] = React.useState(localStorageData?.ff2);
    const [fr2, setfr2] = React.useState(localStorageData?.fr2);


    const navigate = useNavigate();
    let access_token = localStorage.getItem("access_token")
    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            let newData = {
                unit_type: "water_treatment",
                company_name: userData.company_name,
                componant_name: "P_flowsen",
                site_name: userData.site_name
            }
            axios.post("/topicapi/updated_treat_P_flowsen/", newData).then((resp) => {

                // Retrieve data from localStorage
                let localStorageData = JSON.parse(localStorage.getItem("localStorage_data_P_Flowsen"));

                // Check if localStorageData exists and has values
                if (!localStorageData) {
                    localStorageData = {};
                }

                // Update the variables with new values if they are not zero
                if (resp.data[0].data.data_sta.fr2 !== 0) {
                    localStorageData.fr2 = resp.data[0].data.data_sta.fr2;
                }

                if (resp.data[0].data.data_set.ff2 !== 0) {
                    localStorageData.ff2 = resp.data[0].data.data_set.ff2;
                }

                // Store the updated data in localStorage
                localStorage.setItem("localStorage_data_P_Flowsen", JSON.stringify(localStorageData));
                let updated_Time_state = localStorage.getItem("updated_time_P_flowsen_state")
                let updated_Time_settng = localStorage.getItem("updated_time_P_flowsen_settings")

                if (updated_Time_state != resp.data[0].data.data_sta.updated_at || updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                    if (resp.data[0].data.data_sta.fr2 != "") {
                        setfr2(resp.data[0].data.data_sta.fr2)
                    }
                    if (resp.data[0].data.data_set.ff2 != 0) {
                        setff2(resp.data[0].data.data_set.ff2)
                    }
                    setIsLoading(false);
                    if (updated_Time_state != resp.data[0].data.data_sta.updated_at) {
                        alert(`Device state of P_flowsen component is updated successfully`)
                    } else if (updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                        alert(`Device setting of P_flowsen component is updated successfully`)
                    }
                    localStorage.setItem('updated_time_P_flowsen_state', resp.data[0].data.data_sta.updated_at);
                    localStorage.setItem('updated_time_P_flowsen_settings', resp.data[0].data.data_set.updated_at);
                }
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

    const initialValues = {
        fr2: 3.0,
        ff2: " ",
    };

    const onSubmitSetting = (values, submitProps) => {
        const userData = JSON.parse(localStorage.getItem('user'));

        let newData = {
            company_name: userData.company_name,
            unit_type: "water_treatment",
            componant_name: "P_flowsen",
            ff2: ff2,
            site_name: userData.site_name
        };

        setTimeout(() => {
            axios.post('/topicapi/P_flowsen_setting/', newData, {
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
            <Formik initialValues={initialValues} onSubmit={onSubmitSetting}>
                {
                    (formik) => {
                        return (
                            <Form autoComplete='off'>
                                <div className="flex items-center mt-5 mx-2">
                                    <p className='w-40 my-2 font-bold'>State Variables</p>
                                </div>
                                <div className="flex items-center py-3">
                                    <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40'>Flow Rate</p>
                                    <p className=''>{fr2}</p>
                                    <span className='mx-1'>m3/hr</span>
                                </div>
                                <div className="flex items-center mt-5 mx-2">
                                    <p className='w-40 my-2 font-bold'>Setting Variables</p>
                                    <div className="flex items-center justify-center cursor-pointer rounded-full bg-primary-color hover:bg-text-title w-8 h-8 mx-2 hover:text-white">
                                        <BorderColorIcon fontSize='small' onClick={() => setEditSetting(!editSetting)} />
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Flow Factor</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="ff" id="ff" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Flow Factor" value={ff2} onChange={(e) => setff2(e.target.value)} />
                                        <span className='mx-2 my-2'>ml/pulse</span>
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

export default FeedFlowSensorForm