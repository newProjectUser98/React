import { Form, Formik, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextError from "../TextError";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { userlogin, userotplogin } from "../../store/Authentication/authSlice";
import { CircularProgress } from "@mui/material";
import SnackBar from "../../hoc/SnackBarAlert/SnackBar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const initialValuesEmail = {
  email: "",
  password: "",
};
const validationSchemaEmail = Yup.object({
  email: Yup.string()
    .required("Email ID is required")
    .email("Please enter your valid Email ID")
    .matches(/^(?!\s+$).*/, "This field cannot contain only blankspaces"),
  password: Yup.string().required("Password is required"),
});
const initialValuesMob = {
  phone: "",
  otpnumber: "",
};
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const validationSchemaMOb = Yup.object({
  phone: Yup.string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  otpnumber: Yup.string()
    .required("OTP is required")
    .matches(phoneRegExp, "OTP is not valid"),
});
const Login = () => {
  const [resData, setResData] = useState("");
  const [status, setStatus] = useState("");
  const [loginType, setLoginType] = useState("email");
  const [spinner, setSpinner] = useState(false);
  const [counter, setCounter] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [responseData, setResponseData] = useState("");
  const [sentMob, setSentMob] = useState(false);
  const [uid, setUid] = useState();
  const [passwordType, setPasswordType] = useState("password");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sentmob = () => {
    setResData("");
    setStatus("");
    setOpenSnackbar(false);
    setResponseData("");
    let phoneval = document.getElementById("phone").value;
    const values = {
      login_type: "phone",
      phone: phoneval,
    };
    if (phoneval !== "") {
      setSpinner(true);
      dispatch(userlogin(values))
        .then((res) => {
          setResponseData(res?.payload?.data);
          setOpenSnackbar(true);
          setSpinner(false);
          setSentMob(true);
          if (res?.payload?.data?.Response?.Status === "success") {
            let time = res?.payload?.data?.valid_for;
            setCounter(time);
            setUid(res?.payload?.data?.Data?.uid);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const onSubmitEmail = (values, submitProps) => {
    setResData("");
    setStatus("");
    values.login_type = loginType;
    dispatch(userlogin(values))
      .then((res) => {
        setResData(res?.payload?.data);
        setStatus(res?.payload?.data?.Response?.Status);
        submitProps.resetForm();
        if (res?.payload?.data?.Data?.token) {
          navigate("/admin/control-and-monitor-site");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const onSubmitMob = (values, submitProps) => {
    setResData("");
    setStatus("");
    setSentMob(false);
    setCounter(() => {
      return 0;
    });
    values.login_type = loginType;
    values.id = uid;
    dispatch(userotplogin(values))
      .then((res) => {
        setCounter(() => {
          return 0;
        });
        setResData(res?.payload?.data);
        setStatus(res?.payload?.data?.Response?.Status);
        submitProps.resetForm();
        if (res?.payload?.data?.Data?.token) {
          navigate("/admin/dashboard");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  useEffect(() => {
    if (counter !== 0 && sentMob) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      setCounter(0);
    }
  }, [counter]);
  return (
    <>
      {resData?.message && (
        <div className="flex bg-gray-bg text-center my-10">
          <p
            className={
              status === "success"
                ? "text-green-900 text-center w-full p-5 text-lg font-bold leading-6"
                : "text-red-600 text-center w-full p-5 text-lg font-bold leading-6"
            }
          >
            {" "}
            {resData?.message}
          </p>
        </div>
      )}
      {loginType === "email" && (
        <Formik
          initialValues={initialValuesEmail}
          validationSchema={validationSchemaEmail}
          onSubmit={onSubmitEmail}
          enableReinitialize
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(formik) => {
            return (
              <Form autoComplete="off">
                <div className="bg-whites my-5">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-normal leading-5 text-gray-800"
                      >
                        Email ID*
                      </label>
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email Id"
                        className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"
                      />
                      <ErrorMessage name="email" component={TextError} />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="password"
                        className="block text-sm font-normal leading-5 text-gray-800"
                      >
                        Password*
                      </label>
                      <div className="flex items-center">
                        <Field
                          type={passwordType}
                          id="password"
                          name="password"
                          placeholder="Password"
                          className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"
                        />
                        <button onClick={togglePassword} type="button">
                          {passwordType === "password" ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </button>
                      </div>
                      <ErrorMessage name="password" component={TextError} />
                    </div>
                    <div className="col-span-6 flex justify-end text-xs font-normal leading-5">
                      <p>
                        Forgot Password?{" "}
                        <Link
                          to="forgotpassword"
                          className="text-primary-color"
                        >
                          click here
                        </Link>
                      </p>
                    </div>
                  </div>
                  <Grid container className="flex justify-center">
                    <Grid item sm={12} md={4} className="w-full sm:w-50">
                      <div className="w-full my-5">
                        <button
                          type="submit"
                          className="w-full text-white bg-primary-color py-2 rounded-xl px-5 text-base font-medium hover:bg-text-title"
                          disabled={formik?.isSubmitting && formik?.isValid}
                        >
                          {formik?.isSubmitting && formik?.isValid ? (
                            <CircularProgress
                              size={15}
                              thickness={6}
                              sx={{ color: "#f8f8f8" }}
                            />
                          ) : (
                            "Login"
                          )}
                        </button>
                      </div>
                    </Grid>
                    <Grid item sm={12} className="w-full">
                      <div className="col-span-6 flex justify-center text-sm font-normal leading-5">
                        <p>
                          New User?{" "}
                          <Link to="signup" className="text-primary-color">
                            Sign up
                          </Link>
                        </p>
                      </div>
                    </Grid>
                    <Grid item sm={12} className="w-full my-2">
                      <div className="col-span-6 flex justify-center text-sm font-normal leading-5">
                        {loginType === "email" && (
                          <p
                            className="text-primary-color hover:text-text-title cursor-pointer"
                            onClick={() => setLoginType("phone")}
                          >
                            Login with registered Mobile number
                          </p>
                        )}
                        {loginType === "phone" && (
                          <p
                            className="text-primary-color hover:text-text-title cursor-pointer"
                            onClick={() => setLoginType("email")}
                          >
                            Login with registered Email address
                          </p>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
      {loginType === "phone" && (
        <Formik
          initialValues={initialValuesMob}
          validationSchema={validationSchemaMOb}
          onSubmit={onSubmitMob}
          enableReinitialize
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(formik) => {
            return (
              <Form autoComplete="off">
                <div className="bg-whites my-5">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 xl:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-normal leading-5 text-gray-800"
                      >
                        Mobile Number*
                      </label>
                      <Field
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Enter Your Mobile Number"
                        className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"
                      />
                      <ErrorMessage name="phone" component={TextError} />
                    </div>
                    <div className="col-span-6 xl:col-span-2">
                      <button
                        type="button"
                        onClick={sentmob}
                        className="w-full text-primary-color hover:text-white hover:bg-primary-color border border-primary-color py-2 rounded-xl px-5 text-base font-medium mt-8"
                        disabled={spinner}
                      >
                        {spinner ? (
                          <CircularProgress
                            size={15}
                            thickness={6}
                            sx={{ color: "#464e5f" }}
                          />
                        ) : (
                          "Get OTP"
                        )}
                      </button>
                    </div>

                    <div className="col-span-6 xl:col-span-3">
                      <label
                        htmlFor="otpnumber"
                        className="block text-sm font-normal leading-5 text-gray-800"
                      >
                        OTP Number*
                      </label>
                      <Field
                        type="text"
                        id="otpnumber"
                        name="otpnumber"
                        placeholder="Enter OTP Number"
                        className="mt-2 leading-7 px-4 py-2 focus:border-b-2 focus:outline-0 block w-full text-base font-normal border-b-2"
                      />
                      <ErrorMessage name="otpnumber" component={TextError} />
                    </div>
                    <div className="col-span-6 xl:col-span-3">
                      {counter !== 0 && (
                        <p className="text-green-500 w-full py-2 px-5 text-base font-medium mt-8">
                          Resend OTP in {counter} second
                        </p>
                      )}
                    </div>
                  </div>
                  <Grid container className="flex justify-center">
                    <Grid item sm={12} md={4} className="w-full sm:w-50">
                      <div className="w-full my-5">
                        <button
                          type="submit"
                          className="w-full text-white bg-primary-color py-2 rounded-xl px-5 text-base font-medium hover:bg-text-title"
                          disabled={formik?.isSubmitting && formik?.isValid}
                        >
                          {formik?.isSubmitting && formik?.isValid ? (
                            <CircularProgress
                              size={15}
                              thickness={6}
                              sx={{ color: "#f8f8f8" }}
                            />
                          ) : (
                            "Login"
                          )}
                        </button>
                      </div>
                    </Grid>
                    <Grid item sm={12} className="w-full">
                      <div className="col-span-6 flex justify-center text-sm font-normal leading-5">
                        <p>
                          New User?{" "}
                          <Link to="signup" className="text-primary-color">
                            Sign up
                          </Link>
                        </p>
                      </div>
                    </Grid>
                    <Grid item sm={12} className="w-full my-2">
                      <div className="col-span-6 flex justify-center text-sm font-normal leading-5">
                        {loginType === "email" && (
                          <p
                            className="text-primary-color hover:text-text-title cursor-pointer"
                            onClick={() => setLoginType("phone")}
                          >
                            Login with registered Mobile number
                          </p>
                        )}
                        {loginType === "phone" && (
                          <p
                            className="text-primary-color hover:text-text-title cursor-pointer"
                            onClick={() => setLoginType("email")}
                          >
                            Login with registered Email address
                          </p>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}

      {responseData && (
        <SnackBar
          snackbar={openSnackbar}
          status={responseData?.Response?.Status}
          message={responseData?.message}
        />
      )}
    </>
  );
};

export default Login;
