import React from 'react'
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import calenderIcon from '../../../assets/images/calendar-icon.svg'
import { Switch } from '@material-ui/core';
const StatusSection = () => {
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4 ">
        <div className='flex items-center justify-start'>
            <p className='text-sm font-medium leading-5 text-gray-400 w-1/5'>Status: </p>
            <div className="bg-green-500 w-3/5 text-center text-white p-2 rounded-lg text-base font-medium">
                Active
            </div>
        </div>
        <div className='flex items-center justify-end'>
            <div className='bg-gray-bg w-4/5 flex p-3 px-5 rounded-lg justify-between'>
                <p className="text-black text-sm font-normal leading-5">Last Update</p>
                <div className='flex items-center '>
                    <p className="text-gray-400">Today :</p>
                    <p className='text-primary-color px-2'>Aug 11</p>
                    <img src={calenderIcon} alt="" className='px-2' />
                </div>
            </div>
            <div className='flex justify-end h-full w-1/5 items-center'><AutorenewOutlinedIcon fontSize="large"/></div>
        </div>
        <div className='flex items-center justify-start'>
            <div className='bg-gray-bg w-4/5 flex p-3 px-5 rounded-lg justify-between'>
                <p className="text-black text-sm font-normal leading-5">Data Transfer</p>
                <div className='flex items-center '>
                    <p className='text-primary-color px-2'>1.2 TB/min</p>
                </div>
            </div>
        </div>
        <div className='bg-gray-bg w-full flex p-3 px-5 rounded-lg justify-between items-center'>
            <p className="text-gray-700 text-lg font-bold leading-7 px-5">Plant Start / Stop</p>
            <div className='flex items-center '>
                <Switch color="primary"/>
            </div>
        </div>
    </div>
  )
}

export default StatusSection