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
    let localStorageData = JSON.parse(localStorage.getItem('localStorage_data_atm'))


    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [ntp, setNtp] = React.useState(localStorageData?.ntp);
    const [nov, setNov] = React.useState(localStorageData?.nov);
    const [vl1, setvl1] = React.useState(localStorageData?.vl1);
    const [vl2, setvl2] = React.useState(localStorageData?.vl2);
    const [vl3, setvl3] = React.useState(localStorageData?.vl3);
    const [vl4, setvl4] = React.useState(localStorageData?.vl4);
    const [re1, setre1] = React.useState(localStorageData?.re1);
    const [re2, setre2] = React.useState(localStorageData?.re2);
    const [re3, setre3] = React.useState(localStorageData?.re3);
    const [re4, setre4] = React.useState(localStorageData?.re4);
    const [sts, setSts] = React.useState(localStorageData?.sts);
    const [ndv, setNdv] = React.useState(localStorageData?.ndv);
    const [ntt, setNtt] = React.useState(localStorageData?.ntt);
    const [nta, setNta] = React.useState(localStorageData?.nta);
    const [tmp, setTmp] = React.useState(localStorageData?.tmp);
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
                componant_name: "atm",
                site_name: userData.site_name
            }
            axios.post("/topicapi/updated_disp_atm/", newData).then((resp) => {

                // Retrieve data from localStorage
                let localStorageData = JSON.parse(localStorage.getItem("localStorage_data_atm"));

                // Check if localStorageData exists and has values
                if (!localStorageData) {
                    localStorageData = {};
                }

                // Update the variables with new values if they are not zero
                if (resp.data[0].data.data_sta.sts !== "") {
                    localStorageData.sts = resp.data[0].data.data_sta.sts;
                }

                if (resp.data[0].data.data_sta.ndv !== 0) {
                    localStorageData.ndv = resp.data[0].data.data_sta.ndv;
                }

                if (resp.data[0].data.data_sta.ntt !== 0) {
                    localStorageData.ntt = resp.data[0].data.data_sta.ntt;
                }

                if (resp.data[0].data.data_sta.nta !== 0) {
                    localStorageData.nta = resp.data[0].data.data_sta.nta;
                }

                if (resp.data[0].data.data_sta.tmp !== 0) {
                    localStorageData.tmp = resp.data[0].data.data_sta.tmp;
                }

                if (resp.data[0].data.data_set.ntp !== "") {
                    localStorageData.ntp = resp.data[0].data.data_set.ntp;
                }

                if (resp.data[0].data.data_set.nov !== "") {
                    localStorageData.nov = resp.data[0].data.data_set.nov;
                }

                if (resp.data[0].data.data_set.vl1 !== 0) {
                    localStorageData.vl1 = resp.data[0].data.data_set.vl1;
                }

                if (resp.data[0].data.data_set.vl2 !== 0) {
                    localStorageData.vl2 = resp.data[0].data.data_set.vl2;
                }

                if (resp.data[0].data.data_set.vl3 !== 0) {
                    localStorageData.vl3 = resp.data[0].data.data_set.vl3;
                }

                if (resp.data[0].data.data_set.vl4 !== 0) {
                    localStorageData.vl4 = resp.data[0].data.data_set.vl4;
                }

                if (resp.data[0].data.data_set.re1 !== 0) {
                    localStorageData.re1 = resp.data[0].data.data_set.re1;
                }

                if (resp.data[0].data.data_set.re2 !== 0) {
                    localStorageData.re2 = resp.data[0].data.data_set.re2;
                }

                if (resp.data[0].data.data_set.re3 !== 0) {
                    localStorageData.re3 = resp.data[0].data.data_set.re3;
                }

                if (resp.data[0].data.data_set.re4 !== 0) {
                    localStorageData.re4 = resp.data[0].data.data_set.re4;
                }

                // Store the updated data in localStorage
                localStorage.setItem("localStorage_data_atm", JSON.stringify(localStorageData));
                let updated_Time_state = localStorage.getItem("updated_time_atm_state")
                let updated_Time_settng = localStorage.getItem("updated_time_atm_settings")

                if (updated_Time_state != resp.data[0].data.data_sta.updated_at || updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                    if (resp.data[0].data.data_sta.sts != "") {
                        setSts(resp.data[0].data.data_sta.sts)
                    }
                    if (resp.data[0].data.data_sta.ntt != "") {
                        setNtt(resp.data[0].data.data_sta.ntt)
                    }
                    if (resp.data[0].data.data_sta.ndv != 0) {
                        setNdv(resp.data[0].data.data_sta.ndv)
                    }
                    if (resp.data[0].data.data_sta.nta != 0) {
                        setNta(resp.data[0].data.data_sta.nta)
                    }
                    if (resp.data[0].data.data_sta.tmp != 0) {
                        setTmp(resp.data[0].data.data_sta.tmp)
                    }
                    if (resp.data[0].data.data_set.nov != 0) {
                        setNov(resp.data[0].data.data_set.nov)
                    }
                    if (resp.data[0].data.data_set.ntp != 0) {
                        setNtp(resp.data[0].data.data_set.ntp)
                    }
                    if (resp.data[0].data.data_set.vl1 != 0) {
                        setvl1(resp.data[0].data.data_set.vl1)
                    }
                    if (resp.data[0].data.data_set.vl2 != 0) {
                        setvl2(resp.data[0].data.data_set.vl2)
                    }
                    if (resp.data[0].data.data_set.vl3 != 0) {
                        setvl3(resp.data[0].data.data_set.vl3)
                    }
                    if (resp.data[0].data.data_set.vl4 != 0) {
                        setvl4(resp.data[0].data.data_set.vl4)
                    }
                    if (resp.data[0].data.data_set.re1 != 0) {
                        setre1(resp.data[0].data.data_set.re1)
                    }
                    if (resp.data[0].data.data_set.re2 != 0) {
                        setre2(resp.data[0].data.data_set.re2)
                    }
                    if (resp.data[0].data.data_set.re3 != 0) {
                        setre3(resp.data[0].data.data_set.re3)
                    }
                    if (resp.data[0].data.data_set.re4 != 0) {
                        setre4(resp.data[0].data.data_set.re4)
                    }
                    setIsLoading(false);
                    if (updated_Time_state != resp.data[0].data.data_sta.updated_at) {
                        alert(`Device state of atm component is updated successfully`)
                    } else if (updated_Time_settng != resp.data[0].data.data_set.updated_at) {
                        alert(`Device setting of atm component is updated successfully`)
                    }
                    localStorage.setItem('updated_time_atm_state', resp.data[0].data.data_sta.updated_at);
                    localStorage.setItem('updated_time_atm_settings', resp.data[0].data.data_set.updated_at);
                }
            }).catch((err) => {
                console.log("err in atm state", err);
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
            re4: re4,
            ntt: ntt,
            site_name: userData.site_name
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

                    {
                        statusData.map((item, id) => {
                            if (item.value === sts) {
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
                <p className='w-40 my-2'>New Dispense Volume</p>
                <p className='w-30 my-2'>{ndv} m3/hr</p>

            </div>
            <div className="flex items-center py-3 flex-wrap">
                <div className="rounded-full bg-sky-400 w-3 h-3 mx-2"></div>
                <p className='w-40 my-2'>New Transaction Type</p>
                <select name="ntt" id="ntt" className='my-2 w-52 px-5 py-2 border rounded'>

                    {
                        newTransactionTypeData.map((item, id) => {
                            if (item.value === ntt) {
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
                                        <Field disabled={!editSetting} type="number" required name="vl1" id="vl1" value={vl1} onChange={(e) => setvl1(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Volume1" />
                                        <span className='mx-3'>m3/hr</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Volume2</p>
                                    <div>
                                        <Field disabled={!editSetting} type="number" required name="vl2" id="vl2" value={vl2} onChange={(e) => setvl2(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Volume2" />
                                        <span className='mx-3'>m3/hr</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Volume3</p>
                                    <div>
                                        <Field disabled={!editSetting} type="number" required name="vl3" id="vl3" value={vl3} onChange={(e) => setvl3(e.target.value)} className="p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Volume3" />
                                        <span className='mx-3'>m3/hr</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40'>Volume4</p>
                                    <div>
                                        <Field disabled={!editSetting} type="number" required name="vl4" id="vl4" value={vl4} onChange={(e) => setvl4(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Volume4" />
                                        <span className='mx-3'>m3/hr</span>
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Rate1</p>
                                    <div>
                                        <span className='mx-3'>Rs</span>
                                        <Field disabled={!editSetting} type="number" required name="re1" id="re1" value={re1} onChange={(e) => setre1(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rate1" />
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Rate2</p>
                                    <div>
                                        <span className='mx-3'>Rs</span>
                                        <Field disabled={!editSetting} type="number" required name="re2" id="re2" value={re2} onChange={(e) => setre2(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rate2" />
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Rate3</p>
                                    <div>
                                        <span className='mx-3'>Rs</span>
                                        <Field disabled={!editSetting} type="number" required name="re3" id="re3" value={re3} onChange={(e) => setre3(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rate3" />
                                    </div>
                                </div>
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Rate4</p>
                                    <div>
                                        <span className='mx-3'>Rs</span>
                                        <Field disabled={!editSetting} type="number" required name="re4" id="re4" value={re4} onChange={(e) => setre4(e.target.value)} className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Rate4" />
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