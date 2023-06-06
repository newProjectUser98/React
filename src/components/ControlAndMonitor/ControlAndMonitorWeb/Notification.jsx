import { Grid, } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Paper } from '@mui/material';
import axios from 'axios';

const Notification = () => {
    const [data, setData] = useState([])
    const userData = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        axios.get("/api/last-records/").then((resp) => {
            console.log("resp", resp.data);
            setData(resp.data)
        }).catch((err) => {
            console.log("err", err);
        })
    }, [])

    useEffect(() => {
        const fetchData = () => {
            axios.get("/api/last-records/").then((resp) => {
                const firstRecord = resp.data[0];
                let updated_time_error = localStorage.getItem("updated_time_error")

                if (updated_time_error != firstRecord.updated_at) {
                    alert(`Component Name: ${firstRecord.service}\nError Message: ${firstRecord.e_discriptions}`)
                    localStorage.setItem('updated_time_error', firstRecord.updated_at);
                }
            }).catch((err) => {
                console.log("Error:", err);
            });
        };

        fetchData(); // Initial fetch

        const interval = setInterval(() => {
            fetchData(); // Fetch data every 5 seconds
        }, 5000);

        return () => {
            clearInterval(interval); // Clear the interval on component unmount
        };
    }, []);






    let ErrorMSgJSON = localStorage.getItem("ErrorMSg");
    let ErrorMsg = JSON.parse(ErrorMSgJSON);
    console.log("ErrorMsg", ErrorMsg);
    return (
        <>
            <Paper elevation={4} sx={{ borderRadius: '16px' }}>
                <div className='w-full my-5 py-5 px-1'>
                    <div className="p-5 notification overflow-y-scroll scroll-m-px">
                        <div className="flex justify-between mb-5">
                            <p className="text-lg font-normal">Activity Feed</p>
                            {/* <p className="text-lg font-normal cursor-pointer">Mark All As Read</p> */}
                        </div>
                        <Grid container spacing={5} className="my-5">
                            {
                                data.map((item, index) => {
                                    return (
                                        <>
                                            <Grid item xs={12}>
                                                <div className="border rounded-md border-orange-500 border-l-8">
                                                    <div className="p-3">
                                                        <div className="flex justify-between">
                                                            <div className="flex">
                                                                <div className="flex justify-center px-2">
                                                                    <ErrorOutlineIcon className='text-orange-500' />
                                                                </div>
                                                                <div className="felx px-2">
                                                                    <div className="flex">
                                                                        {/* <p className='text-xs font-semibold mb-2'>Site name</p>
                                                                        <p className='text-xs font-semibold mb-2'>3 min ago</p> */}
                                                                        <p className='text-xs font-semibold mb-2'>{userData?.company_name}&nbsp;</p>
                                                                        <p className='text-xs font-semibold mb-2'> {item.created_at.slice(0, 10)} &nbsp;{`${item.hour}:${item.minit}:${item.second}`}</p>
                                                                    </div>
                                                                    <div className="flex">
                                                                        <p className='text-sm font-normal my-2'>Alert</p>
                                                                    </div>
                                                                    <div className="flex">
                                                                        <p className='text-sm font-normal mt-2'>{userData?.company_name} - {item.service} - {item.e_discriptions}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <button className='flex'>Mark as read</button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </>
                                    )
                                })
                            }
                            {/* <Grid item xs={12}>
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
                        </Grid> */}
                        </Grid >
                        <div className="flex justify-between my-5">
                            <p className="text-lg font-normal">Read Messages</p>
                        </div>

                        <Grid container spacing={5} className="my-5">
                            {
                                ErrorMsg.map((item, index) => {
                                    return (
                                        <>
                                            <Grid item xs={12}>
                                                <div className="border rounded-md border-gray-500 border-l-8">
                                                    <div className="p-3">
                                                        <div className="flex justify-between">
                                                            <div className="flex">
                                                                <div className="flex justify-center px-2">
                                                                    <ErrorOutlineIcon className='text-orange-500' />
                                                                </div>
                                                                <div className="felx px-2">
                                                                    <div className="flex">
                                                                        {/* <p className='text-xs font-semibold mb-2'>Site name</p>
                                                                        <p className='text-xs font-semibold mb-2'>3 min ago</p> */}
                                                                        <p className='text-xs font-semibold mb-2'>{item.site_Name}</p>
                                                                        <p className='text-xs font-semibold mb-2'> {item.time}</p>
                                                                    </div>
                                                                    <div className="flex">
                                                                        <p className='text-sm font-normal my-2'>Alert</p>
                                                                    </div>
                                                                    <div className="flex">
                                                                        <p className='text-sm font-normal mt-2'>{item.site_Name} - {item.component_name} - {item.error_msg}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button className='flex'>Mark as read</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </>
                                    )
                                })
                            }
                        </Grid>
                    </div>
                </div>
            </Paper>
        </>
    )
}

export default Notification