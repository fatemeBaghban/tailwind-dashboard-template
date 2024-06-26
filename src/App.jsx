import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import SendSMS from "./pages/marketing/sms/sedsms";
import CustomersFilter from "./pages/marketing/sms/customerFilter";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Dashboard />}>
          <Route path="/send" element={<SendSMS />} />
          <Route path="createnumber" element={<CustomersFilter/>} />{" "}
        </Route>
      </Routes>
    </>
  );
}

export default App;
