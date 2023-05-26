import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios';
import BackdropComp from '../../../hoc/Backdrop/Backdrop';
import { useNavigate } from 'react-router-dom';

const FeedFlowSensorForm = ({ intervalTime }) => {
    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [ff2, setff2] = React.useState("");
    const [fr2, setfr2] = React.useState("");


    const navigate = useNavigate();
    let access_token = localStorage.getItem("access_token")
    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            let newData = {
                unit_type: "water_treatment",
                company_name: userData.company_name,
                componant_name: "P_flowsen"
            }
            axios.post("/topicapi/updated_treat_P_flowsen/", newData).then((resp) => {
                console.log("resp in treat_P_flowsen", resp.data[0].data);
                if (resp.data[0].data.message_type === "updsta") {
                    setfr2(resp.data[0].data.fr2)
                } else if (resp.data[0].data.message_type === "updset") {
                    setff2(resp.data[0].data.ff2)
                }
                let updated_Time = localStorage.getItem("updated_time_P_flowsen")
                    if (updated_Time != resp.data[0].data.updated_at) {
                        setIsLoading(false);
                        alert("Device Setting Updated Successfully")
                    }
                localStorage.setItem('updated_time_P_flowsen', resp.data[0].data.updated_at);
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
            componant_name: "P_flowsen"
        };
        console.log("newData", newData);

        axios.post("/topicapi/get_device_id/", newData)
            .then((resp) => {
                console.log("resp in treat_P_flowsen set device id", resp.data[0].data.Device_id);

                let newData = {
                    company_name: userData.company_name,
                    unit_type: "water_treatment",
                    componant_name: "P_flowsen",
                    ff: ff2,
                    device_id: resp?.data[0]?.data?.Device_id
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