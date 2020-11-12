import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
// import Bottles from "./components/Bottles";
// import CarbonDioxyde from "./components/CarbonDioxyde";

export default function Navbar({setCurrentView}) {
  return (
    <>
      <div id="#header_navbar">
        <NavLink to="/">
          <button
            className="navButton"
            onClick={() => {
              setCurrentView("Homepage");
            }}
          >
            Home
          </button>
        </NavLink>
        <NavLink to="/Bottles">
          <button
            className="navButton"
            onClick={() => {
              setCurrentView("Bottles");
            }}
          >
            My bottles
          </button>
        </NavLink>
        <NavLink to="/Co2">
          <button
            className="navButton"
            onClick={() => {
              setCurrentView("CarbonDioxyde");
            }}
          >
            My CO2
          </button>
        </NavLink>

        {/* <p>{props.data.refill_amount}</p> */}
        {/* {props.currentView === "Bottles" ? (
          <div>
            <Bottles />
          </div>
        ) : (
          <div>
            <CarbonDioxyde />
          </div>
        )} */}
      </div>
    </>
  );
}
