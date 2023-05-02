import React, { useState } from 'react'
import { Grid } from '@mui/material'
import './Controlandmonitor.scss'
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import StatusSection from './StatusSection';

const SearchSection = ({searchdata}) => {
    const [selectvalue, setSelectValue] = useState('')
    return (
        <Grid container spacing={5} className='mb-5'>
            <Grid item xs={12} lg={6} xl={8}>
                <div className='search-section bg-gray-bg'>
                    <Grid container spacing={3} className="flex items-center justify-equal" sx={{padding:0}}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                            <div className="flex items-center relative justify-between">
                                <p className="text-sm font-medium leading-5 w-40 my-1">Select Site</p>
                                <div className="flex rounded-xl items-center relative w-full bg-white justify-between px-3 my-1">
                                    <input
                                        type="text"
                                        name="sitename"
                                        id="sitename"
                                        className="py-2 w-full mr-2 sitename border-none outline-none font-medium text-sm leading-5"
                                        placeholder="Search by site name"
                                    />
                                    <SearchIcon className='searchicon'/>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                            <Select fullWidth displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }} 
                                name='state' id='state' value={selectvalue} 
                                onChange={ (e) => { setSelectValue(e.target.value)}} 
                                sx={{padding:0, margin:0}} >
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
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid item xs={12} lg={6} xl={4} className='pr-0'>
                <StatusSection/>
            </Grid>
        </Grid>
    )
}

export default SearchSection