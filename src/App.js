import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./layout/Login";
import Admin from "./layout/Admin";
import routs from "./routes/routes";
import { useEffect } from "react";
import axios from "axios";

let components = [
  {
    cnd: { cnd: "conductivity" },
    panel: {
      status: true,
      raw_water_tank: "full",
      treated_water_tank: "full",
      low_pressure_switch: "low",
      high_pressure_switch: "low",
      dosing_pump: true,
      error: "operational",
    },
    atm: {
      status: "normal",
      new_transaction_type: "coin",
    },
  },
];

let ErrorMSg = [
  {
    site_Name: "initiative Water",
    time: "3 min ago",
    component_name: "rwp",
    error_msg: "please use numbers not a string",
  },
  {
    site_Name: "Water initiative ",
    time: "5 min ago",
    component_name: "cnd/tds",
    error_msg: "please use string not a number",
  },
  {
    site_Name: "Water treatment",
    time: "10 min ago",
    component_name: "hpp",
    error_msg: "enter a valid value",
  },
];
function App() {
  localStorage.setItem("components", JSON.stringify(components));
  localStorage.setItem("ErrorMSg", JSON.stringify(ErrorMSg));

  useEffect(() => {
    axios.defaults.baseURL =
      window.location.origin === "http://localhost:3000"
        ? "http://127.0.0.1:8000"
        : "http://65.2.189.24:8000";

    let wsUrl =
      window.location.origin === "http://localhost:3000"
        ? "127.0.0.1:8000"
        : "65.2.189.24";
    const ws = new WebSocket(`ws://${wsUrl}/ws/chat/`);

    ws.onopen = function () {
      alert("WebSocket Connected Successfully");
      console.log("connection is opened");
      ws.send("Thanks for connecting");
    };

    ws.onmessage = function (event) {
      console.log(event);
      console.log("message is received");
      alert(event.data);
      // Show desktop notification
      if (Notification.permission === "granted") {
        new Notification(event.data);
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
          if (permission === "granted") {
            new Notification(event.data);
          }
        });
      }
      localStorage.setItem("updateValue", JSON.stringify(event.data));
    };
    ws.onclose = function (event) {
      console.log("connection is closed");
    };

    ws.onerror = function (event) {
      console.log("something went wrong");
    };
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));
  // useEffect(()=>{

  //   if (user === null || user === 'undefined') {
  //     navigate("/");
  //   }
  // },[user])

  return (
    <div className="iw">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/admin/*" element={<Admin />}>
          {routs?.map((item, index) => {
            if (item?.role?.includes(user?.user_role)) {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={<item.component />}
                />
              );
            } else {
              return (
                <Route
                  key={index}
                  path="*"
                  element={<Navigate to="/" replace />}
                />
              );
            }
          })}
        </Route>
      </Routes>
    </div>
  );
}
export default App;
