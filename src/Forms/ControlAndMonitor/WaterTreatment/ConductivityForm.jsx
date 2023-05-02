import React, {useState} from 'react'
import { Field, Form, Formik } from 'formik'
import BorderColorIcon from '@mui/icons-material/BorderColor';


const ConductivityForm = () => {
    const [changeConductivity, setChangeConductivity] = useState('conductivity')
    const [editSetting, setEditSetting] = useState(false)


    const initialValues = {
        spn: 330,
        tsp: 500,
        asp: 700
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
        <div className="flex items-center py-3">
            <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
            <select name="ntp" id="ntp" className='w-52 p-3 border rounded' value={changeConductivity} onChange={(e)=> setChangeConductivity(e.target.value)}>
                <option value="conductivity">Conductivity</option>
                <option value="tds">TDS</option>
            </select>
            {
                changeConductivity === 'conductivity' ? 
                <p className='w-30 mx-3'>100.0 uS</p>
                :
                <p className='w-30 mx-3'>100.0ppm</p>
            }
        </div>
        <Formik initialValues={initialValues}>
            {
                (formik) => {
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
                                <p className='w-40 my-2'>Span</p>
                                <Field disabled={!editSetting} type="text" name="spn" id="spn" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Span" />
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Trip Setpoint</p>
                                <div>
                                    <Field disabled={!editSetting} type="text" name="tsp" id="tsp" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Trip Setpoint"/>
                                    {
                                        changeConductivity === 'conductivity' ? 
                                        <span className='mx-1'>uS</span>
                                        :
                                        <span className='mx-1'>ppm</span>
                                    }
                                </div>
                            </div>
                            <div className="flex items-center py-3 flex-wrap">
                                <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                <p className='w-40 my-2'>Alert Setpoint</p>
                                <div>
                                    <Field disabled={!editSetting} type="text" name="asp" id="asp" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Alert Setpoint"/>
                                    {
                                        changeConductivity === 'conductivity' ? 
                                        <span className='mx-1'>uS</span>
                                        :
                                        <span className='mx-1'>ppm</span>
                                    }
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