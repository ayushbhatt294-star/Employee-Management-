import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import AllTask from "./Components/Other/AllTask";
import { AuthContext } from "./Context/AuthContext";

const App = () => {
  const [User, SetUser] = useState(null);
  const [LoggedInUser, SetLogged] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    const LoggedIn = localStorage.getItem("LoggedIn");

    if (LoggedIn) {
      const data = JSON.parse(LoggedIn);

      SetUser(data.role);

      if (data.employee) {
        SetLogged(data.employee);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      SetUser("admin");

      localStorage.setItem(
        "LoggedIn",
        JSON.stringify({
          role: "admin",
        })
      );
    } else {
      const employees =
        JSON.parse(localStorage.getItem("employees")) || [];

      const employee = employees.find(
        (e) => email === e.gmail && password === e.pass
      );

      if (employee) {
        SetUser("employee");
        SetLogged(employee);

        localStorage.setItem(
          "LoggedIn",
          JSON.stringify({
            role: "employee",
            employee: employee,
          })
        );
      } else {
        alert("invalid user");
      }
    }
  };

  const handleLogout = () => {
    SetUser(null);
    SetLogged(null);
    localStorage.removeItem("LoggedIn");
  };

  return (
    <Routes>
      {!User ? (
        <>
          <Route
            path="/login"
            element={<Login handleLogin={handleLogin} />}
          />

          <Route
            path="*"
            element={<Navigate to="/login" />}
          />
        </>
      ) : User === "admin" ? (
        <>
          <Route
            path="/admin"
            element={
              <AdminDashboard
                handleLogout={handleLogout}
              />
            }
          />

          <Route
            path="/AllTask"
            element={<AllTask />}
          />

          <Route
            path="*"
            element={<Navigate to="/admin" />}
          />
        </>
      ) : (
        <>
          <Route
            path="/employee"
            element={
              <EmployeeDashboard
                Data={LoggedInUser}
                handleLogout={handleLogout}
              />
            }
          />

          <Route
            path="*"
            element={<Navigate to="/employee" />}
          />
        </>
      )}
    </Routes>
  );
};

export default App;