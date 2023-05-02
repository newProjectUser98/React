import { Form, Formik, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import TextError from '../TextError'
import { Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { forgotpassword } from '../../store/Authentication/authSlice'
import { CircularProgress } from '@mui/material'


const initialValues = {
    username: '',
    email: ''
}
const validationSchema = Yup.object({
    username: Yup.string().required('Name is required').matches(/^(?!\s+$).*/, 'This field cannot contain only blankspaces'),
    email: Yup.string().required('Email ID is required').email('Please enter your valid Email ID').matches(/^(?!\s+$).*/, 'This field cannot contain only blankspaces')
})

const ForgotPassword = () => {
    const [resData, setResData] = useState('')
    const [status, setStatus] = useState('')
    const dispatch = useDispatch()
    const onSubmit = (values, submitProps) => {
        setResData('')
        setStatus('')
        dispatch(forgotpassword(values))
        .then((res)=>{
            setResData(res?.payload?.data)
            setStatus(res?.payload?.data?.Response?.Status)
            submitProps.resetForm()
        })
        .catch(err=>{
            console.error(err);
        })
    }
    return (
        <>
            {
                resData?.message &&
                <div className= 'flex bg-gray-bg text-center my-10'>
                    <p className={status==='success' ? 'text-green-900 text-center w-full p-5 text-lg font-bold leading-6' : 'text-red-600 text-center w-full p-5 text-lg font-bold leading-6'}> {resData?.message}</p>
                </div>
            }
            <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize
                    validateOnChange={false}
                    validateOnBlur={false}
            >
                {
                    formik =>{
                        return(
                            <Form autoComplete='off' className='py-5'>
                                <div className="bg-whites my-5">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6">
                                            <label htmlFor='username' className="block text-sm font-normal leading-5 text-gray-800">Name</label>
                                            <Field  type='text' id='username' name='username' className="leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2 "/>
                                            <ErrorMessage name='username' component={TextError} />
                                        </div>
                                        <div className="col-span-6">
                                            <label htmlFor='email' className="block text-sm font-normal leading-5 text-gray-800">Email ID</label>
                                            <Field  type='email' id='email' name='email' className="leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2 "/>
                                            <ErrorMessage name='email' component={TextError} />
                                        </div>
                                    </div>
                                    <Grid container className='flex justify-center'>
                                        <Grid item sm={12} md={4} className='w-full sm:w-50'>
                                            <div className="w-full my-5">
                                                <button type='submit' className='w-full text-white bg-primary-color py-2 rounded-xl px-5 text-base font-medium hover:bg-text-title' disabled={(formik?.isSubmitting && formik?.isValid)}>
                                                {
                                                        (formik?.isSubmitting && formik?.isValid) ? 
                                                            <CircularProgress size={15} thickness={6} sx={{color :"#f8f8f8"}}/>
                                                        :
                                                            'Submit'
                                                }</button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>

            
        </>
    )
}

export default ForgotPassword