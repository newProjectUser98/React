import React from 'react'
import LoginForm from '../components/Authentication/LoginForm'
import LogoSection from '../components/Authentication/LogoSection'
import { useMediaQuery, useTheme } from '@material-ui/core'
import {
  Routes,
  Route, Navigate
} from "react-router-dom";
import SignupForm from '../components/Authentication/SignupForm';
import ChangePasswordForm from '../components/Authentication/ChangePasswordForm';
import ForgotPasswordForm from '../components/Authentication/ForgotPasswordForm';
import InvitationForm from '../components/Authentication/InvitationForm';

const Login = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <div className='h-full flex'>
      {
        matches && 
        <LogoSection/>
      }
      <Routes>
        <Route index path='/' element={<LoginForm/>}/>
        <Route exact path="/signup" element={<SignupForm/>}/>
        <Route exact path="/forgotpassword" element={<ForgotPasswordForm/>}/>
        <Route exact path="/invitation/:id/:token" element={<InvitationForm/>}/>
        <Route exact path="/changepassword/:id/:token" element={<ChangePasswordForm/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default Login