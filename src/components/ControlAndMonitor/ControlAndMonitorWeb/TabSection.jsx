import { Select, MenuItem, OutlinedInput } from '@material-ui/core'
import React, { useState } from 'react'
import DispensingUnit from './DispensingUnit'
import EquipmentDetail from './EquipmentDetail'
import Notification from './Notification'
import WaterTreatmentUnit from './WaterTreatmentUnit'

const TabSection = ({searchdata}) => {
    const [selectvalue, setSelectValue] = useState('')
    const [tabValue, setTabValue] = useState('Treatment')
    const [proDetail, setProDetail] = useState(false)
    const [proTitle, setProTitle] = useState('')

  return (
    <div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 ">
            <div className={tabValue === 'Treatment' ? 'p-3 rounded-t-lg flex items-center justify-center bg-slate-100 ' : 'p-3 rounded-t-lg flex items-center justify-center'}>
                <div className={tabValue === 'Treatment' ? 'p-2 cursor-pointer border-b-4 border-violet-400 text-violet-400' : 'p-2 cursor-pointer hover:text-violet-400 hover:border-b-4 hover:border-violet-400'} onClick={()=>{
                    setTabValue('Treatment')
                    setProDetail(false)
                    }}>
                    <p>Water Treatment Unit</p>
                </div>
            </div>
            <div className={tabValue === 'Dispensing' ? 'p-3 rounded-t-lg flex items-center justify-center bg-slate-100 ' : 'p-3 rounded-t-lg flex items-center justify-center'}>
                <div className={tabValue === 'Dispensing' ? 'p-2 cursor-pointer border-b-4 border-violet-400 text-violet-400' : 'p-2 cursor-pointer hover:text-violet-400 hover:border-b-4 hover:border-violet-400'} onClick={()=>{
                    setTabValue('Dispensing')
                    setProDetail(false)
                    }}>
                    <p>Dispensing Unit</p>
                </div>
            </div>
        </div>
        <div className="content bg-slate-100 mb-5 rounded-br-2xl rounded-bl-2xl">
            {
                tabValue === 'Treatment' ?
                    <div className="watertreatmentunit">
                        <div className="p-5 tabcontent-filter relative">
                            <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-1">
                                <div className="flex items-center flex-wrap justify-between lg:justify-start">
                                    <p className='m-4'>Working Hours</p>
                                    <input type="text" name="sitename" id="sitename" className="p-2 border-none outline-none font-medium text-sm leading-5" placeholder="Search by site name" />
                                </div>
                                <div className="flex items-center flex-wrap justify-between lg:justify-start">
                                    <p className='m-4'>Select Panel Mode</p>
                                    <Select displayEmpty className='p-0 border-none outline-none font-medium text-sm leading-5 w-48'
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        value={selectvalue}
                                        onChange={ (e) => { setSelectValue(e.target.value)}}
                                        input={<OutlinedInput label="Name" />}
                                        // MenuProps={MenuProps}
                                        >
                                        <MenuItem disabled value="" sx={{padding:1, margin:0}}>
                                            <em>Select City/State</em>
                                        </MenuItem>
                                        {searchdata?.map((name) => (
                                            <MenuItem sx={{padding:1, margin:0}}
                                            key={name}
                                            value={name}
                                            >
                                            {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                                <div className="flex items-center flex-wrap justify-between lg:justify-start">
                                    <p className=' m-4'>conductivity / TDS</p>
                                    <input type="text" name="sitename" id="sitename" className="p-2 border-none outline-none font-medium text-sm leading-5" placeholder="Search by site name" />
                                </div>
                            </div>
                            <WaterTreatmentUnit proDetail={proDetail} setProDetail={setProDetail} setProTitle={setProTitle}/>
                        </div>
                    </div>
                : 
                    <div className="dispensingunit">
                        <div className="p-5 tabcontent-filter relative">
                            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-2 md:grid-cols-1 gap-4">
                                <div className="flex items-center flex-wrap justify-between lg:justify-start">
                                    <p className='m-4'>Working Hours</p>
                                    <input type="text" name="sitename" id="sitename" className="p-2 border-none outline-none font-medium text-sm leading-5" placeholder="Working Hours" />
                                </div>
                                <div className="flex items-center flex-wrap justify-between lg:justify-start">
                                    <p className=' m-4'>Total Dispensed Water</p>
                                    <input type="text" name="sitename" id="sitename" className="p-2 border-none outline-none font-medium text-sm leading-5" placeholder="Total Dispensed Water" />
                                </div>
                                <div className="flex items-center flex-wrap justify-between lg:justify-start">
                                    <p className=' m-4'>Total Recharge Amount</p>
                                    <input type="text" name="sitename" id="sitename" className="p-2 border-none outline-none font-medium text-sm leading-5" placeholder="Total Recharge Amount" />
                                </div>
                                <div className="flex items-center flex-wrap justify-between lg:justify-start">
                                    <p className=' m-4'>Total No. Of Cards</p>
                                    <input type="text" name="sitename" id="sitename" className="p-2 border-none outline-none font-medium text-sm leading-5" placeholder="Total No. Of Cards" />
                                </div>
                                <div className="flex items-center flex-wrap justify-between lg:justify-start">
                                    <p className=' m-4'>Total Coin Collection</p>
                                    <input type="text" name="sitename" id="sitename" className="p-2 border-none outline-none font-medium text-sm leading-5" placeholder="Total Coin Collection" />
                                </div>
                            </div>
                            <DispensingUnit proDetail={proDetail} setProDetail={setProDetail} setProTitle={setProTitle}/>
                        </div>
                    </div>
            }
        </div>
        {
            proDetail &&
            <EquipmentDetail proTitle={proTitle}/>
        }
        <Notification/>
    </div>
  )
}

export default TabSection