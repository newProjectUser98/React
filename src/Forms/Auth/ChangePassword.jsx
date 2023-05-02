import React, { useEffect, useState } from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from '../TextError'
import { useDispatch } from 'react-redux'
import { changepassword, getuser } from '../../store/Authentication/authSlice'
import { Grid } from '@material-ui/core'
import { Link, useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const validationSchema = Yup.object({
    password: Yup.string().required('Password is required')
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
    confirmpassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

const ChangePassword = () => {
    const [resData, setResData] = useState('')
    const [status, setStatus] = useState('')
    const [subStatus, setSubStatus] = useState('')
    const {id, token} = useParams()
    const [passwordType1, setPasswordType1] = useState("password");
    const [passwordType2, setPasswordType2] = useState("password");

    const dispatch = useDispatch()
    const onSubmit = (values, submitProps) => {
        
        values.id = id;
        values.token = token;
        dispatch(changepassword(values))
        .then((res)=>{
            setResData(res?.payload?.data)
            setSubStatus(res?.payload?.data?.Response?.Status)
            setStatus('')
        })
        .catch(err => {
            console.error(err);
        })
    }
    useEffect(()=>{
        const data ={
            id,
            token
        }
        dispatch(getuser(data))
        .then((res)=>{
            setResData(res?.payload?.data)
            setStatus(res?.payload?.data?.Response?.Status)
        })
        .catch(err =>{
            console.error(err);
        })
    },[id,token])
    const initialValues = {
        username: resData?.Data?.username,
        email: resData?.Data?.email,
        password: '',
        confirmpassword : ''
    }
    const togglePassword1 =()=>{
        if(passwordType1 ==="password")
        {
         setPasswordType1("text")
         return;
        }
        setPasswordType1("password")
    }
    const togglePassword2 =()=>{
        if(passwordType2 ==="password")
        {
         setPasswordType2("text")
         return;
        }
        setPasswordType2("password")
    }
    return (
        <>
        {
            status === 'success' ?
                <>
                    <p className='w-full text-center my-1'>
                        Hi {resData?.Data?.username}, <span className='font-bold'>{resData?.Data?.company_name}</span> has invited you to join their organization. Please set your new password</p>
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
                                                    <label htmlFor='username' className="block text-sm font-normal leading-5 text-gray-800">Name</label>
                                                    <Field disabled type='text' id='username' name='username' className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2 disabled:bg-white"/>
                                                </div>
                                                <div className="col-span-6">
                                                    <label htmlFor='email' className="block text-sm font-normal leading-5 text-gray-800">Email ID</label>
                                                    <Field disabled type='email' id='email' name='email' className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2 disabled:bg-white"/>
                                                </div>

                                                <div className="col-span-6">
                                                    <label htmlFor='password' className="block text-sm font-normal leading-5 text-gray-800">Password*</label>
                                                    <div className="flex items-center">
                                                        <Field type={passwordType1} id='password' name='password' placeholder="Password" className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"/>
                                                        <button onClick={togglePassword1} type='button'>
                                                        {
                                                            passwordType1 === 'password' ? <VisibilityOffIcon/> : <VisibilityIcon/>
                                                        }
                                                        </button>
                                                    </div>
                                                    <ErrorMessage name='password' component={TextError} />
                                                </div>
                                                <div className="col-span-6">
                                                    <label htmlFor='confirmpassword' className="block text-sm font-normal leading-5 text-gray-800">Confirm Password*</label>
                                                    <div className="flex items-center">
                                                        <Field type={passwordType2} id='confirmpassword' name='confirmpassword' placeholder="Confirm Password" className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"/>
                                                        <button onClick={togglePassword2} type='button'>
                                                        {
                                                            passwordType2 === 'password' ? <VisibilityOffIcon/> : <VisibilityIcon/>
                                                        }
                                                        </button>
                                                    </div>
                                                    <ErrorMessage name='confirmpassword' component={TextError} />
                                                </div>
                                            </div>
                                            <Grid container className='flex justify-center'>
                                                <Grid item sm={12} md={6} lg={5} className='w-full sm:w-50'>
                                                    <div className="w-full my-5">
                                                        <button type='submit' className='w-full text-white bg-primary-color py-2 rounded-xl px-5 text-base font-medium hover:bg-text-title' disabled={(formik?.isSubmitting && formik?.isValid)}>
                                                        {
                                                                (formik?.isSubmitting && formik?.isValid) ? 
                                                                    <CircularProgress size={15} thickness={6} sx={{color :"#f8f8f8"}}/>
                                                                :
                                                                    'Change Password'
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
            :
                resData?.message &&
                <div className= 'flex bg-gray-bg text-center my-10 flex-col p-5'>
                    <p className={status==='success' || subStatus === 'success' ? 'text-green-900 text-center w-full p-5 text-lg font-bold leading-6' : 'text-red-600 text-center w-full p-5 text-lg font-bold leading-6'}> {resData?.message}</p>
                    {
                        (status==='success' || subStatus === 'success') &&
                        <div className="">
                            <button className="px-5 bg-primary-color py-2 text-white rounded-lg hover:bg-text-title shadow-md">
                                <Link to="/">Login</Link>
                            </button>
                        </div>
                    }
                </div>
        }
        </>
    )
}

export default ChangePassword