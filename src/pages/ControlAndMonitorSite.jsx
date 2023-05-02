import React from 'react'
import ControlAndMonitor from '../components/ControlAndMonitor/ControlAndMonitorWeb/ControlAndMonitor'
import { useMediaQuery, useTheme } from "@material-ui/core";
import ControlAndMonitoringMob from '../components/ControlAndMonitor/ControlAndMonitorMob/ControlAndMonitoringMob';

const ControlAndMonitorSite = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div>
      {
        matches ?
        <ControlAndMonitor/>
        :
        <ControlAndMonitoringMob />
      }
    </div>
  )
}

export default ControlAndMonitorSite