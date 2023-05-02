import React, {useState} from 'react'
import { Field, Form, Formik } from 'formik';
import BorderColorIcon from '@mui/icons-material/BorderColor';


const FeedFlowSensor2Form = () => {
    const [editSetting, setEditSetting] = useState(false)

    const initialValues = {
        p1:123456,
        p2:123456,
        p3:123456,
        p4:123456,
      };
  return (
    <Formik initialValues={initialValues}>
        {
            (formik)=>{
                return(
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
                                <BorderColorIcon fontSize='small' onClick={ ()=> setEditSetting(!editSetting)} />
                            </div>
                        </div>
                        <div className="flex items-center py-3 flex-wrap">
                            <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                            <p className='w-40 my-2'>Pulse1</p>
                            <Field disabled={!editSetting} type="text" name="p1" id="p1" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Pulse1"/>
                        </div>
                        <div className="flex items-center py-3 flex-wrap">
                            <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                            <p className='w-40 my-2'>Pulse2</p>
                            <Field disabled={!editSetting} type="text" name="p2" id="p2" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Pulse2"/>
                        </div>
                        <div className="flex items-center py-3 flex-wrap">
                            <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                            <p className='w-40 my-2'>Pulse3</p>
                            <Field disabled={!editSetting} type="text" name="p3" id="p3" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Pulse3"/>
                        </div>
                        <div className="flex items-center py-3 flex-wrap">
                            <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                            <p className='w-40 my-2'>Pulse4</p>
                            <Field disabled={!editSetting} type="text" name="p4" id="p4" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Pulse4"/>
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
  )
}

export default FeedFlowSensor2Form