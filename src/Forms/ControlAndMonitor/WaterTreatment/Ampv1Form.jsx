import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios';
import BackdropComp from '../../../hoc/Backdrop/Backdrop';

const Ampv1Form = () => {
    const [editState, setEditState] = useState(false)
    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [pos, setPos] = useState('');
    const [bkt, setBkt] = useState('');
    const [ip1, setIp1] = useState('');
    const [ip2, setIp2] = useState('');
    const [ip3, setIp3] = useState('');
    const [mot, setMot] = useState('');
    const [op1, setOp1] = useState('');
    const [op2, setOp2] = useState('');
    const [op3, setOp3] = useState('');
    const [psi, setPsi] = useState('');
    const [rst, setRst] = useState('');
    const [srt1, setSrt1] = useState('');
    const [srt2, setSrt2] = useState('');
    const [stp, setStp] = useState('');

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

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/topicapi/ampv1_state/").then((resp) => {
            console.log("res in get_rwp_state", resp.data[0]);
            setPos(resp.data[0].pos);
        }).catch((err) => {
            console.log("err", err);
        })
        axios.get("http://127.0.0.1:8000/topicapi/ampv1_setting/").then((resp) => {
            console.log("res in get_rwp_setting", resp.data[0]);
            let myNewData = resp.data[0]
            const myData = JSON.stringify(myNewData);
            localStorage.setItem("setting_Data", myData);
            setBkt(resp.data[0].bkt)
            setIp1(resp.data[0].ip1)
            setIp2(resp.data[0].ip2)
            setIp3(resp.data[0].ip3)
            setMot(resp.data[0].mot)
            setOp1(resp.data[0].op1)
            setOp2(resp.data[0].op2)
            setOp3(resp.data[0].op3)
            setPsi(resp.data[0].psi)
            setRst(resp.data[0].rst)
            setSrt1(resp.data[0].srt1)
            setSrt2(resp.data[0].srt2)
            setStp(resp.data[0].stp)
        }).catch((err) => {
            console.log("err", err);
        })
    }, [])
    const onSubmitState = (values, submitProps) => {
        const userData = JSON.parse(localStorage.getItem('user'));
        let newData = {
            company_name: userData.company_name,
            unit_type: "water_treatment",
            componant_name: "ampv1",
            pos: pos
        }
        axios.post('http://127.0.0.1:8000/topicapi/ampv1_state/', newData).then((res) => {
            console.log("res", res);
            setIsLoading(true);
            setOpen(true);
            setTimeout(() => {
                setIsLoading(false)
                setOpen(false);
            }, 70000);
        }).catch((err) => {
            console.log("err", err);
        })
    }
    const onSubmitSetting = (values, submitProps) => {
        const userData = JSON.parse(localStorage.getItem('user'));
        let newData = {
            company_name: userData.company_name,
            unit_type: "water_treatment",
            componant_name: "ampv1",
            stp: stp,
            ip1: ip1,
            ip2: ip2,
            ip3: ip3,
            psi: psi,
            srt1: srt1,
            srt2: srt2,
            bkt: bkt,
            rst: rst,
            mot: mot,
            op1: op1,
            op2: op2,
            op3: op3,
        }
        axios.post('http://127.0.0.1:8000/topicapi/ampv1_setting/', newData).then((res) => {
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
                                    <Field as="select" disabled={!editState} name="pos" className='w-52 my-2 p-2 border rounded' value={pos}
                                        onChange={(e) => setPos(e.target.value)}>
                                        <option value="" disabled>Select Position</option>
                                        <option value="ser">Service</option>
                                        <option value="bck">Backwash</option>
                                        <option value="rns">Rinse</option>
                                        <option value="mot">Motor on delay time</option>
                                    </Field>
                                </div>
                                <div className="flex items-center py-3">
                                    <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40'>Remaining Time</p>
                                    <p className=''>59</p>
                                    <span className='mx-1'>sec</span>
                                </div>
                                <div className="flex items-center py-3">
                                    <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40'>Cycle Count</p>
                                    <p className=''>1234</p>
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
                                            onChange={(e) => setSrt1(e.target.value)}/>
                                        <span className='mx-1'>:</span>
                                        <Field disabled={!editSetting} type="text" name="srt2" id="srts" className="my-2 p-3 border rounded-md w-20 outline-none font-medium text-sm leading-5" placeholder="Service Time" value={srt2}
                                            onChange={(e) => setSrt2(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Backwash Time</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="bkt" id="bkt" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Backwash Time" value={bkt}
                                            onChange={(e) => setBkt(e.target.value)}/>
                                        <span className='mx-1'>minutes</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Rinse Time</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="rst" id="rst" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rinse Time" value={rst}
                                            onChange={(e) => setRst(e.target.value)}/>
                                        <span className='mx-1'>minutes</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Motor On Delay Time</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="mot" id="mot" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Motor On Delay Time" value={mot}
                                            onChange={(e) => setMot(e.target.value)}/>
                                        <span className='mx-1'>sec</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Sensor Type</p>
                                    <Field as="select" disabled={!editSetting} name="stp" className='w-52 my-2 p-2 border rounded' value={stp}
                                        onChange={(e) => setStp(e.target.value)}>
                                        <option value="" disabled>Select Sensor Type</option>
                                        <option value="tme">Time</option>
                                        <option value="vol">Volume</option>
                                        <option value="fr">Flowrate</option>
                                        <option value="non">None</option>
                                    </Field>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Output 1</p>
                                    <Field disabled={!editSetting} type="text" name="op1" id="op1" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Output 1" value={op1}
                                        onChange={(e) => setOp1(e.target.value)}/>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Output 2</p>
                                    <Field disabled={!editSetting} type="text" name="op2" id="op2" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Output 2" value={op2}
                                        onChange={(e) => setOp2(e.target.value)}/>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Output 3</p>
                                    <Field disabled={!editSetting} type="text" name="op3" id="op3" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Output 3" value={op3}
                                        onChange={(e) => setOp3(e.target.value)}/>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Input 1</p>
                                    <Field as="select" disabled={!editSetting} name="ip1" className='w-52 my-2 p-2 border rounded' value={ip1}
                                        onChange={(e) => setIp1(e.target.value)}>
                                        <option value="" disabled>Select Input 1</option>
                                        <option value="Off">Off</option>
                                        <option value="Twlvl">Treated Water Tank Level</option>
                                        <option value="Rwlvl">Raw Water Tank Level</option>
                                        <option value="pls">Pulse</option>
                                        <option value="dsl">Dosing Level</option>
                                    </Field>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Input 2</p>
                                    <Field as="select" disabled={!editSetting} name="ip2" className='w-52 my-2 p-2 border rounded' value={ip2}
                                        onChange={(e) => setIp2(e.target.value)}>
                                        <option value="" disabled>Select Input 2</option>
                                        <option value="Off">Off</option>
                                        <option value="Twlvl">Treated Water Tank Level</option>
                                        <option value="Rwlvl">Raw Water Tank Level</option>
                                        <option value="pls">Pulse</option>
                                        <option value="dsl">Dosing Level</option>
                                    </Field>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Input 3</p>
                                    <Field as="select" disabled={!editSetting} name="ip3" className='w-52 my-2 p-2 border rounded' value={ip3}
                                        onChange={(e) => setIp3(e.target.value)}>
                                        <option value="" disabled>Select Input 3</option>
                                        <option value="Off">Off</option>
                                        <option value="Twlvl">Treated Water Tank Level</option>
                                        <option value="Rwlvl">Raw Water Tank Level</option>
                                        <option value="pls">Pulse</option>
                                        <option value="dsl">Dosing Level</option>
                                    </Field>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Pressure Switch Input</p>
                                    <Field as="select" disabled={!editSetting} name="psi" className='w-auto my-2 p-2 border rounded' value={psi}
                                        onChange={(e) => setPsi(e.target.value)}>
                                        <option value="" disabled>Select Pressure Switch Input</option>
                                        <option value="ena">Enable</option>
                                        <option value="dis">Disable</option>
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

export default Ampv1Form