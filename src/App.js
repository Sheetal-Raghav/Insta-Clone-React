// import logo from './logo.svg';
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landingpage from "./LandingPage/landing_page";
import Postview from "./PostView/postview";

function App() {
  return (
    <div className="wrapper">
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/postview" element={<Postview/>} />
        </Routes>
    </div>
  );
}

export default App;
