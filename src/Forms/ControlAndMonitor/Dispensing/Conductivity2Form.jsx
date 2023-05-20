import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios';
import BackdropComp from '../../../hoc/Backdrop/Backdrop';


const Conductivity2Form = () => {
    const [changeConductivityDis, setChangeConductivityDis] = useState('conductivity')
    const [editSetting, setEditSetting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [spn, setSpn] = React.useState("");
    const [asp, setAsp] = React.useState("");

    let componentsJSON = localStorage.getItem("components");
    let components = JSON.parse(componentsJSON);
    console.log("components ==>", components[0].cnd.cnd);


    // useEffect(() => {
    //     let userData = JSON.parse(localStorage.getItem('user'));
    //     let newData = {
    //         unit_type: "water_dispense",
    //         company_name: userData.company_name,
    //         componant_name: "consen_cnd"
    //     }
    //     components[0].cnd.cnd === 'conductivity' ?
    //         axios.post("/topicapi/updated_disp_consen/", newData).then((resp) => {
    //             console.log("res in get_consen", resp.data);
    //             setSpn(resp.data[0].fields?.spn)
    //             setAsp(resp.data[0].fields?.asp)
    //         }).catch((err) => {
    //             console.log("err", err);
    //         })
    //         :
    //         axios.post("/topicapi/updated_disp_consen/", newData).then((resp) => {
    //             console.log("res in get_rwp", resp.data[0].fields);
    //             setSpn(resp.data[0].fields?.spn)
    //             setAsp(resp.data[0].fields?.asp)
    //         }).catch((err) => {
    //             console.log("err", err);
    //         })
    // },
        // eslint-disable-next-line
        // [])

    const initialValues = {
        spn: "",
        asp: "",
    };
    const onSubmitSetting = (values, submitProps) => {
        const userData = JSON.parse(localStorage.getItem('user'));
        let newData = {
            company_name: userData.company_name,
            unit_type: "water_dispense",
            componant_name: components[0].cnd.cnd ? "consen_cnd" : "consen_tds",
            spn: spn,
            asp: asp
        }

        components[0].cnd.cnd === 'conductivity' ?
            axios.post('/topicapi/consen_cnd_setting/', newData).then((res) => {
                console.log("res in cnd", res);
                setIsLoading(true);
                setOpen(true);
                setTimeout(() => {
                    setIsLoading(false)
                    setOpen(false);
                }, 10000);
            }).catch((err) => {
                console.log("err", err);
            }) :
            axios.post('/topicapi/consen_setting/', newData).then((res) => {
                console.log("res in tds", res);
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
                <select name="ntp" id="ntp" className='w-40 px-2 py-2 border rounded' value={changeConductivityDis} onChange={(e) => setChangeConductivityDis(e.target.value)}>
                    <option value={components[0].cnd.cnd}>{components[0].cnd.cnd}</option>
                    {/* <option value="conductivity">Conductivity</option>
                <option value="tds">TDS</option> */}
                </select>
                {
                    // changeConductivityDis === 'conductivity' ? 
                    components[0].cnd.cnd === 'conductivity' ?
                        <p className='w-30 mx-3'>100.0 uS</p>
                        :
                        <p className='w-30 mx-3'>100.0 ppm</p>
                }
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
                                    <p className='w-40 my-2 '>Span</p>
                                    <Field disabled={!editSetting} type="text" name="spn" value={spn} onChange={(e) => setSpn(e.target.value)} id="spn" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Span" />
                                </div>
                                {/* <div className="flex items-center py-3 flex-wrap">
                                <p className='w-40'>Trip Setpoint</p>
                                <Field type="text" name="tsp" id="tsp" className="p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Trip Setpoint" value={500}/>
                            </div> */}
                                <div className="flex items-center py-3 flex-wrap">
                                    <div className="rounded-full bg-green-400 w-3 h-3 mx-2"></div>
                                    <p className='w-40 my-2'>Alert Setpoint</p>
                                    <Field disabled={!editSetting} type="text" name="asp" value={asp} onChange={(e) => setAsp(e.target.value)} id="asp" className="my-2 p-3 border rounded-md w-52 outline-none font-medium text-sm leading-5" placeholder="Atert Setpoint" />
                                    {
                                        // changeConductivityDis === 'conductivity' ? 
                                        components[0].cnd.cnd === 'conductivity' ?
                                            <span className='mx-5'>uS</span>
                                            :
                                            <span className='mx-5'>ppm</span>
                                    }
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

export default Conductivity2Form