import { Switch } from '@material-ui/core';
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';

const HppForm = () => {
    const [statusVal, setStatusVal] = useState(false)
    const [editState, setEditState] = useState(false)
    const [editSetting, setEditSetting] = useState(false)
    const initialValuesState = {
        sts: '',
        crt: "",
    };
    const initialValuesSetting = {
        olc:12.5,
        drc: 1.5,
        span: 3300,
    };
    const onSubmitState = (values, submitProps) => {
        console.log('values => ',values);
    }
    const onSubmitSetting = (values, submitProps) => {
        console.log('values2 => ',values);

    }
  return (
    <>
        <div className="flex items-center w-full mb-5 flex-wrap justify-center">
            <div className="flex items-center m-2 ">
                <div className="rounded-full bg-yellow-300 w-3 h-3 mx-2"></div>
                <span>Dynamic state variables</span>
            </div>
            <div className="flex items-center m-2 ">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div> 
                <span>State variables</span>
            </div>
            <div className="flex items-center m-2 ">
                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                <span>Setting variable</span>
            </div>
        </div>
        <Formik 
        initialValues={initialValuesState}
        onSubmit={onSubmitState}
        >
            {
                (formik)=>{
                    return(
                        <Form autoComplete='off'>
                            <div className="flex items-center mt-5 mx-2">
                                <p className='w-40 my-2 font-bold'>State Variables</p>
                                <div className="flex items-center justify-center cursor-pointer rounded-full bg-primary-color hover:bg-text-title w-8 h-8 mx-2 hover:text-white">
                                    <BorderColorIcon fontSize='small' onClick={ ()=> setEditState(!editState)} />
                                </div>
                            </div>
                            <div className="flex items-center py-3">
                                <div className="rounded-full bg-yellow-300 w-3 h-3 mx-2"></div>
                                <p className='w-40'>Status</p>
                                <p className='w-30 mx-2'>{statusVal? 'ON' : 'OFF'}</p>
                                <div className='w-30'>
                                    <Switch name='sts' disabled={!editState} value={statusVal} checked={statusVal} onChange={(e)=> setStatusVal(e.target.checked)} color='primary'/>
                                </div>
                            </div>
                            <div className="flex items-center py-3">
                                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                                <p className='w-40'>Current</p>
                                <p className='w-40'>10.5A</p>
                            </div>
                            {
                                editState &&
                                    <button type="submit" className='mx-2 px-5 bg-primary-color py-2 text-white flex items-center justify-center rounded-lg hover:bg-text-title shadow-md'>Submit</button>
                            }
                        </Form>                
                    )
                }
            }
        </Formik>
        <Formik 
        initialValues={initialValuesSetting}
        onSubmit={onSubmitSetting}
        //validationSchema={validationSchemaSetting}
        >
            {
                (formik)=>{
                    return(
                        <Form autoComplete='off'>
                            <div className="flex items-center mt-5 mx-2">
                                <p className='w-40 my-2 font-bold'>Setting Variables</p>
                                <div className="flex items-center justify-center cursor-pointer rounded-full bg-primary-color hover:bg-text-title w-8 h-8 mx-2 hover:text-white">
                                    <BorderColorIcon fontSize='small' onClick={ ()=> setEditSetting(!editSetting)} />
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Over Load Current</p>
                                <div>
                                    <Field disabled={!editSetting} type="text" name="olc" id="olc" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Over Load Current"/>
                                    <span className='mx-5 my-2'>Ampere</span>
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Dry Run Current</p>
                                <div>
                                    <Field disabled={!editSetting} type="text" name="drc" id="drc" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Dry Run Current"/>
                                    <span className='mx-5 my-2'>Ampere</span>
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Span</p>
                                <Field disabled={!editSetting} type="text" name="span" id="span" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Span" />
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

export default HppForm