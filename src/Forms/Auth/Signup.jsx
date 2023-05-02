import { Form, Formik, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import TextError from '../TextError'
import { Grid } from '@material-ui/core'
//import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signup } from '../../store/Authentication/authSlice'
import { CircularProgress } from '@mui/material'


const initialValues = {
    username: '',
    phone: '',
    email: '',
    company: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    gstno: ''
}
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
const validationSchema = Yup.object({
    username: Yup.string().required('Name is required').matches(/^(?!\s+$).*/, 'This field cannot contain only blankspaces'),
    phone: Yup.string()
    // .required("Contact Number is required")
    .matches(phoneRegExp, "Contact number is not valid").min(10,"Invalid contact number").max(10,"Invalid contact number"),
    email: Yup.string()
    //.required('Email Address is required')
    .email('Please enter your valid Email Address'),
    company: Yup.string().required('Company Name is required').matches(/^(?!\s+$).*/, 'This field cannot contain only blankspaces'),
    address1: Yup.string().required('Address is required').matches(/^(?!\s+$).*/, 'This field cannot contain only blankspaces'),
    city: Yup.string().required('City is required').matches(/^(?!\s+$).*/, 'This field cannot contain only blankspaces'),
    state: Yup.string().required('State is required').matches(/^(?!\s+$).*/, 'This field cannot contain only blankspaces'),
    pincode: Yup.string().required('Pincode is required').matches(/^(?!\s+$).*/, 'This field cannot contain only blankspaces'),
    gstno: Yup.string().min(15,"Please enter valid GST number").max(15,"Please enter valid GST number")
})
const Signup = () => {
    const [resData, setResData] = useState('')
    const [status, setStatus] = useState('')
    const dispatch = useDispatch()
    const onSubmit = (values, submitProps) => {
        dispatch(signup(values))
        .then((res)=>{
            setResData(res?.payload?.data)
            setStatus(res?.payload?.data?.Response?.Status)
        })
        .catch(err=>{
            console.error(err);
        })
    }
    return (
        <div>
            {
                resData ? 
                <div className= 'flex bg-gray-bg text-center my-10'>
                    <p className={status==='success' ? 'text-green-900 text-center w-full p-5 text-lg font-bold leading-6' : 'text-red-600 text-center w-full p-5 text-lg font-bold leading-6'}> {resData?.message}</p>
                </div>
                :
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
                                <Form autoComplete='off'>
                                    <div className="bg-whites my-5">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6">
                                                <label htmlFor='username' className="block text-sm font-normal leading-5 text-gray-800">Name*</label>
                                                <Field type='text' id='username' name='username' placeholder="Enter Your Name" className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"/>
                                                <ErrorMessage name='username' component={TextError} />
                                            </div>

                                            <div className="col-span-6">
                                                <label htmlFor='phone' className="block text-sm font-normal leading-5 text-gray-800">Contact Number</label>
                                                <Field type='text' id='phone' name='phone' placeholder="Enter Your Number" className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"/>
                                                <ErrorMessage name='phone' component={TextError} />
                                            </div>
                                            
                                            <div className="col-span-6">
                                                <label htmlFor='email' className="block text-sm font-normal leading-5 text-gray-800">Email Address</label>
                                                <Field type='email' id='email' name='email' placeholder="Enter Your Email ID" className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"/>
                                                <ErrorMessage name='email' component={TextError} />
                                            </div>
                                            <div className="col-span-6">
                                                <label htmlFor='company' className="block text-sm font-normal leading-5 text-gray-800">Company Name*</label>
                                                <Field type='text' id='company' name='company' placeholder="Enter Your Company Name" className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"/>
                                                <ErrorMessage name='company' component={TextError} />
                                            </div>
                                            
                                            <div className="col-span-6">
                                                <label htmlFor='address1' className="block text-sm font-normal leading-5 text-gray-800">Address1*</label>
                                                <Field type='text' id='address1' name='address1' placeholder="Enter Your Address1" className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"/>
                                                <ErrorMessage name='address1' component={TextError} />
                                            </div>
                                            <div className="col-span-6 md:col-span-3">
                                                <label htmlFor='address2' className="block text-sm font-normal leading-5 text-gray-800">Address2</label>
                                                <Field type='text' id='address2' name='address2' placeholder="Enter Your Address2" className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"/>
                                            </div>
                                            <div className="col-span-6 md:col-span-3">
                                                <label htmlFor='city' className="block text-sm font-normal leading-5 text-gray-800">City*</label>
                                                <Field type='text' id='city' name='city' placeholder="Enter Your City" className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"/>
                                                <ErrorMessage name='city' component={TextError} />
                                            </div>
                                            <div className="col-span-6 md:col-span-3">
                                                <label htmlFor='state' className="block text-sm font-normal leading-5 text-gray-800">State*</label>
                                                <Field type='text' id='state' name='state' placeholder="Enter Your State" className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"/>
                                                <ErrorMessage name='state' component={TextError} />
                                            </div>
                                            <div className="col-span-6 md:col-span-3">
                                                <label htmlFor='pincode' className="block text-sm font-normal leading-5 text-gray-800">Pincode*</label>
                                                <Field type='text' id='pincode' name='pincode' placeholder="Enter Your Pincode" className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"/>
                                                <ErrorMessage name='pincode' component={TextError} />
                                            </div>
                                            
                                            <div className="col-span-6">
                                                <label htmlFor='gstno' className="block text-sm font-normal leading-5 text-gray-800">GST No</label>
                                                <Field type='text' id='gstno' name='gstno' placeholder="Enter GST No" className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"/>
                                                <ErrorMessage name='gstno' component={TextError} />
                                            </div>
                                        </div>
                                        <Grid container className='flex justify-center mt-5'>
                                            <Grid item sm={12} md={4} className='w-full sm:w-50'>
                                                <div className="w-full my-5">
                                                    <button type='submit' className='w-full text-white bg-primary-color py-3 rounded-xl px-5 text-base font-medium hover:bg-text-title flex items-center justify-center' disabled={(formik?.isSubmitting && formik?.isValid)}>
                                                        {
                                                            (formik?.isSubmitting && formik?.isValid) ? 
                                                                <CircularProgress size={15} thickness={6} sx={{color :"#f8f8f8"}}/>
                                                            :
                                                                'Sign up'
                                                        }
                                                    </button>
                                                </div>
                                            </Grid>
                                            {/* <Grid item sm={12}className='w-full'>
                                                <div className="col-span-6 flex justify-center text-sm font-normal leading-5">
                                                    <p>Existing User? <Link to="/" className='text-primary-color'>Login</Link></p>
                                                </div>
                                            </Grid> */}
                                        </Grid>
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
            }
            
        </div>
    )
}

export default Signup