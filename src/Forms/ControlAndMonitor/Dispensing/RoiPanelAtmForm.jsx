import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios';
import BackdropComp from '../../../hoc/Backdrop/Backdrop';
import { useNavigate } from 'react-router-dom';


let statusData = [
    { value: "nml", label: "normal" },
    { value: "tke", label: "Tank Empty" },
    { value: "tpl", label: "Tap Low" },
    { value: "nof", label: "noflow" },
    { value: "tpd", label: "Tempared" },
]
let newTransactionTypeData = [
    { value: "cn", label: "coin" },
    { value: "cd", label: "Card" },
    { value: "qr", label: "QR" }
]
const RoiPanelAtmForm = ({ intervalTime }) => {
    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [ntp, setNtp] = React.useState("");
    const [nov, setNov] = React.useState("");
    const [vl1, setvl1] = React.useState("");
    const [vl2, setvl2] = React.useState("");
    const [vl3, setvl3] = React.useState("");
    const [vl4, setvl4] = React.useState("");
    const [re1, setre1] = React.useState("");
    const [re2, setre2] = React.useState("");
    const [re3, setre3] = React.useState("");
    const [re4, setre4] = React.useState("");
    const [sts, setSts] = React.useState({ value: "", label: "" });
    const [ndv, setNdv] = React.useState("");
    const [ntt, setNtt] = React.useState({ value: "", label: "" });
    const [nta, setNta] = React.useState("");
    const [tmp, setTmp] = React.useState("");
    const navigate = useNavigate();

    let access_token = localStorage.getItem("access_token")
    let componentsJSON = localStorage.getItem("components");
    let components = JSON.parse(componentsJSON);
    console.log("components ==>", components[0].atm.new_transaction_type);

    useEffect(() => {
        const fetchData = () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            let newData = {
                unit_type: "water_dispense",
                company_name: userData.company_name,
                componant_name: "atm"
            }
            axios.post("/topicapi/updated_disp_atm/", newData).then((resp) => {
                console.log("res in get_atm", resp.data[0].data);
                if (resp.data[0].data.message_type === "updsta") {
                    statusData.map((item, id) => {
                        if (item.value === resp.data[0].data.sts) {
                            setSts({ value: item.value, label: item.label })
                        }
                    })
                    newTransactionTypeData.map((item, id) => {
                        if (item.value === resp.data[0].data.ntt) {
                            setNtt({ value: item.value, label: item.label })
                        }
                    })
                    setNdv(resp.data[0].data.ndv)
                    setNta(resp.data[0].data.nta)
                    setTmp(resp.data[0].data.tmp)
                } else if (resp.data[0].data.message_type === "updset") {
                    setNov(resp.data[0].data.nov)
                    setNtp(resp.data[0].data.ntp)
                    setvl1(resp.data[0].data.vl1)
                    setvl2(resp.data[0].data.vl2)
                    setvl3(resp.data[0].data.vl3)
                    setvl4(resp.data[0].data.vl4)
                    setre1(resp.data[0].data.re1)
                    setre2(resp.data[0].data.re2)
                    setre3(resp.data[0].data.re3)
                    setre4(resp.data[0].data.re4)
                }
                console.log("sts in data", resp.data[0].data.sts);
                localStorage.setItem('updated_time', resp.data[0].data.updated_at);
            }).catch((err) => {
                console.log("err", err);
            })
        };
        fetchData();
        const intervalId = setInterval(fetchData, intervalTime);
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalTime]);

    const initialValues = {
        ntp: '',
        nov: '',
        vl1: 100,
        vl2: 100,
        vl3: 100,
        vl4: 100,
        re1: 100,
        re2: 100,
        re3: 100,
        re4: 100,
    };

    const onSubmitSetting = (values, submitProps) => {
        const userData = JSON.parse(localStorage.getItem('user'));
        let newData = {
            company_name: userData.company_name,
            unit_type: "water_dispense",
            componant_name: "atm",
            ntp: ntp,
            nov: nov,
            vl1: vl1,
            vl2: vl2,
            vl3: vl3,
            vl4: vl4,
            re1: re1,
            re2: re2,
            re3: re3,
            re4: re4
        };

        axios.post("/topicapi/get_device_id/", newData)
            .then((resp) => {
                console.log("resp", resp);

                let newData = {
                    company_name: userData.company_name,
                    unit_type: "water_dispense",
                    componant_name: "atm",
                    ntp: ntp,
                    nov: nov,
                    vl1: vl1,
                    vl2: vl2,
                    vl3: vl3,
                    vl4: vl4,
                    re1: re1,
                    re2: re2,
                    re3: re3,
                    re4: re4,
                    ntt: ntt.value,
                    device_id: resp?.data[0]?.data?.Device_id
                };

                setTimeout(() => {
                    axios.post('/topicapi/atm_setting/', newData, {
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

            })
            .catch((err) => {
                console.log("err", err);
            });
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
            <div className="flex items-center py-3 flex-wrap">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40 my-2'>Status</p>
                <select name="sts" id="sts" className='my-2 w-52 px-5 py-2 border rounded'>
                    <option value={sts.value}>{sts.label}</option>
                    {/* <option value="nml">Normal</option>
                <option value="tke">tank_empty</option>
                <option value="tpl">Tap_Low</option>
                <option value="nof">noflow</option>
                <option value="tpd">tempared</option> */}
                </select>
            </div>
            <div className="flex items-center py-3 flex-wrap">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40 my-2'>New Dispense Volume</p>
                <p className='w-30 my-2'>{ndv} m3/hr</p>
                {/* <div>
                <Field type="text" name="ndv" id="ndv" className="p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="New Dispense Volume"/>
                <span className='mx-5'>m3/hr</span>
            </div> */}
            </div>
            <div className="flex items-center py-3 flex-wrap">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40 my-2'>New Transaction Type</p>
                <select name="ntt" id="ntt" className='my-2 w-52 px-5 py-2 border rounded'>
                    <option value={ntt?.value}>{ntt?.label}</option>
                    {/* <option value="cn">Coin</option>
                <option value="cd">Card</option>
                <option value="qr">QR</option> */}
                </select>
            </div>
            <div className="flex items-center py-3 flex-wrap">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40 my-2'>New Transaction Amount</p>
                <p className='w-30 my-2'>Rs: {nta}</p>
            </div>
            <div className="flex items-center py-3 flex-wrap">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40'>Water tempreture</p>
                <p className=''>{tmp}</p>
                <span className='mx-1'>&deg;C</span>
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
                                    <p className='w-40 my-2'>No. Of Tap</p>
                                    <Field as="select" disabled={!editSetting} name="ntp" id="ntp" value={ntp} onChange={(e) => setNtp(e.target.value)} className='w-52 my-2 p-2 border rounded'>
                                        <option value="" disabled>Please Select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Field>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>No. Of Volume</p>
                                    <Field as="select" disabled={!editSetting} name="nov" id="nov" value={nov} onChange={(e) => setNov(e.target.value)} className='w-52 my-2 p-2 border rounded'>
                                        <option value="" disabled>Please Select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Field>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Volume1</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="vl1" id="vl1" value={vl1} onChange={(e) => setvl1(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Volume1" />
                                        <span className='mx-3'>m3/hr</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Volume2</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="vl2" id="vl2" value={vl2} onChange={(e) => setvl2(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Volume2" />
                                        <span className='mx-3'>m3/hr</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Volume3</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="vl3" id="vl3" value={vl3} onChange={(e) => setvl3(e.target.value)} className="p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Volume3" />
                                        <span className='mx-3'>m3/hr</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40'>Volume4</p>
                                    <div>
                                        <Field disabled={!editSetting} type="text" name="vl4" id="vl4" value={vl4} onChange={(e) => setvl4(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Volume4" />
                                        <span className='mx-3'>m3/hr</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Rate1</p>
                                    <div>
                                        <span className='mx-3'>Rs</span>
                                        <Field disabled={!editSetting} type="text" name="re1" id="re1" value={re1} onChange={(e) => setre1(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rate1" />
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Rate2</p>
                                    <div>
                                        <span className='mx-3'>Rs</span>
                                        <Field disabled={!editSetting} type="text" name="re2" id="re2" value={re2} onChange={(e) => setre2(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rate2" />
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Rate3</p>
                                    <div>
                                        <span className='mx-3'>Rs</span>
                                        <Field disabled={!editSetting} type="text" name="re3" id="re3" value={re3} onChange={(e) => setre3(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rate3" />
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Rate4</p>
                                    <div>
                                        <span className='mx-3'>Rs</span>
                                        <Field disabled={!editSetting} type="text" name="re4" id="re4" value={re4} onChange={(e) => setre4(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rate4" />
                                    </div>
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

export default RoiPanelAtmForm