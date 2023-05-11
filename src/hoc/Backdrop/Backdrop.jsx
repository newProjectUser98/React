import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Comp_Time = [
    {
        rwp_state:20,
        rwp_setting:10,
    },
    {
        rwp_setting:10,
    },
    {
        rwp_setting:10,
    },
]
export default function BackdropComp({open}) {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}