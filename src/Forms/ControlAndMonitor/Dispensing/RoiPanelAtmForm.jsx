import { Field, Form, Formik } from 'formik';
import React, {useState} from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';

const RoiPanelAtmForm = () => {
    const [editSetting, setEditSetting] = useState(false)

    const initialValues = {
        ntp: '',
        ntv: '',
        vl1: 100,
        vl2: 100,
        vl3: 100,
        vl4: 100,
        re1: 100,
        re2: 100,
        re3: 100,
        re4: 100,
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
        <div className="flex items-center mt-5 mx-2">
            <p className='w-40 my-2 font-bold'>State Variables</p>
        </div>
        <div className="flex items-center py-3 flex-wrap">
            <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
            <p className='w-40 my-2'>Status</p>
            <select name="sts" id="sts" className='my-2 w-52 px-5 py-2 border rounded'>
                <option value="nml">Normal</option>
                <option value="tke">tank_empty</option>
                <option value="tpl">Tap_Low</option>
                <option value="nof">noflow</option>
                <option value="tpd">tempared</option>
            </select>
        </div>
        <div className="flex items-center py-3 flex-wrap">
            <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
            <p className='w-40 my-2'>New Dispense Volume</p>
            <p className='w-30 my-2'>11234500 m3/hr</p>
            {/* <div>
                <Field type="text" name="ndv" id="ndv" className="p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="New Dispense Volume"/>
                <span className='mx-5'>m3/hr</span>
            </div> */}
        </div>
        <div className="flex items-center py-3 flex-wrap">
            <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
            <p className='w-40 my-2'>New Transaction Type</p>
            <select name="ntt" id="ntt" className='my-2 w-52 px-5 py-2 border rounded'>
                <option value="cn">Coin</option>
                <option value="cd">Card</option>
                <option value="qr">QR</option>
            </select>
        </div>
        <div className="flex items-center py-3 flex-wrap">
            <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
            <p className='w-40 my-2'>New Transaction Amount</p>
            <p className='w-30 my-2'>Rs: 27682320</p>
        </div>
        <div className="flex items-center py-3 flex-wrap">
            <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
            <p className='w-40'>Water tempreture</p>
            <p className=''>21.0</p>
            <span className='mx-1'>&deg;C</span>
        </div>
        <Formik initialValues={initialValues}>
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
                                <p className='w-40 my-2'>No. Of Tap</p>
                                <Field as="select" disabled={!editSetting} name="ntp" className='w-52 my-2 p-2 border rounded'>
                                    <option value="" disabled>Please Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Field>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>No. Of Volume</p>
                                <Field as="select" disabled={!editSetting} name="ntv" className='w-52 my-2 p-2 border rounded'>
                                    <option value="" disabled>Please Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Field>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Volume1</p>
                                <div>
                                    <Field disabled={!editSetting} type="text" name="vl1" id="vl1" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Volume1"/>
                                    <span className='mx-3'>m3/hr</span>
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Volume2</p>
                                <div>
                                    <Field disabled={!editSetting} type="text" name="vl2" id="vl2" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Volume2"/>
                                    <span className='mx-3'>m3/hr</span>
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Volume3</p>
                                <div>
                                    <Field disabled={!editSetting} type="text" name="vl3" id="vl3" className="p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Volume3"/>
                                    <span className='mx-3'>m3/hr</span>
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40'>Volume4</p>
                                <div>
                                    <Field disabled={!editSetting} type="text" name="vl4" id="vl4" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Volume4"/>
                                    <span className='mx-3'>m3/hr</span>
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Rate1</p>
                                <div>
                                    <span className='mx-3'>Rs</span>
                                    <Field disabled={!editSetting} type="text" name="re1" id="re1" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rate1" />
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Rate2</p>
                                <div>
                                    <span className='mx-3'>Rs</span>
                                    <Field disabled={!editSetting} type="text" name="re2" id="re2" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rate2" />
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Rate3</p>
                                <div>
                                    <span className='mx-3'>Rs</span>
                                    <Field disabled={!editSetting} type="text" name="re3" id="re3" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rate3" />
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Rate4</p>
                                <div>
                                    <span className='mx-3'>Rs</span>
                                    <Field disabled={!editSetting} type="text" name="re4" id="re4" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rate4" />
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

export default RoiPanelAtmForm