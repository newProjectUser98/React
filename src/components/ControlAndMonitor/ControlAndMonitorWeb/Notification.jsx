import { Grid, } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Paper } from '@mui/material';
import axios from 'axios';

const CompLongForm = [
    { emp: "Empty" },
    { aut: "Auto" },
    { sem: "Semi Auto" },
    { man: "Manual" },
    { t: "Time" },
    { f: "Flow" },
    { opl: "Operational" },
    { lpst: "lps trip" },
    { hpst: "hps trip" },
    { rwpot: "rwp overload trip" },
    { hppot: "hpp overload trip" },
    { rwpdt: "rwp dryrun trip" },
    { hppdt: "hpp dryrun trip" },
    { uvl: "Under Voltage" },
    { ovl: "Over Voltage" },
    { cont: "Conductivity Trip" },
    { ser: "Service" },
    { bck: "Backwash" },
    { rns: "Rinse" },
    { mot: "Motor On Delay Time" },
    { tme: "Time" },
    { vol: "Volume" },
    { frt: "FlowRate" },
    { non: "none" },
    { m1: "Mode 1" },
    { m2: "Mode 2" },
    { m3: "Mode 3" },
    { m4: "Mode 4" },
    { m5: "Mode 5" },
    { m6: "Mode 6" },
    { m7: "Mode 7" },
    { m8: "Mode 8" },
    { m9: "Mode 9" },
    { Twl: "Treated Water Tank Level" },
    { Rwl: "Raw Water Tank Level" },
    { pls: "Pulse" },
    { dsl: "Dosing Level" },
    { ena: "Enable" },
    { dis: "Disable" },
    { nml: "Normal" },
    { tke: "Tank Empty" },
    { tpl: "Tap Low" },
    { nof: "No Flow" },
    { tpd: "Tempared" },
    { cn: "Coin" },
    { cd: "Card" },
]



const Notification = () => {
    const [data, setData] = useState([])
    const [textDesc, setTextDesc] = useState("")
    const userData = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            let newData = {
                company_name: userData.company_name,
                site_name: userData.site_name
            }
            axios.post("/topicapi/last-records/", newData).then((resp) => {
                setData(resp.data)
                const stringValue = resp.data[0].e_discriptions
                const replacedString = CompLongForm.reduce((acc, item) => {
                    const key = Object.keys(item)[0];
                    const value = item[key];
                    const regex = new RegExp(`\\b${key}\\b`, 'g');
                    return acc.replace(regex, value);
                }, stringValue);

                setTextDesc(replacedString);
                const firstRecord = resp.data[0];
                let updated_time_error = localStorage.getItem("updated_time_error")
                // eslint-disable-next-line
                if (updated_time_error != firstRecord.updated_at && updated_time_error != undefined) {
                    alert(`Component Name: ${firstRecord.service}\nError Message: ${firstRecord?.e_discriptions}`)
                    localStorage.setItem('updated_time_error', firstRecord?.updated_at);
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
                                                                        <p className='text-xs font-semibold mb-2'>{userData?.username}&nbsp;</p>
                                                                        <p className='text-xs font-semibold mb-2'> {item.created_at.slice(0, 10)} &nbsp;{`${item.hour}:${item.minit}:${item.second}`}</p>
                                                                    </div>
                                                                    <div className="flex">
                                                                        <p className='text-sm font-normal my-2'>Alert</p>
                                                                    </div>
                                                                    <div className="flex">
                                                                        <p className='text-sm font-normal mt-2'>{textDesc}</p>
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
                        </Grid >

                    </div>
                </div>
            </Paper>
        </>
    )
}

export default Notification