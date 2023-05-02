import controlicon from "../assets/images/control-icon.svg";
import reportsicon from "../assets/images/reports-icon.svg";

import controlandmonitor from "../pages/ControlAndMonitorSite";
import reports from "../pages/Reports";

const routs = [
  {
    path: "control-and-monitor-site",
    name: "Control & Monitor Site",
    slug: "control-and-monitor-site",
    menuicon: controlicon,
    role: ["super_admin", "administrator", "supervisor", "operator"],
    component: controlandmonitor,
  },
  {
    path: "reports",
    name: "Reports",
    slug: "reports",
    menuicon: reportsicon,
    role: ["super_admin", "administrator", "supervisor", "operator"],
    component: reports,
  },
];

export default routs;
