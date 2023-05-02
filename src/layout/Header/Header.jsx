import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getheadertitle } from "../../store/HeaderTitle/headerTitleSlice";
import "./Header.scss";
import { Drawer, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../../Forms/TextError";
import { CircularProgress } from "@mui/material";
import { signupupdate } from "../../store/Authentication/authSlice";
import SnackBar from "../../hoc/SnackBarAlert/SnackBar";
import { useEffect } from "react";
import logo from "../../assets/images/mob-logo.svg";

import menuicon from "../../assets/images/menuicon.svg";
import routs from "../../routes/routes";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../store/Authentication/authSlice";
import { updateheadertitle } from "../../store/HeaderTitle/headerTitleSlice";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Checkbox from "@mui/material/Checkbox";
import NotificationComp from "../../components/Notification/NotificationComp";

import Menu from "@mui/material/Menu";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Header = () => {
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [responseData, setResponseData] = useState("");
  const [usernameltr, setUserNameLtr] = useState();
  const theme = useTheme();
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const title = useSelector(getheadertitle);
  const dispatch = useDispatch();
  const initialValues = {
    username: user?.username,
    phone: user?.contact_no,
    email: user?.email,
    company: user?.company_name,
    address1: user?.address1,
    address2: user?.address2,
    city: user?.city,
    state: user?.state,
    pincode: user?.pincode,
    gstno: user?.gst_no,
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Name is required"),
    phone: Yup.string().required("Contact Number is required"),
    email: Yup.string()
      .required("Email Address is required")
      .email("Please enter your valid Email Address"),
    company: Yup.string().required("Company Name is required"),
    address1: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string().required("Pincode is required"),
    gstno: Yup.string()
      .min(15, "Please enter valid GST number")
      .max(15, "Please enter valid GST number"),
  });
  const onSubmit = (values, submitProps) => {
    setSpinner(true);
    values.id = user?.serial_no;
    dispatch(signupupdate(values))
      .then((res) => {
        setSpinner(false);
        setResponseData(res?.payload?.data);
        setOpenSnackbar(true);
        localStorage.setItem(
          "user",
          JSON.stringify(res?.payload?.data?.Data?.user)
        );
        setTimeout(() => {
          setOpen(false);
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    const user_name = JSON.parse(localStorage.getItem("user"));
    function getFirstChar(str) {
      const firstChars = str
        ?.split(" ")
        ?.map((word) => word[0])
        ?.join("");
      return firstChars;
    }
    const userNameltr = getFirstChar(user_name?.username);
    userNameltr && setUserNameLtr(userNameltr);
    if (!open) {
      setResponseData("");
      setOpenSnackbar(false);
    }
  }, [open]);

  const logOut = () => {
    dispatch(logout())
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header-wrap">
      {matches ? (
        <>
          <div className="w-full px-10 py-3 flex justify-between items-center">
            <h3 className="text-base font-medium leading-6 font-semibold title">
              {title}
            </h3>
            <h3 className="text-base font-medium leading-6 font-semibold title">
              {user?.user_role === 'super_admin' ? 'Super Admin' : user?.user_role}
            </h3>
            <div className="flex items-center">
              <span>
                <Checkbox
                  // id="basic-button"
                  // aria-controls={openMenu ? "basic-menu" : undefined}
                  // aria-haspopup="true"
                  // aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClick}
                  className="text-bell-red mr-8"
                  icon={<NotificationsActiveIcon />}
                  checkedIcon={<NotificationsActiveIcon />}
                />
              </span>
              {user?.user_role === "super_admin" ? (
                <div
                  className="h-10 w-10 rounded-full avatar flex justify-center items-center text-white text-lg font-normal cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  {usernameltr?.toUpperCase()}
                </div>
              ) : (
                <div className="h-10 w-10 rounded-full avatar flex justify-center items-center text-white text-lg font-normal">
                  {usernameltr?.toUpperCase()}
                </div>
              )}
            </div>
          </div>
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
          >
            <NotificationComp handleClose={handleClose}/>
          </Menu>
            <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
                validateOnChange={false}
                validateOnBlur={false}
              >
                {(formik) => {
                  return (
                    <Form autoComplete="off">
                      <div className="bg-whites p-16">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6">
                            <label
                              htmlFor="username"
                              className="block text-sm font-normal leading-5 text-gray-800"
                            >
                              Name*
                            </label>
                            <Field
                              readOnly
                              type="text"
                              id="username"
                              name="username"
                              placeholder="Enter Your Name"
                              className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"
                            />
                            <ErrorMessage
                              name="username"
                              component={TextError}
                            />
                          </div>

                          <div className="col-span-6">
                            <label
                              htmlFor="phone"
                              className="block text-sm font-normal leading-5 text-gray-800"
                            >
                              Contact Number*
                            </label>
                            <Field
                              readOnly
                              type="text"
                              id="phone"
                              name="phone"
                              placeholder="Enter Your Number"
                              className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"
                            />
                            <ErrorMessage name="phone" component={TextError} />
                          </div>

                          <div className="col-span-6">
                            <label
                              htmlFor="email"
                              className="block text-sm font-normal leading-5 text-gray-800"
                            >
                              Email Address*
                            </label>
                            <Field
                              readOnly
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Enter Your Email ID"
                              className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"
                            />
                            <ErrorMessage name="email" component={TextError} />
                          </div>
                          <div className="col-span-6">
                            <label
                              htmlFor="company"
                              className="block text-sm font-normal leading-5 text-gray-800"
                            >
                              Company Name*
                            </label>
                            <Field
                              readOnly
                              type="text"
                              id="company"
                              name="company"
                              placeholder="Enter Your Company Name"
                              className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"
                            />
                            <ErrorMessage
                              name="company"
                              component={TextError}
                            />
                          </div>

                          <div className="col-span-6">
                            <label
                              htmlFor="address1"
                              className="block text-sm font-normal leading-5 text-gray-800"
                            >
                              Address1*
                            </label>
                            <Field
                              type="text"
                              id="address1"
                              name="address1"
                              placeholder="Enter Your Address1"
                              className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"
                            />
                            <ErrorMessage
                              name="address1"
                              component={TextError}
                            />
                          </div>
                          <div className="col-span-3">
                            <label
                              htmlFor="address2"
                              className="block text-sm font-normal leading-5 text-gray-800"
                            >
                              Address2
                            </label>
                            <Field
                              type="text"
                              id="address2"
                              name="address2"
                              placeholder="Enter Your Address2"
                              className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"
                            />
                          </div>
                          <div className="col-span-3">
                            <label
                              htmlFor="city"
                              className="block text-sm font-normal leading-5 text-gray-800"
                            >
                              City*
                            </label>
                            <Field
                              type="text"
                              id="city"
                              name="city"
                              placeholder="Enter Your City"
                              className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"
                            />
                            <ErrorMessage name="city" component={TextError} />
                          </div>
                          <div className="col-span-3">
                            <label
                              htmlFor="state"
                              className="block text-sm font-normal leading-5 text-gray-800"
                            >
                              State*
                            </label>
                            <Field
                              type="text"
                              id="state"
                              name="state"
                              placeholder="Enter Your State"
                              className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"
                            />
                            <ErrorMessage name="state" component={TextError} />
                          </div>
                          <div className="col-span-3">
                            <label
                              htmlFor="pincode"
                              className="block text-sm font-normal leading-5 text-gray-800"
                            >
                              Pincode*
                            </label>
                            <Field
                              type="text"
                              id="pincode"
                              name="pincode"
                              placeholder="Enter Your Pincode"
                              className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"
                            />
                            <ErrorMessage
                              name="pincode"
                              component={TextError}
                            />
                          </div>

                          <div className="col-span-6">
                            <label
                              htmlFor="gstno"
                              className="block text-sm font-normal leading-5 text-gray-800"
                            >
                              GST No
                            </label>
                            <Field
                              type="text"
                              id="gstno"
                              name="gstno"
                              placeholder="Enter GST No"
                              className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"
                            />
                            <ErrorMessage name="gstno" component={TextError} />
                          </div>
                        </div>
                        <Grid container className="flex justify-center mt-5">
                          <Grid item sm={12} md={4} className="w-full sm:w-50">
                            <div className="w-full my-5">
                              <button
                                type="submit"
                                className="w-full text-white bg-primary-color py-3 rounded-xl px-5 text-base font-medium hover:bg-text-title flex items-center justify-center"
                                disabled={
                                  formik?.isSubmitting && formik?.isValid
                                }
                              >
                                {spinner ? (
                                  <CircularProgress
                                    size={15}
                                    thickness={6}
                                    sx={{ color: "#f8f8f8" }}
                                  />
                                ) : (
                                  "Update"
                                )}
                              </button>
                            </div>
                          </Grid>
                          {/* <Grid item sm={12}className='w-full'>
                                          <div className="col-span-6 flex justify-center text-sm font-normal leading-5">
                                              <p>Existing User? <Link to="/" className='text-primary-color'>Login</Link></p>
                                          </div>
                                      </Grid> */}
                        </Grid>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
              {responseData && (
                <SnackBar
                  snackbar={openSnackbar}
                  status={responseData?.Response?.Status}
                  message={responseData?.message}
                />
              )}
            </Drawer>
        </>
      ) : (
        <>
          <div className="logowrap relative flex justify-end items-center flex-col">
            <Link to='/admin/dashboard'>
              <img src={logo} alt="Initiative Water" className="mb-2" />
            </Link>
            <div className={title === 'Dashboard' ? "flex justify-end pl-5 items-center pb-3 w-full" : "flex justify-between pl-5 items-center pb-3 w-full"}>
              {
                title !== 'Dashboard' &&
                <Link to='/admin/dashboard'>
                  <ArrowBackIcon/>
                </Link>
              }
              <div className="flex w-1/2 justify-center text-white text-lg font-normal text-center">
                {title}
              </div>
              <div className="flex w-1/4 justify-evenly items-center">
                <span>
                  <Checkbox
                    // id="basic-button"
                    // aria-controls={openMenu ? "basic-menu" : undefined}
                    // aria-haspopup="true"
                    // aria-expanded={openMenu ? "true" : undefined}
                    onClick={handleClick}
                    className="text-white"
                    icon={<NotificationsActiveIcon />}
                    checkedIcon={<NotificationsActiveIcon />}
                  />
                </span>
                {/* <img src={notification} alt="Notification" className="" /> */}
                <img
                  src={menuicon}
                  alt="Menuicon"
                  className=""
                  onClick={() => setOpen(true)}
                />
              </div>
              <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <NotificationComp handleClose={handleClose}/>
              </Menu>
            </div>
          </div>
          <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
            <div className="menu-wrap h-full bg-header-blue">
              <ul className="py-6 bg-header-blue">
                <span className="px-4 pt-2 h-6 w-6">
                  <ExpandCircleDownOutlinedIcon className="rotate-90 text-white" />
                </span>
                {routs.map((menu, index) => {
                  return menu.path !== "logout" ? (
                    menu.role.includes(user?.user_role) ? (
                      <li
                        key={index}
                        onClick={() => {
                          dispatch(updateheadertitle(menu.name));
                          setOpen(false);
                        }}
                      >
                        <NavLink
                          to={menu.path}
                          className={`menuitem flex rounded-lg py-3 px-4 my-3 cursor-pointer text-gray-900 text-sm items-center gap-x-4 `}
                        >
                          <div className="flex w-6 items-center justify-center">
                            <img src={menu.menuicon} alt={menu.name} />
                          </div>
                          <div className="names text-white">
                            <span className={`origin-left duration-200`}>
                              {menu.name}
                            </span>
                          </div>
                        </NavLink>
                      </li>
                    ) : null
                  ) : (
                    <li key={index} onClick={logOut}>
                      <div
                        className={`menuitem flex rounded-lg py-3 px-4 my-3 cursor-pointer text-gray-900 text-sm items-center gap-x-4 `}
                      >
                        <div className="flex w-6 items-center justify-center">
                          <img src={menu.menuicon} alt={menu.name} />
                        </div>
                        <div className="names text-white">
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
          </Drawer>
        </>
      )}
    </div>
  );
};

export default Header;
