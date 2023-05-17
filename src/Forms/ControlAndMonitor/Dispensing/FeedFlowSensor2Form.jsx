import { Form, Formik } from 'formik'
import React from 'react'

const FeedFlowSensor2Form = () => {

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
                                    <p className=''>0.54</p>
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

export default FeedFlowSensor2Form