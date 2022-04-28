// import logo from "./logo.svg";
import routes from "./config/routes";
import "./App.scss";
import React from "react";
// import { Alert, Card, DatePicker } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
          key={index}
          path={route.path}
          element={
            <route.layout>
              <route.component></route.component>
              <h2>Child Component</h2>
            </route.layout>
          }></Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
