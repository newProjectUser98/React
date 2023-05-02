import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import * as Yup from "yup";

const PremeteFlowSensorForm = () => {
    const [editSetting, setEditSetting] = useState(false)

    const initialValues = {
        flowrate: '',
        ff1: "003.00",
      };
  return (
    <>
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
        <Formik initialValues={initialValues}>
            {
                (formik) => {
                    return(
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
                            <div className="flex items-center mt-5 mx-2">
                                <p className='w-40 my-2 font-bold'>Setting Variables</p>
                                <div className="flex items-center justify-center cursor-pointer rounded-full bg-primary-color hover:bg-text-title w-8 h-8 mx-2 hover:text-white">
                                    <BorderColorIcon fontSize='small' onClick={ ()=> setEditSetting(!editSetting)} />
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Flow Factor</p>
                                <div>
                                    <Field disabled={!editSetting} type="text" name="ff1" id="ff1" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Flow Factor"/>
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

export default PremeteFlowSensorForm