import { Alert, Snackbar, } from '@mui/material'
import React, {useState, forwardRef} from 'react'
import { useEffect } from 'react';

const SnackBar = ({snackbar, status, message}) => {
    const [openSnackbar, setOpenSnackbar] = useState(false)

    const handleCloaseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackbar(false);
    };
    const SnackBarAlert = forwardRef(
        function SnackBarAlert(props, ref){
          return <Alert elevation={6} ref={ref} {...props}/>
        }
    )
    useEffect(()=>{
      setOpenSnackbar(snackbar)
      return ()=> setOpenSnackbar(false)
    },[snackbar])
  return (
    <Snackbar autoHideDuration={4000} open={openSnackbar} onClose={handleCloaseSnackbar} anchorOrigin={{vertical: 'top',horizontal: 'center'}}>
        <SnackBarAlert onClose={handleCloaseSnackbar} severity={status}>
            { message }
        </SnackBarAlert>
    </Snackbar>
  )
}

export default SnackBar