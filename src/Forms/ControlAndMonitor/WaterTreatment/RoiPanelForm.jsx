import { Switch } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios';
import BackdropComp from '../../../hoc/Backdrop/Backdrop';
import { useNavigate } from 'react-router-dom';

let ErrorData = [
    { value: "opl", label: "Operational" },
    { value: "lpst", label: "LPS Trip" },
    { value: "hpst", label: "HPS Trip" },
    { value: "rwpot", label: "RWP Overload Trip" },
    { value: "hppot", label: "HPP Overload Trip" },
    { value: "rwpdt", label: "RWP Dryrun Trip" },
    { value: "hppdt", label: "RWP Dryrun Trip" },
    { value: "uvl", label: "Under Voltage Trip" },
    { value: "ovl", label: "Over Voltage Trip" },
    { value: "cont", label: "Conductivity Trip" },
]

let ModeData = [
    { value: "aut", label: "Auto" },
    { value: "sem", label: "Semi auto" },
    { value: "man", label: "Manual" },
]
let TimeFlowData = [
    { value: "t", label: "Time" },
    { value: "f", label: "Flow" },
]


let LOWHIGH = [
    { value: "low", label: "Low" },
    { value: "high", label: "High" },
]
let FULLEMP = [
    { value: "full", label: "Full" },
    { value: "emp", label: "Empty" },
    { value: "emp", label: "Empty" },
]
const RoiPanelForm = ({ intervalTime }) => {
    let localStorageData = JSON.parse(localStorage.getItem('localStorage_data_panel'))

    // eslint-disable-next-line
    const [statusVal, setStatusVal] = useState(false)
    // eslint-disable-next-line
    const [dosingpumpVal, setdosingpumpVal] = useState(true)
    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [mod, setMod] = React.useState(localStorageData?.mod);
    const [nmv, setNmv] = React.useState(localStorageData?.nmv);
    const [stp, setStp] = React.useState(localStorageData?.stp);
    const [srt1, setSrt1] = React.useState(localStorageData?.srt1);
    const [srt2, setSrt2] = React.useState(localStorageData?.srt2);
    const [unv, setUnv] = React.useState(localStorageData?.unv);
    const [ovv, setOvv] = React.useState(localStorageData?.ovv);
    const [spn, setSpn] = React.useState(localStorageData?.spn);
    const [srt, setSrt] = React.useState(localStorageData?.srt);
    const [bkt, setBkt] = React.useState(localStorageData?.bkt);
    const [rst, setRst] = React.useState(localStorageData?.rst);
    const [sts, setSts] = React.useState(localStorageData?.sts);
    const [rtl, setRtl] = React.useState(localStorageData?.rtl);
    const [ttl, setTtl] = React.useState(localStorageData?.ttl);
    const [lps, setLps] = React.useState(localStorageData?.lps);
    const [hps, setHps] = React.useState(localStorageData?.hps);
    const [dgp, setDgp] = React.useState(localStorageData?.dgp);
    const [ipv, setIpv] = React.useState(localStorageData?.ipv);
    const [err, setErr] = React.useState(localStorageData?.err);

    const navigate = useNavigate();
    let access_token = localStorage.getItem("access_token")
    let componentsJSON = localStorage.getItem("components");
    let components = JSON.parse(componentsJSON);

    const initialValues = {
        mod: '',
        nmv: '',
        stp: '',
        srt1: 99,
        srt2: 59,
        unv: 180,
        ovv: 280,
        spn: 330,
        srt: "9959",
        bkt: 99,
        rst: 99,
    };
    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            let newData = {
                unit_type: "water_treatment",
                company_name: userData.company_name,
                componant_name: "panel",
                site_name: userData.site_name
            }
            axios.post("/topicapi/updated_treat_panel/", newData).then((resp) => {

                // Retrieve data from localStorage
                let localStorageData = JSON.parse(localStorage.getItem("localStorage_data_panel"));

                // Check if localStorageData exists and has values
                if (!localStorageData) {
                    localStorageData = {};
                }

                // Update the variables with new values if they are not zero
                if (resp.data[0].data.data_sta.sts !== "") {
                    localStorageData.sts = resp.data[0].data.data_sta.sts;
                }

                if (resp.data[0].data.data_sta.rtl !== "") {
                    localStorageData.rtl = resp.data[0].data.data_sta.rtl;
                }

                if (resp.data[0].data.data_sta.ttl !== "") {
                    localStorageData.ttl = resp.data[0].data.data_sta.ttl;
                }

                if (resp.data[0].data.data_sta.lps !== "") {
                    localStorageData.lps = resp.data[0].data.data_sta.lps;
                }
                if (resp.data[0].data.data_sta.hps !== "") {
                    localStorageData.hps = resp.data[0].data.data_sta.hps;
                }

                if (resp.data[0].data.data_sta.dgp !== "") {
                    localStorageData.dgp = resp.data[0].data.data_sta.dgp;
                }

                if (resp.data[0].data.data_sta.ipv !== 0) {
                    localStorageData.ipv = resp.data[0].data.data_sta.ipv;
                }

                if (resp.data[0].data.data_sta.err !== "") {
                    localStorageData.err = resp.data[0].data.data_sta.err;
                }

                if (resp.data[0].data.data_set.mod !== "") {
                    localStorageData.mod = resp.data[0].data.data_set.mod;
                }

                if (resp.data[0].data.data_set.unv !== 0) {
                    localStorageData.unv = resp.data[0].data.data_set.unv;
                }

                if (resp.data[0].data.data_set.ovv !== 0) {
                    localStorageData.ovv = resp.data[0].data.data_set.ovv;
                }

                if (resp.data[0].data.data_set.spn !== 0) {
                    localStorageData.spn = resp.data[0].data.data_set.spn;
                }

                if (resp.data[0].data.data_set.nmv !== "") {
                    localStorageData.nmv = resp.data[0].data.data_set.nmv;
                }

                if (resp.data[0].data.data_set.stp !== "") {
                    localStorageData.stp = resp.data[0].data.data_set.stp;
                }
                if (resp.data[0].data.data_set.srt !== "") {
                    let time = resp.data[0].data.data_set.srt;
                    const hours = Math.floor(time / 60);
                    const minutes = time % 60;
                    localStorageData.srt1 = hours;
                    localStorageData.srt2 = minutes;
                }

                if (resp.data[0].data.data_set.bkt !== 0) {
                    localStorageData.bkt = resp.data[0].data.data_set.bkt;
                }

                if (resp.data[0].data.data_set.rst !== 0) {
                    localStorageData.rst = resp.data[0].data.data_set.rst;
                }

                // Store the updated data in localStorage
                localStorage.setItem("localStorage_data_panel", JSON.stringify(localStorageData));


                let updated_Time_state = localStorage.getItem("updated_time_panel_state")
                let updated_Time_settng = localStorage.getItem("updated_time_panel_settings")

                if (updated_Time_state != resp.data[0].data.data_sta.updated_at || updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                    if (resp.data[0].data.data_sta.sts != "") {
                        setSts(resp.data[0].data.data_sta.sts)
                    }
                    if (resp.data[0].data.data_sta.ttl != "") {
                        setTtl(resp.data[0].data.data_sta.ttl)
                    }
                    if (resp.data[0].data.data_sta.rtl != "") {
                        setRtl(resp.data[0].data.data_sta.rtl)
                    }
                    if (resp.data[0].data.data_sta.lps != "") {
                        setLps(resp.data[0].data.data_sta.lps)
                    }
                    if (resp.data[0].data.data_sta.hps != "") {
                        setHps(resp.data[0].data.data_sta.hps)
                    }
                    if (resp.data[0].data.data_sta.dgp != "") {
                        setDgp(resp.data[0].data.data_sta.dgp)
                    }
                    if (resp.data[0].data.data_sta.ipv != 0) {
                        setIpv(resp.data[0].data.data_sta.ipv)
                    }
                    if (resp.data[0].data.data_sta.err != "") {
                        setErr(resp.data[0].data.data_sta.err)
                    }
                    if (resp.data[0].data.data_set.mod != "") {
                        setMod(resp.data[0].data.data_set.mod)
                    }
                    if (resp.data[0].data.data_set.nmv != 0) {
                        setNmv(resp.data[0].data.data_set.nmv)
                    }
                    if (resp.data[0].data.data_set.stp != "") {
                        setStp(resp.data[0].data.data_set.stp)
                    }
                    if (resp.data[0].data.data_set.srt != "") {
                        let time = resp.data[0].data.data_set.srt
                        const hours = Math.floor(time / 60);
                        const minutes = time % 60;
                        setSrt1(parseInt(hours))
                        setSrt2(parseInt(minutes))
                    }
                    if (resp.data[0].data.data_set.unv != 0) {
                        setUnv(resp.data[0].data.data_set.unv)
                    }
                    if (resp.data[0].data.data_set.ovv != 0) {
                        setOvv(resp.data[0].data.data_set.ovv)
                    }
                    if (resp.data[0].data.data_set.spn != 0) {
                        setSpn(resp.data[0].data.data_set.spn)
                    }
                    if (resp.data[0].data.data_set.srt != "") {
                        setSrt(resp.data[0].data.data_set.srt)
                    }
                    if (resp.data[0].data.data_set.bkt != 0) {
                        setBkt(resp.data[0].data.data_set.bkt)
                    }
                    if (resp.data[0].data.data_set.rst != 0) {
                        setRst(resp.data[0].data.data_set.rst)
                    }
                    setIsLoading(false);
                    if (updated_Time_state != resp.data[0].data.data_sta.updated_at) {
                        alert(`Device state of panel component is updated successfully`)
                    } else if (updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                        alert(`Device setting of panel component is updated successfully`)
                    }
                    localStorage.setItem('updated_time_panel_state', resp.data[0].data.data_sta.updated_at);
                    localStorage.setItem('updated_time_panel_settings', resp.data[0].data.data_set.updated_at);
                }
            }).catch((err) => {
                console.log("err in panel state", err);
            })
        };
        fetchData();
        const intervalId = setInterval(fetchData, intervalTime);
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalTime]);

    const onSubmitSetting = (values, submitProps) => {
        console.log("values", values);
        const userData = JSON.parse(localStorage.getItem('user'));

        let newData = {
            company_name: userData.company_name,
            unit_type: "water_treatment",
            componant_name: "panel",
            mod: mod,
            nmv: nmv,
            stp: stp,
            unv: unv,
            ovv: ovv,
            spn: spn,
            srt: `${srt1}:${srt2}`,
            bkt: bkt,
            rst: rst,
            site_name: userData.site_name
        };

        setTimeout(() => {
            axios.post('/topicapi/panel_setting/', newData, {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                }
            })
                .then((res) => {
                    console.log("res", res);
                    setIsLoading(true);
                    setOpen(true);
                    setTimeout(() => {
                        setIsLoading(false)
                        setOpen(false);
                    }, 10000);
                })
                .catch((err) => {
                    console.log("err", err);
                    if (err.response.statusText === "Unauthorized") {
                        navigate("/");
                        alert("Please enter valid credentials")
                    }
                });
        }, 3000); // Delay of 3 seconds
    }
    return (
        <>
            {isLoading &&
                <BackdropComp open={open} />
            }
            <div className="flex items-center w-full mb-5 flex-wrap justify-center">
                <div className="flex items-center m-2 ">
                    <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                    <span>State variables</span>
                </div>
                <div className="flex items-center m-2 ">
                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                    <span>Setting variable</span>
                </div>
            </div>
            <div className="flex items-center mt-5 mx-2">
                <p className='w-40 my-2 font-bold'>State Variables</p>
            </div>
            <div className="flex items-center py-3">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40'>Status</p>
                {/* <p className='w-30 mx-2'>{statusVal? 'ON' : 'OFF'}</p> */}
                <p className='w-30 mx-2'>{sts}</p>
                <div className='w-30'>
                    {/* <Switch name='status' checked={statusVal} onChange={(e)=> setStatusVal(e.target.checked)} color='primary'/> */}
                    <Switch name='status' checked={sts === "on" ? true : false} onChange={(e) => setStatusVal(e.target.checked)} color='primary' />
                </div>
            </div>
            <div className="flex items-center py-3 flex-wrap">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40 my-2'>Row Water Tank Level</p>
                <select name="rtl" id="rtl" className='w-52 p-2 border my-2 rounded'>

                    {
                        FULLEMP.map((item, id) => {
                            if (item.value === rtl) {
                                return (
                                    <option value={item.value}>{item.label}</option>
                                )
                            }
                        })
                    }
                </select>
            </div>
            <div className="flex items-center py-3 flex-wrap">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40 my-2'>Trated Water Tank Level</p>
                <select name="ttl" id="ttl" className='w-52 p-2 border my-2 rounded'>

                    {
                        FULLEMP.map((item, id) => {
                            console.log("item in hps", item.value);
                            if (item.value === ttl) {
                                return (
                                    <option value={item.value}>{item.label}</option>
                                )
                            }
                        })
                    }
                </select>
            </div>
            <div className="flex items-center py-3 flex-wrap">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40 my-2'>Low Pressure Switch</p>
                <select name="lps" id="lps" className='w-52 p-2 border my-2  rounded'>

                    {
                        LOWHIGH.map((item, id) => {
                            if (item.value === lps) {
                                return (
                                    <option value={item.value}>{item.label}</option>
                                )
                            }
                        })
                    }
                </select>
            </div>
            <div className="flex items-center py-3 flex-wrap">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40 my-2'>High Pressure Switch</p>
                <select name="hps" id="hps" className='w-52 p-2 border my-2 rounded'>

                    {
                        LOWHIGH.map((item, id) => {
                            if (item.value === hps) {
                                return (
                                    <option value={item?.value}>{item?.label}</option>
                                )
                            }
                        })
                    }
                </select>
            </div>
            <div className="flex items-center py-3 flex-wrap">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40 my-2'>Dosing Pump</p>
                <p className='w-30 mx-2'>{dgp}</p>
                <div className='w-30'>
                    <Switch name='status' checked={dgp === "on" ? true : false} onChange={(e) => setdosingpumpVal(e.target.checked)} color='primary' />
                </div>
            </div>
            <div className="flex items-center py-3">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40'>Input Voltage</p>
                <p className=''>{ipv}</p>
                <span className='mx-1'>Volts</span>
            </div>
            <div className="flex items-center py-3 flex-wrap">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40 my-2'>Error</p>
                <select name="err" id="err" className='my-2 w-52 p-2 border rounded'>
                    {
                        ErrorData.map((item, id) => {
                            if (item.value === err) {
                                return (
                                    <option value={item?.value}>{item?.label}</option>
                                )
                            }
                        })
                    }

                </select>
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmitSetting}>
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
                                    <p className='w-40 my-2'>Mode</p>

                                    <Field
                                        as="select"
                                        disabled={!editSetting}
                                        name="mod"
                                        className="w-52 my-2 p-2 border rounded"
                                        value={mod}
                                        onChange={(e) => setMod(e.target.value)}
                                    >
                                        <option value="" disabled>Select Position</option>
                                        {ModeData.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                </div>

                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Under Voltage</p>
                                    <div>
                                        <Field disabled={!editSetting} type="number" required value={unv} onChange={(e) => setUnv(e.target.value)} name="unv" id="unv" className=" my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Under Voltage" />
                                        <span className='mx-5 my-2'>Volts</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Over Voltage</p>
                                    <div>
                                        <Field disabled={!editSetting} type="number" required value={ovv} onChange={(e) => setOvv(e.target.value)} name="ovv" id="ovv" className=" my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Over Voltage" />
                                        <span className='mx-5 my-2'>Volts</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Span</p>
                                    <Field disabled={!editSetting} type="number" required value={spn} onChange={(e) => setSpn(e.target.value)} name="spn" id="spn" className="p-3 my-2 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Span" />
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>No.of Multiport valve</p>
                                    <Field as="select" disabled={!editSetting} value={nmv} onChange={(e) => setNmv(e.target.value)} name="nmv" className='w-52 my-2 p-2 border rounded'>
                                        <option value="" disabled>Please Select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Field>
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
                                        {TimeFlowData.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Service Time</p>
                                    <div>
                                        <Field disabled={!editSetting} type="number" required value={srt1} onChange={(e) => setSrt1(e.target.value)} name="srt1" id="srth" className="my-2 p-3 border rounded-md w-20 outline-none font-medium text-sm leading-5" placeholder="Service Time" />
                                        <span className='mx-1'>:</span>
                                        <Field disabled={!editSetting} type="number" required value={srt2} onChange={(e) => setSrt2(e.target.value)} name="srt2" id="srts" className="my-2 p-3 border rounded-md w-20 outline-none font-medium text-sm leading-5" placeholder="Service Time" />
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Backwash Time</p>
                                    <Field disabled={!editSetting} type="number" required value={bkt} onChange={(e) => setBkt(e.target.value)} name="bkt" id="bkt" className="p-3 my-2 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Backwash Time" />
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Rinse Time</p>
                                    <Field disabled={!editSetting} type="number" required value={rst} onChange={(e) => setRst(e.target.value)} name="rst" id="rst" className="p-3 my-2 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rinse Time" />
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

export default RoiPanelForm