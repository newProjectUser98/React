import axios from 'axios';
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

const FeedFlowSensor1Form = ({ intervalTime }) => {
    let localStorageData = JSON.parse(localStorage.getItem('localStorage_data'))
    let updated_Time_state = localStorage.getItem("updated_time_flowsen1_state")
    localStorage.setItem("component_Name", "flowsen1");
    useEffect(() => {
        let component_Name = localStorage.getItem("component_Name")
        if (component_Name != "flowsen1") {
            localStorage.removeItem("localStorage_data")
        }
    }, [])
    const [fr, setFr] = useState(localStorageData.fr)
    
    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            let newData = {
                unit_type: "water_dispense",
                company_name: userData.company_name,
                componant_name: "flowsen1"
            }
            axios.post("/topicapi/updated_disp_flowsen1/", newData).then((resp) => {
                if (fr === undefined) {
                    let localStorage_data = {
                        fr: resp.data[0].data.data_sta.fr,
                    }
                    localStorage.setItem("localStorage_data", JSON.stringify(localStorage_data));
                }
                console.log("resp in flowsen1", resp.data[0].data);
                if (updated_Time_state != resp.data[0].data.data_sta.updated_at) {
                    setFr(resp.data[0].data.data_sta.fr)
                    alert("Device Setting Updated Successfully")
                }
                localStorage.setItem('updated_time_flowsen1_state', resp.data[0].data.data_sta.updated_at);
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
        flowrate: '',
        ff: "003.00",
    };

    return (
        <>
            <div className="flex items-center w-full mb-5 flex-wrap justify-center">
                <div className="flex items-center m-2 ">
                    <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                    <span>State variables</span>
                </div>
            </div>
            <Formik initialValues={initialValues} >
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
                                    <p className=''>{fr}</p>
                                    <span className='mx-1'>m3/hr</span>
                                </div>

                            </Form>
                        )
                    }
                }
            </Formik>
        </>
    )
}

export default FeedFlowSensor1Form