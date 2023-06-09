import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios';
import BackdropComp from '../../../hoc/Backdrop/Backdrop';
import { useNavigate } from 'react-router-dom';


const Tap4Form = ({ intervalTime }) => {
    let localStorageData = JSON.parse(localStorage.getItem('localStorage_data_tap4'))

    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [p1, setP1] = React.useState(localStorageData?.p1);
    const [p2, setP2] = React.useState(localStorageData?.p2);
    const [p3, setP3] = React.useState(localStorageData?.p3);
    const [p4, setP4] = React.useState(localStorageData?.p4);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            let newData = {
                unit_type: "water_dispense",
                company_name: userData.company_name,
                componant_name: "tap4",
                site_name: userData.site_name
            }
            axios.post("/topicapi/updated_disp_tap4/", newData).then((resp) => {


                // Retrieve data from localStorage
                let localStorageDataTap4 = JSON.parse(localStorage.getItem("localStorage_data_tap4"));

                // Check if localStorageDataTap4 exists and has values
                if (!localStorageDataTap4) {
                    localStorageDataTap4 = {};
                }

                // Update the variables with new values if they are not zero
                if (resp.data[0].data.data_set.p1 !== 0) {
                    localStorageDataTap4.p1 = resp.data[0].data.data_set.p1;
                }

                if (resp.data[0].data.data_set.p2 !== 0) {
                    localStorageDataTap4.p2 = resp.data[0].data.data_set.p2;
                }

                if (resp.data[0].data.data_set.p3 !== 0) {
                    localStorageDataTap4.p3 = resp.data[0].data.data_set.p3;
                }

                if (resp.data[0].data.data_set.p4 !== 0) {
                    localStorageDataTap4.p4 = resp.data[0].data.data_set.p4;
                }

                // Store the updated data in localStorage
                localStorage.setItem("localStorage_data_tap4", JSON.stringify(localStorageDataTap4));
                let updated_Time_settng = localStorage.getItem("updated_time_tap4_settings")

                if (updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                    if (resp.data[0].data.data_set.p1 != 0) {
                        setP1(resp.data[0].data.data_set.p1)
                    }
                    if (resp.data[0].data.data_set.p2 != 0) {
                        setP2(resp.data[0].data.data_set.p2)
                    }
                    if (resp.data[0].data.data_set.p3 != 0) {
                        setP3(resp.data[0].data.data_set.p3)
                    }
                    if (resp.data[0].data.data_set.p4 != 0) {
                        setP4(resp.data[0].data.data_set.p4)
                    }
                    setIsLoading(false);

                    alert("Device Setting Data Updated Successfully")

                }
                localStorage.setItem('updated_time_tap4_settings', resp.data[0].data.data_set.updated_at);
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
        p1: "",
        p2: "",
        p3: "",
        p4: "",
    };

    const onSubmitSetting = (values, submitProps) => {
        const userData = JSON.parse(localStorage.getItem('user'));

        let access_token = localStorage.getItem("access_token")

        let newData = {
            company_name: userData.company_name,
            unit_type: "water_dispense",
            componant_name: "tap4",
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4,
            site_name: userData.site_name
        };

        setTimeout(() => {
            axios.post('/topicapi/tap4_setting/', newData, {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                }
            }).then((res) => {
                console.log("res in tap4 get", res.data);
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

            });
        }, 3000);

    }

    return (
        <>
            {isLoading &&
                <BackdropComp open={open} />
            }

            <Formik initialValues={initialValues} onSubmit={onSubmitSetting}>
                {
                    (formik) => {
                        return (
                            <Form autoComplete='off'>
                                <div className="flex items-center w-full mb-5 flex-wrap justify-center">
                                    <div className="flex items-center m-2 ">
                                        <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                        <span>Setting variable</span>
                                    </div>
                                </div>
                                <div className="flex items-center mt-5 mx-2">
                                    <p className='w-40 my-2 font-bold'>Setting Variables</p>
                                    <div className="flex items-center justify-center cursor-pointer rounded-full bg-primary-color hover:bg-text-title w-8 h-8 mx-2 hover:text-white">
                                        <BorderColorIcon fontSize='small' onClick={() => setEditSetting(!editSetting)} />
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Pulse1</p>
                                    <Field disabled={!editSetting} type="text" name="p1" id="p1" value={p1} onChange={(e) => setP1(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Pulse1" />
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Pulse2</p>
                                    <Field disabled={!editSetting} type="text" name="p2" id="p2" value={p2} onChange={(e) => setP2(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Pulse2" />
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Pulse3</p>
                                    <Field disabled={!editSetting} type="text" name="p3" id="p3" value={p3} onChange={(e) => setP3(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Pulse3" />
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Pulse4</p>
                                    <Field disabled={!editSetting} type="text" name="p4" id="p4" value={p4} onChange={(e) => setP4(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Pulse4" />
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

export default Tap4Form