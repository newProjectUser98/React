import React from 'react'
import logo from '../../assets/images/initiative-logo.svg'
import { useMediaQuery, useTheme } from '@material-ui/core'
import Invitation from '../../Forms/Auth/Invitation'

const InvitationForm = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up("md"))
    return (
        <div className={matches ? `w-full pl-96 flex-col flex lg:flex-row justify-center h-screen` : 'w-full flex-col flex lg:flex-row justify-center h-screen'}>
            {
                !matches && 
                <div className="logo-wrap flex justify-center items-center w-full">
                    <img src={logo} alt="Initiative Water" className='w-1/6' />
                </div>
            }
            <div className="px-10 md:px-20 lg:px-32 xl:px-44 w-full flex flex-col justify-center items-start">
                
                <Invitation/>
            </div>
        </div>
    )
}

export default InvitationForm