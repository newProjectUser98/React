import React from 'react'
import { useMediaQuery, useTheme } from '@material-ui/core'
import logo from '../../assets/images/initiative-logo.svg'
import ChangePassword from '../../Forms/Auth/ChangePassword'


const ChangePasswordForm = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up("md"))
    return (
        <div className={matches ? `w-full pl-96 flex-col flex lg:flex-row justify-center items-center h-screen` : 'w-full flex-col flex lg:flex-row justify-center items-center h-screen'}>
            {
                !matches && 
                <div className="logo-wrap flex justify-center items-center w-full">
                    <img src={logo} alt="Initiative Water" className='w-1/6' />
                </div>
            }
            <div className="px-10 md:px-20 lg:px-32 xl:px-44 w-full ">
                <p className="font-semibold text-3xl leading-5 my-8 text-center">Set Password</p>
                <ChangePassword/>
            </div>
        </div>
    )
}

export default ChangePasswordForm