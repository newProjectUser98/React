import axios from 'axios';
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

const FeedFlowSensor4Form = ({intervalTime}) => {
    const [fr, setFr] = useState("")
    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            let newData = {
                unit_type: "water_dispense",
                company_name: userData.company_name,
                componant_name: "flowsen4"
            }
            axios.post("/topicapi/updated_treat_P_flowsen/", newData).then((resp) => {
                console.log("resp in treat_P_flowsen", resp.data[0].data);
                if (resp.data[0].data.message_type === "updsta") {
                    setFr(resp.data[0].data.fr)
                }
                localStorage.setItem('updated_time', resp.data[0].data.updated_at);
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
            <Formik initialValues={initialValues}>
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

export default FeedFlowSensor4Form