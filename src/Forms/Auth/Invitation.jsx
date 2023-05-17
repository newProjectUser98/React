import React, { useState } from 'react'
import {useParams } from 'react-router-dom'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getuser, userinvitation, userotpverify } from '../../store/Authentication/authSlice'
import { CircularProgress } from '@mui/material'
import TextError from '../TextError'
//import ChangePassword from './ChangePassword'
import SnackBar from '../../hoc/SnackBarAlert/SnackBar'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const otpRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const initialValues = {
    otpnumber: ''
}
const validationSchema = Yup.object({
    otpnumber: Yup.string().required('OTP is required').matches(otpRegExp, 'OTP is not valid')
})

const Invitation = () => {
    const {id, token} = useParams()
    const [responseData, setResponseData] = useState("");
    const [status, setStatus] = useState('')
    const [resData, setResData] = useState('')
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [spinner1, setSpinner1] = useState(false);
    const [spinner2, setSpinner2] = useState(false);
    const [accept, setAccept] = useState(false);
    const [reject, setReject] = useState(false);
    //const [changePass, setChangePass] = useState(false);
    const [otpResponse, setOtpResponse] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (invitation,spinner) => {
        setSpinner(true)
        spinner === 'spinner1' ? setSpinner1(true) : setSpinner2(true)
        const values = {
            invitation,
            id,
            token
        }
        dispatch(userinvitation(values))
        .then((res)=>{
            setResponseData(res?.payload?.data);
            setOpenSnackbar(true);
            setSpinner(false);
            if(res?.payload?.data?.Response?.Status === 'success'){
                setTimeout(()=>{
                    setAccept(true)
                },2000)
            }
            if(invitation === 'reject'){
                setReject(true)
            }
            setSpinner(false)
        })
        .catch(err=>{
            console.error(err);
        })
    }
    const verifyOtp = (values) =>{
        setSpinner(true)
        setResponseData('');
        setOpenSnackbar(false);
        values.id = id;
        values.token = token;
        dispatch(userotpverify(values))
        .then((res)=>{
            setOtpResponse(res?.payload?.data);
            setStatus(res?.payload?.data?.Response?.Status)
            setOpenSnackbar(true);
            // if(res?.payload?.data?.Response?.Status === 'success'){
            //     setTimeout(()=>{
            //         setChangePass(true)
            //     },2000)
            // }
            setSpinner(false)
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
    },
    // eslint-disable-next-line
    [id,token])
    return (
        <>
            {
                !otpResponse?
                    status === 'success' ? 
                        !reject ?
                            //!changePass ?
                                !accept ?
                                    <>
                                        <p className="font-semibold text-3xl leading-5 my-8 text-center w-full">Invitation</p>
                                        <div className="bg-gray-bg w-full p-5">
                                            <Grid container className='flex justify-center' spacing={4}>
                                                <Grid item sm={12} className='w-full'>
                                                    <p className='w-full text-center my-1'>
                                                        Hi {resData?.Data?.username}, <span className='font-bold'>{resData?.Data?.company_name}</span> has invited you to join their organization.</p>
                                                    <p className='w-full text-center my-1'>Do you want to accept the invitation?</p>
                                                </Grid>
                                                <Grid item sm={12} md={4} className='w-full sm:w-50'>
                                                    <div className="w-full my-5">
                                                        <button type='submit' className='w-full text-white bg-primary-color py-2 rounded-xl px-5 text-base font-medium hover:bg-text-title' onClick={()=> onSubmit('accept','spinner1')} disabled={spinner}>
                                                            {
                                                                spinner1 ? 
                                                                    <CircularProgress size={15} thickness={6} sx={{color :"#f8f8f8"}}/>
                                                                :
                                                                    'Accept'
                                                            }
                                                        </button>
                                                    </div>
                                                </Grid>
                                                <Grid item sm={12} md={4} className='w-full sm:w-50'>
                                                    <div className="w-full my-5">
                                                        <button type='submit' className='w-full text-white bg-primary-color py-2 rounded-xl px-5 text-base font-medium hover:bg-text-title' onClick={()=> onSubmit('reject','spinner2')} disabled={spinner}>
                                                            {
                                                                spinner2 ? 
                                                                    <CircularProgress size={15} thickness={6} sx={{color :"#f8f8f8"}}/>
                                                                :
                                                                    'Reject'
                                                            }
                                                        </button>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </>
                                :
                                    <>
                                        <p className="font-semibold text-3xl leading-5 my-8">Verify OTP</p>
                                        <div className="bg-gray-bg w-full p-5">
                                            <Formik
                                                initialValues={initialValues}
                                                validationSchema={validationSchema}
                                                onSubmit={verifyOtp}
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
                                                                            <label htmlFor='otpnumber' className="block text-sm font-normal leading-5 text-gray-800">OTP*</label>
                                                                            <Field type='text' id='otpnumber' name='otpnumber' placeholder="Enter Your OTP" className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"/>
                                                                            <ErrorMessage name='otpnumber' component={TextError} />
                                                                        </div>
                                                                    </div>
                                                                    <Grid container className='flex justify-center'>
                                                                        <Grid item sm={12} md={4} className='w-full sm:w-50'>
                                                                            <div className="w-full my-5">
                                                                                <button type='submit' className='w-full text-white bg-primary-color py-2 rounded-xl px-5 text-base font-medium hover:bg-text-title' disabled={spinner}>
                                                                                    {
                                                                                        (spinner) ? 
                                                                                            <CircularProgress size={15} thickness={6} sx={{color :"#f8f8f8"}}/>
                                                                                        :
                                                                                            'Verify OTP'
                                                                                    }
                                                                                </button>
                                                                            </div>
                                                                        </Grid>
                                                                    </Grid>
                                                                </div>
                                                            </Form>
                                                        )
                                                    }
                                                }
                                            </Formik>
                                        </div>
                                    </>
                        
                            // :
                            //     <div className="bg-gray-bg w-full p-5">
                            //         <p className="font-semibold text-3xl leading-5 my-8">Change Password</p>
                            //         <ChangePassword/>
                            //     </div>
                        :
                        null
                    :
                        resData?.message &&
                        <div className= 'flex bg-gray-bg text-center my-10 flex-col p-5 w-full'>
                            <p className={status==='success' ? 'text-green-900 text-center w-full p-5 text-lg font-bold leading-6' : 'text-red-600 text-center w-full p-5 text-lg font-bold leading-6'}> {resData?.message}</p>
                        </div>
                    :
                null
            }
            {responseData && (
                <SnackBar
                snackbar={openSnackbar}
                status={responseData?.Response?.Status}
                message={responseData?.message}
                />
            )}
            {
                otpResponse?.message &&
                <div className= 'flex bg-gray-bg text-center my-10 flex-col p-5 w-full'>
                    <p className={status==='success' ? 'text-green-900 text-center w-full p-5 text-lg font-bold leading-6' : 'text-red-600 text-center w-full p-5 text-lg font-bold leading-6'}> {otpResponse?.message}</p>
                    {
                        (status==='success') &&
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

export default Invitation