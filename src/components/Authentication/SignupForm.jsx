import React from 'react'
import logo from '../../assets/images/initiative-logo.svg'
import { useMediaQuery, useTheme } from '@material-ui/core'
import Signup from '../../Forms/Auth/Signup'

const SignupForm = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up("md"))
    return (
        <div className={matches ? `w-full pl-96 flex-col flex lg:flex-row justify-center` : 'w-full flex-col flex lg:flex-row justify-center'}>
            {
                !matches && 
                <div className="logo-wrap flex justify-center items-center w-full my-5">
                    <img src={logo} alt="Initiative Water" className='w-1/6' />
                </div>
            }
            <div className="px-10 md:px-20 lg:px-32 xl:px-52 w-full ">
                <p className="font-semibold text-3xl leading-5 my-8">Sign up</p>
                <Signup/>
            </div>
        </div>
    )
}

export default SignupForm