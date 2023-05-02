import { Grid, } from '@material-ui/core'
import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Paper } from '@mui/material';

const Notification = () => {
    const orange = ''
    const red = ''
    const gray =''

  return (
    <>
        <Paper elevation={4} sx={{borderRadius:'16px'}}>
            <div className='w-full my-5 py-5 px-1'>
                <div className="p-5 notification overflow-y-scroll scroll-m-px">
                    <div className="flex justify-between mb-5">
                        <p className="text-lg font-normal">Activity Feed</p>
                        <p className="text-lg font-normal cursor-pointer">Mark All As Read</p>
                    </div>
                    <Grid container spacing={5} className="my-5">
                        <Grid item xs={12}>
                            <div className="border rounded-md border-orange-500 border-l-8">
                                <div className="p-3">
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <div className="flex justify-center px-2">
                                                <ErrorOutlineIcon className='text-orange-500'/>
                                            </div>
                                            <div className="felx px-2">
                                                <div className="flex">
                                                    <p className='text-xs font-semibold mb-2'>Site name</p>
                                                    <p className='text-xs font-semibold mb-2'>3 min ago</p>
                                                </div>
                                                <div className="flex">
                                                    <p className='text-sm font-normal my-2'>Alert</p>
                                                </div>
                                                <div className="flex">
                                                    <p className='text-sm font-normal mt-2'>Site name - Component Name - Error message</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button className='flex'>Mark as read</button>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="border rounded-md border-red-500 border-l-8">
                                <div className="p-3">
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <div className="flex justify-center px-2">
                                                <HighlightOffIcon className='text-red-500'/>
                                            </div>
                                            <div className="felx px-2">
                                                <div className="flex">
                                                    <p className='text-xs font-semibold mb-2'>Site name</p>
                                                    <p className='text-xs font-semibold mb-2'>3 min ago</p>
                                                </div>
                                                <div className="flex">
                                                    <p className='text-sm font-normal my-2'>Alert</p>
                                                </div>
                                                <div className="flex">
                                                    <p className='text-sm font-normal mt-2'>Site name - Component Name - Error message</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button className='flex'>Mark as read</button>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="flex justify-between my-5">
                        <p className="text-lg font-normal">Read Messages</p>
                    </div>
                    <Grid container spacing={5} className="my-5">
                        <Grid item xs={12}>
                            <div className="border rounded-md border-gray-500 border-l-8">
                                <div className="p-3">
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <div className="flex justify-center px-2">
                                                <ErrorOutlineIcon className='text-gray-500'/>
                                            </div>
                                            <div className="felx px-2">
                                                <div className="flex">
                                                    <p className='text-xs font-semibold mb-2'>Site name</p>
                                                    <p className='text-xs font-semibold mb-2'>3 min ago</p>
                                                </div>
                                                <div className="flex">
                                                    <p className='text-sm font-normal my-2'>Alert</p>
                                                </div>
                                                <div className="flex">
                                                    <p className='text-sm font-normal mt-2'>Site name - Component Name - Error message</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Paper>
    </>
  )
}

export default Notification