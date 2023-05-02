import "./App.scss";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./layout/Login";
import Admin from "./layout/Admin";
import routs from "./routes/routes";
import { useEffect } from "react";
function App() {
  let navigate = useNavigate();

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
