import React, { useEffect, useState } from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        borderRadius : 40,
        boxShadow: '0px 0px 30px rgba(56, 71, 109, 0.09)',
        width:"100%"
    },
    dialogTitle: {
        //paddingRight: '0px'
        background: 'linear-gradient(270deg, #BBE2E4 8.66%, #B68FE7 103.05%)'
    }
}))
const Popup = (props) => {
    let {title, children, openPopup, setOpenPopup, setActionData , setTabForm } = props;
    const [tabValue, setTabValue] = useState(title)
    const classes = useStyles();

    useEffect(()=>{
        if(setTabForm){
            setTabForm(tabValue)
        }
    },
    // eslint-disable-next-line
    [tabValue])
    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div style={{ flexGrow: 1 }} className={tabValue === title ? 'mx-5 p-1 border-b-2 text-white text-lg font-semibold leading-5 cursor-pointer' : 'mx-5 p-1 text-gray-300 text-lg font-semibold leading-5 cursor-pointer'} onClick={()=>setTabValue(title)}>
                            {title}
                        </div>
                        {
                            title === 'Add Sites' &&
                                <div style={{ flexGrow: 1 }} className={tabValue === 'Drafts' ? 'mx-5 p-1 border-b-2 text-white text-lg font-semibold leading-5 cursor-pointer' : 'mx-5 p-1 text-gray-300 text-lg font-semibold leading-5 cursor-pointer'}  onClick={()=>setTabValue('Drafts')}>
                                    Drafts
                                </div>
                        }
                    </div>
                    <Button
                        color="secondary"
                        onClick={()=>{setOpenPopup(false); if(setActionData)setActionData({id:'', action: ''})}}>
                        <CloseIcon />
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Popup