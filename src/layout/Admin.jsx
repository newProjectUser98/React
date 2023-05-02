import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import {useMediaQuery, useTheme } from "@material-ui/core";

//import { useEffect } from 'react';
const Admin = () => {
  //const navigate = useNavigate()
  const [open, setOpen] = useState(true);
  //const [token, setToken] = useState(false)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? (
    <div className="flex w-full">
      <Sidebar open={open} setOpen={setOpen} />
      <div
        className={
          open
            ? "content bg-white w-full pl-72"
            :
              matches ?  
              " content bg-white w-full pl-20"
              :
                "content bg-white w-full pl-0"
        }
        style={{ transition: "all 0.5s ease" }}
      >
        <Header />
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Admin;
