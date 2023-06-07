import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios';
import BackdropComp from '../../../hoc/Backdrop/Backdrop';
import { useNavigate } from 'react-router-dom';
let positionData = [
    { value: "ser", label: "Service" },
    { value: "bck", label: "Backwash" },
    { value: "rns", label: "Rinse" },
    { value: "mot", label: "Motor on delay time" },
]
let stpData = [
    { value: "tme", label: "Time" },
    { value: "vol", label: "Volume" },
    { value: "frt", label: "Flowrate" },
    { value: "non", label: "None" },
]
let OutputData = [
    { value: "m1", label: "Mode 1" },
    { value: "m2", label: "Mode 2" },
    { value: "m3", label: "Mode 3" },
    { value: "m4", label: "Mode 4" },
    { value: "m5", label: "Mode 5" },
    { value: "m6", label: "Mode 6" },
    { value: "m7", label: "Mode 7" },
    { value: "m8", label: "Mode 8" },
    { value: "m9", label: "Mode 9" },
]

let InputData = [
    { value: "Off", label: "Off" },
    { value: "Twl", label: "Treated Water Tank Level" },
    { value: "Rwl", label: "Raw Water Tank Level" },
    { value: "pls", label: "Pulse" },
    { value: "dsl", label: "Dosing Level" },
]

let PSIData = [
    { value: "ena", label: "Enable" },
    { value: "dis", label: "Disable" },

]

const Ampv2Form = ({ intervalTime }) => {
    let localStorageData = JSON.parse(localStorage.getItem('localStorage_data_ampv2'))


    const [editState, setEditState] = useState(false)
    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [pos, setPos] = useState(localStorageData?.pos);
    const [bkt, setBkt] = useState(localStorageData?.bkt);
    const [ip1, setIp1] = useState(localStorageData?.ip1);
    const [ip2, setIp2] = useState(localStorageData?.ip2);
    const [ip3, setIp3] = useState(localStorageData?.ip3);
    const [mot, setMot] = useState(localStorageData?.mot);
    const [op1, setOp1] = useState(localStorageData?.op1);
    const [op2, setOp2] = useState(localStorageData?.op2);
    const [op3, setOp3] = useState(localStorageData?.op3);
    const [psi, setPsi] = useState(localStorageData?.psi);
    const [rst, setRst] = useState(localStorageData?.rst);
    const [srt1, setSrt1] = useState(localStorageData?.srt1);
    const [srt2, setSrt2] = useState(localStorageData?.srt2);
    const [stp, setStp] = useState(localStorageData?.stp);
    const [cct, setCct] = useState(localStorageData?.cct);
    const [rmt, setRmt] = useState(localStorageData?.rmt);
    const navigate = useNavigate();
    let access_token = localStorage.getItem("access_token")
    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            let newData = {
                unit_type: "water_treatment",
                company_name: userData.company_name,
                componant_name: "ampv2"
            }
            axios.post("/topicapi/updated_treat_ampv2/", newData).then((resp) => {
                // if (rmt === undefined && cct === undefined && stp === undefined && ip1 === undefined) {
                //     let time = resp.data[0].data.data_set.srt
                //     let SplitTime = time?.toString().split(':')
                //     let localStorage_data_ampv2 = {
                //         pos: resp.data[0].data.data_sta.pos,
                //         rmt: resp.data[0].data.data_sta.rmt,
                //         cct: resp.data[0].data.data_sta.cct,
                //         stp: resp.data[0].data.data_set.stp,
                //         ip1: resp.data[0].data.data_set.ip1,
                //         ip2: resp.data[0].data.data_set.ip2,
                //         ip3: resp.data[0].data.data_set.ip3,
                //         psi: resp.data[0].data.data_set.psi,
                //         srt1: SplitTime[0],
                //         srt2: SplitTime[1],
                //         bkt: resp.data[0].data.data_set.bkt,
                //         rst: resp.data[0].data.data_set.rst,
                //         mot: resp.data[0].data.data_set.mot,
                //         op1: resp.data[0].data.data_set.op1,
                //         op2: resp.data[0].data.data_set.op2,
                //         op3: resp.data[0].data.data_set.op3,
                //     }
                //     localStorage.setItem("localStorage_data_ampv2", JSON.stringify(localStorage_data_ampv2));
                // }
                // Retrieve data from localStorage
                let localStorageData = JSON.parse(localStorage.getItem("localStorage_data_ampv2"));

                // Check if localStorageData exists and has values
                if (!localStorageData) {
                    localStorageData = {};
                }

                // Update the variables with new values if they are not zero
                if (resp.data[0].data.data_sta.pos !== "") {
                    localStorageData.pos = resp.data[0].data.data_sta.pos;
                }

                if (resp.data[0].data.data_sta.rmt !== 0) {
                    localStorageData.rmt = resp.data[0].data.data_sta.rmt;
                }

                if (resp.data[0].data.data_sta.cct !== 0) {
                    localStorageData.cct = resp.data[0].data.data_sta.cct;
                }

                if (resp.data[0].data.data_set.stp !== "") {
                    localStorageData.stp = resp.data[0].data.data_set.stp;
                }

                if (resp.data[0].data.data_set.ip1 !== "") {
                    localStorageData.ip1 = resp.data[0].data.data_set.ip1;
                }

                if (resp.data[0].data.data_set.ip2 !== "") {
                    localStorageData.ip2 = resp.data[0].data.data_set.ip2;
                }

                if (resp.data[0].data.data_set.ip3 !== "") {
                    localStorageData.ip3 = resp.data[0].data.data_set.ip3;
                }

                if (resp.data[0].data.data_set.psi !== "") {
                    localStorageData.psi = resp.data[0].data.data_set.psi;
                }
                if (resp.data[0].data.data_set.srt !== "") {
                    let time = resp.data[0].data.data_set.srt;
                    let SplitTime = time.split(':');
                    localStorageData.srt1 = SplitTime[0];
                    localStorageData.srt2 = SplitTime[1];
                }

                if (resp.data[0].data.data_set.bkt !== 0) {
                    localStorageData.bkt = resp.data[0].data.data_set.bkt;
                }

                if (resp.data[0].data.data_set.rst !== 0) {
                    localStorageData.rst = resp.data[0].data.data_set.rst;
                }

                if (resp.data[0].data.data_set.mot !== 0) {
                    localStorageData.mot = resp.data[0].data.data_set.mot;
                }

                if (resp.data[0].data.data_set.op1 !== "") {
                    localStorageData.op1 = resp.data[0].data.data_set.op1;
                }

                if (resp.data[0].data.data_set.op2 !== "") {
                    localStorageData.op2 = resp.data[0].data.data_set.op2;
                }

                if (resp.data[0].data.data_set.op3 !== "") {
                    localStorageData.op3 = resp.data[0].data.data_set.op3;
                }

                // Store the updated data in localStorage
                localStorage.setItem("localStorage_data_ampv2", JSON.stringify(localStorageData));

                let updated_Time_state = localStorage.getItem("updated_time_ampv2_state")
                let updated_Time_settng = localStorage.getItem("updated_time_ampv2_settings")

                console.log("resp in ampv2", resp.data[0].data);
                if (updated_Time_state != resp.data[0].data.data_sta.updated_at || updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                    if (resp.data[0].data.data_sta.pos != "") {
                        setPos(resp.data[0].data.data_sta.pos)
                    }
                    if (resp.data[0].data.data_sta.rmt != 0) {
                        setRmt(resp.data[0].data.data_sta.rmt)
                    }
                    if (resp.data[0].data.data_sta.cct != 0) {
                        setCct(resp.data[0].data.data_sta.cct)
                    }
                    if (resp.data[0].data.data_set.bkt != 0) {
                        setBkt(resp.data[0].data.data_set.bkt)
                    }
                    if (resp.data[0].data.data_set.ip1 != "") {
                        setIp1(resp.data[0].data.data_set.ip1)
                    }
                    if (resp.data[0].data.data_set.ip2 != "") {
                        setIp2(resp.data[0].data.data_set.ip2)
                    }
                    if (resp.data[0].data.data_set.ip3 != "") {
                        setIp3(resp.data[0].data.data_set.ip3)
                    }
                    if (resp.data[0].data.data_set.mot != "") {
                        setMot(resp.data[0].data.data_set.mot)
                    }
                    if (resp.data[0].data.data_set.op1 != "") {
                        setOp1(resp.data[0].data.data_set.op1)
                    }
                    if (resp.data[0].data.data_set.op2 != "") {
                        setOp2(resp.data[0].data.data_set.op2)
                    }
                    if (resp.data[0].data.data_set.op3 != "") {
                        setOp3(resp.data[0].data.data_set.op3)
                    }
                    if (resp.data[0].data.data_set.psi != "") {
                        setPsi(resp.data[0].data.data_set.psi)
                    }
                    if (resp.data[0].data.data_set.rst != 0) {
                        setRst(resp.data[0].data.data_set.rst)
                    }
                    if (resp.data[0].data.data_set.srt != 0) {
                        let time = resp.data[0].data.data_set.srt
                        let SplitTime = time?.toString().split(':')
                        console.log("SplitTime0", SplitTime[0]);
                        console.log("SplitTime1", SplitTime[1]);
                        setSrt1(parseInt(SplitTime[0]))
                        setSrt2(parseInt(SplitTime[1]))
                    }
                    if (resp.data[0].data.data_set.stp != "") {
                        setStp(resp.data[0].data.data_set.stp)
                    }
                    setIsLoading(false);
                    if (updated_Time_state != resp.data[0].data.data_sta.updated_at) {
                        alert("Device State Data Updated Successfully")
                    } else if (updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                        alert("Device Setting Data Updated Successfully")
                    }
                    localStorage.setItem('updated_time_ampv2_state', resp.data[0].data.data_sta.updated_at);
                    localStorage.setItem('updated_time_ampv2_settings', resp.data[0].data.data_set.updated_at);
                }
            }).catch((err) => {
                console.log("err in ampv2 state", err);
            })
        };
        fetchData();
        const intervalId = setInterval(fetchData, intervalTime);
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalTime]);


    const initialValuesState = {
        pos: ''
    };
    const initialValuesSetting = {
        stp: '',
        ip1: '',
        ip2: '',
        ip3: '',
        psi: '',
        srt1: 99,
        srt2: 59,
        bkt: 99,
        rst: 99,
        mot: 999,
        op1: 'ml-9',
        op2: 'ml-9',
        op3: 'ml-9',
    };

    const onSubmitState = (values, submitProps) => {
        console.log("values", values);
        const userData = JSON.parse(localStorage.getItem('user'));
        // let newData = {
        //     unit_type: "water_treatment",
        //     company_name: userData.company_name,
        //     componant_name: "ampv2",
        //     pos: pos
        // }
        // console.log("newData", newData);
        // axios.post("/topicapi/get_device_id/", newData).then((resp) => {
        //     console.log("resp for device id", resp?.data);
        let newData = {
            company_name: userData.company_name,
            unit_type: "water_treatment",
            componant_name: "ampv2",
            pos: pos,
            // device_id: resp?.data[0]?.data?.Device_id
        }
        console.log("newData in state++>", newData);
        axios.post('/topicapi/ampv2_state/', newData, {
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        }
        ).then((res) => {
            console.log("res", res);
            setIsLoading(true);
            setOpen(true);
            setTimeout(() => {
                setIsLoading(false)
                setOpen(false);
            }, 70000);
        }).catch((err) => {
            console.log("err", err);
            if (err.response.statusText === "Unauthorized") {
                navigate("/");
                alert("Please enter valid credentials")
            }
        })
        // }).catch((error) => {
        //     console.log("error", error);
        // })

    }
    const onSubmitSetting = (values, submitProps) => {
        console.log("values in ampv 2 setting", values);
        const userData = JSON.parse(localStorage.getItem('user'));
        // let newData = {
        //     company_name: userData.company_name,
        //     unit_type: "water_treatment",
        //     componant_name: "ampv2",
        //     stp: stp,
        //     ip1: ip1,
        //     ip2: ip2,
        //     ip3: ip3,
        //     psi: psi,
        //     srt: `${srt1}:${srt2}`,
        //     srt1: srt1,
        //     srt2: srt2,
        //     bkt: bkt,
        //     rst: rst,
        //     mot: mot,
        //     op1: op1,
        //     op2: op2,
        //     op3: op3,
        // }
        // console.log("newData", newData);
        // axios.post("/topicapi/get_device_id/", newData).then((resp) => {
        //     console.log("resp", resp);
        let newData = {
            company_name: userData.company_name,
            unit_type: "water_treatment",
            componant_name: "ampv2",
            stp: stp,
            ip1: ip1,
            ip2: ip2,
            ip3: ip3,
            psi: psi,
            srt: `${srt1}:${srt2}`,
            srt1: srt1,
            srt2: srt2,
            bkt: bkt,
            rst: rst,
            mot: mot,
            op1: op1,
            op2: op2,
            op3: op3,
            // device_id: resp?.data[0]?.data?.Device_id
        }
        axios.post('/topicapi/ampv2_setting/', newData, {
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log("res", res);
            setIsLoading(true);
            setOpen(true);
            setTimeout(() => {
                setIsLoading(false)
                setOpen(false);
            }, 10000);
        }).catch((err) => {
            console.log("err", err);
        })
        // }).catch((error) => {
        //     console.log("error", error);
        // })
    }
    return (
        <>
            {isLoading &&
                <BackdropComp open={open} />
            }
            <div className="flex items-center w-full mb-5 flex-wrap justify-center">
                <div className="flex items-center m-2 ">
                    <div className="rounded-full bg-yellow-300 w-3 h-3 mx-2"></div>
                    <span>Dynamic state variables</span>
                </div>
                <div className="flex items-center m-2 ">
                    <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                    <span>State variables</span>
                </div>
                <div className="flex items-center m-2 ">
                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                    <span>Setting variable</span>
                </div>
            </div>
            <Formik initialValues={initialValuesState} onSubmit={onSubmitState}>
                {
                    (formik) => {
                        return (
                            <Form autoComplete='off'>
                                <div className="flex items-center mt-5 mx-2">
                                    <p className='w-40 my-2 font-bold'>State Variables</p>
                                    <div className="flex items-center justify-center cursor-pointer rounded-full bg-primary-color hover:bg-text-title w-8 h-8 mx-2 hover:text-white">
                                        <BorderColorIcon fontSize='small' onClick={() => setEditState(!editState)} />
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-yellow-300 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Position</p>
                                    <Field
                                        as="select"
                                        disabled={!editState}
                                        name="pos"
                                        className="w-52 my-2 p-2 border rounded"
                                        value={pos}
                                        onChange={(e) => setPos(e.target.value)}
                                    >
                                        <option value="" disabled>Select Position</option>
                                        {positionData.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="flex items-center py-3">
                                    <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40'>Remaining Time</p>
                                    <p className=''>{rmt}</p>
                                    <span className='mx-1'>sec</span>
                                </div>
                                <div className="flex items-center py-3">
                                    <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40'>Cycle Count</p>
                                    <p className=''>{cct}</p>
                                    <span className='mx-1'>Cycles</span>
                                </div>

                                {
                                    editState &&
                                    <button type="submit" className='mx-2 px-5 bg-primary-color py-2 text-white flex items-center justify-center rounded-lg hover:bg-text-title shadow-md'>Submit</button>
                                }
                            </Form>
                        )
                    }
                }
            </Formik>
            <Formik initialValues={initialValuesSetting} onSubmit={onSubmitSetting}>
                {
                    (formik) => {
                        return (
                            <Form autoComplete='off'>
                                <div className="flex items-center mt-5 mx-2">
                                    <p className='w-40 my-2 font-bold'>Setting Variables</p>
                                    <div className="flex items-center justify-center cursor-pointer rounded-full bg-primary-color hover:bg-text-title w-8 h-8 mx-2 hover:text-white">
                                        <BorderColorIcon fontSize='small' onClick={() => setEditSetting(!editSetting)} />
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Service Time</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="srt1" id="srth" className="my-2 p-3 border rounded-md w-20 outline-none font-medium text-sm leading-5" placeholder="Service Time" value={srt1}
                                            onChange={(e) => setSrt1(e.target.value)} />
                                        <span className='mx-1'>:</span>
                                        <Field disabled={!editSetting} type="text" name="srt2" id="srts" className="my-2 p-3 border rounded-md w-20 outline-none font-medium text-sm leading-5" placeholder="Service Time" value={srt2}
                                            onChange={(e) => setSrt2(e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Backwash Time</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="bkt" id="bkt" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Backwash Time" value={bkt}
                                            onChange={(e) => setBkt(e.target.value)} />
                                        <span className='mx-1'>minutes</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Rinse Time</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="rst" id="rst" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rinse Time" value={rst}
                                            onChange={(e) => setRst(e.target.value)} />
                                        <span className='mx-1'>minutes</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Motor On Delay Time</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="mot" id="mot" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Motor On Delay Time" value={mot}
                                            onChange={(e) => setMot(e.target.value)} />
                                        <span className='mx-1'>sec</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Sensor Type</p>
                                    <Field
                                        as="select"
                                        disabled={!editSetting}
                                        name="stp"
                                        className="w-52 my-2 p-2 border rounded"
                                        value={stp}
                                        onChange={(e) => setStp(e.target.value)}
                                    >
                                        <option value="" disabled>Select Position</option>
                                        {stpData.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Output 1</p>
                                    {/* <Field disabled={!editSetting} type="text" name="op1" id="op1" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Output 1" value={op1}
                                        onChange={(e) => setOp1(e.target.value)} /> */}
                                    <Field
                                        as="select"
                                        disabled={!editSetting}
                                        name="op1"
                                        className="w-52 my-2 p-2 border rounded"
                                        value={op1}
                                        onChange={(e) => setOp1(e.target.value)}
                                    >
                                        <option value="" disabled>Select Position</option>
                                        {OutputData.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Output 2</p>
                                    {/* <Field disabled={!editSetting} type="text" name="op2" id="op2" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Output 2" value={op2}
                                        onChange={(e) => setOp2(e.target.value)} /> */}
                                    <Field
                                        as="select"
                                        disabled={!editSetting}
                                        name="op2"
                                        className="w-52 my-2 p-2 border rounded"
                                        value={op2}
                                        onChange={(e) => setOp2(e.target.value)}
                                    >
                                        <option value="" disabled>Select Position</option>
                                        {OutputData.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Output 3</p>
                                    {/* <Field disabled={!editSetting} type="text" name="op3" id="op3" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Output 3" value={op3}
                                        onChange={(e) => setOp3(e.target.value)} /> */}
                                    <Field
                                        as="select"
                                        disabled={!editSetting}
                                        name="op3"
                                        className="w-52 my-2 p-2 border rounded"
                                        value={op3}
                                        onChange={(e) => setOp3(e.target.value)}
                                    >
                                        <option value="" disabled>Select Position</option>
                                        {OutputData.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Input 1</p>
                                    {/* <Field as="select" disabled={!editSetting} name="ip1" className='w-52 my-2 p-2 border rounded' value={ip1}
                                        onChange={(e) => setIp1(e.target.value)}>
                                        <option value="" disabled>Select Input 1</option>
                                        <option value="Off">Off</option>
                                        <option value="Twlvl">Treated Water Tank Level</option>
                                        <option value="Rwlvl">Raw Water Tank Level</option>
                                        <option value="pls">Pulse</option>
                                        <option value="dsl">Dosing Level</option>
                                    </Field> */}
                                    <Field
                                        as="select"
                                        disabled={!editSetting}
                                        name="ip1"
                                        className="w-52 my-2 p-2 border rounded"
                                        value={ip1}
                                        onChange={(e) => setIp1(e.target.value)}
                                    >
                                        <option value="" disabled>Select Position</option>
                                        {InputData.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Input 2</p>
                                    {/* <Field as="select" disabled={!editSetting} name="ip2" className='w-52 my-2 p-2 border rounded' value={ip2}
                                        onChange={(e) => setIp2(e.target.value)}>
                                        <option value="" disabled>Select Input 2</option>
                                        <option value="Off">Off</option>
                                        <option value="Twlvl">Treated Water Tank Level</option>
                                        <option value="Rwlvl">Raw Water Tank Level</option>
                                        <option value="pls">Pulse</option>
                                        <option value="dsl">Dosing Level</option>
                                    </Field> */}
                                    <Field
                                        as="select"
                                        disabled={!editSetting}
                                        name="ip2"
                                        className="w-52 my-2 p-2 border rounded"
                                        value={ip2}
                                        onChange={(e) => setIp2(e.target.value)}
                                    >
                                        <option value="" disabled>Select Position</option>
                                        {InputData.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Input 3</p>
                                    {/* <Field as="select" disabled={!editSetting} name="ip3" className='w-52 my-2 p-2 border rounded' value={ip3}
                                        onChange={(e) => setIp3(e.target.value)}>
                                        <option value="" disabled>Select Input 3</option>
                                        <option value="Off">Off</option>
                                        <option value="Twlvl">Treated Water Tank Level</option>
                                        <option value="Rwlvl">Raw Water Tank Level</option>
                                        <option value="pls">Pulse</option>
                                        <option value="dsl">Dosing Level</option>
                                    </Field> */}
                                    <Field
                                        as="select"
                                        disabled={!editSetting}
                                        name="ip3"
                                        className="w-52 my-2 p-2 border rounded"
                                        value={ip3}
                                        onChange={(e) => setIp3(e.target.value)}
                                    >
                                        <option value="" disabled>Select Position</option>
                                        {InputData.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Pressure Switch Input</p>
                                    {/* <Field as="select" disabled={!editSetting} name="psi" className='w-auto my-2 p-2 border rounded' value={psi}
                                        onChange={(e) => setPsi(e.target.value)}>
                                        <option value="" disabled>Select Pressure Switch Input</option>
                                        <option value="ena">Enable</option>
                                        <option value="dis">Disable</option>
                                    </Field> */}
                                    <Field
                                        as="select"
                                        disabled={!editSetting}
                                        name="psi"
                                        className="w-52 my-2 p-2 border rounded"
                                        value={psi}
                                        onChange={(e) => setPsi(e.target.value)}
                                    >
                                        <option value="" disabled>Select Position</option>
                                        {PSIData.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                {
                                    editSetting &&
                                    <button type="submit" className='mx-2 px-5 bg-primary-color py-2 text-white flex items-center justify-center rounded-lg hover:bg-text-title shadow-md'>Submit</button>
                                }
                            </Form>
                        )
                    }
                }
            </Formik>
        </>
    )
}

export default Ampv2Form