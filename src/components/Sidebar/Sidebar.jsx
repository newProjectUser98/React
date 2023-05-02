import React, { useEffect } from "react";
import "./Sidebar.scss";
import logo from "../../assets/images/initiative-logo-main.svg";
import routs from "../../routes/routes";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { IconButton } from "@mui/material";
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import { useDispatch } from "react-redux";
import { updateheadertitle } from "../../store/HeaderTitle/headerTitleSlice";
import { logout } from "../../store/Authentication/authSlice";

const Sidebar = (props) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate();
  const location = useParams();
  const dispatch = useDispatch();
  const { open, setOpen } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const toggleNavigation = () => {
    setOpen(!open);
  };
  function getheadertitle(name) {
    return routs.find((item) => item.path === Object.values(name)[0]);
  }
  useEffect(() => {
    const headername = getheadertitle(Object.values(location));
    headername ? dispatch(updateheadertitle(headername?.name)) : dispatch(updateheadertitle('Sites under subscription'))
  }, [location]);
  useEffect(() => {
    if(setOpen){
      setOpen(matches);
    }
  }, [matches, setOpen]);
  const logOut = () => {
    dispatch(logout())
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className={open ? "sidebar-wrap" : "sidebar-wrap close"}>
      <div className="logowrap relative flex justify-center items-center">
        <Link to='/admin/dashboard'>
          <img src={logo} alt="Initiative Water" />
        </Link>
        {/* <div className="absolute right-0 rounded-full top-3 arrow-icons"> */}
        <div
          className={`absolute rounded-full ${
            open ? "right-0 top-1" : "bottom-0 right-5"
          }`}
        >
          <IconButton
            onClick={toggleNavigation}
            edge="start"
            color="inherit"
            aria-label="Menu"
          >
            {open ? (
              <KeyboardDoubleArrowLeftRoundedIcon />
            ) : (
              <KeyboardDoubleArrowRightRoundedIcon />
            )}
          </IconButton>
        </div>
      </div>
      <div className="menu-wrap">
        <ul className="py-6">
          {routs.map((menu, index) => {
            
            return menu.path !== "logout" ? 
              menu.role.includes(user?.user_role)?
              (
              <li
                key={index}
                onClick={() => {
                  dispatch(updateheadertitle(menu.name));
                }}
              >
                <NavLink
                  to={menu.path}
                  className={`menuitem flex rounded-lg py-3 px-4 my-3 cursor-pointer text-gray-900 text-sm items-center gap-x-4 `}
                >
                  <div className="flex w-6 items-center justify-center">
                    <img src={menu.menuicon} alt={menu.name} />
                  </div>
                  {/* <div className="flex names"> */}
                  <div className="names">
                    <span className={`origin-left duration-200`}>
                      {menu.name}
                    </span>
                  </div>
                </NavLink>
              </li>
              )
              : null 
            : (
              <li key={index} onClick={logOut}>
                <div
                  className={`menuitem flex rounded-lg py-3 px-4 my-3 cursor-pointer text-gray-900 text-sm items-center gap-x-4 `}
                >
                  <div className="flex w-6 items-center justify-center">
                    <img src={menu.menuicon} alt={menu.name} />
                  </div>
                  {/* <div className="flex names"> */}
                  <div className="names">
                    <span className={`origin-left duration-200`}>
                      {menu.name}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
