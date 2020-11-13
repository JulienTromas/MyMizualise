import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
// import Bottles from "./components/Bottles";
// import CarbonDioxyde from "./components/CarbonDioxyde";

export default function Navbar({setCurrentView}) {
  return (
    <>
      <div className="navbarDiv">
        <div className="navButtonDiv">
          <NavLink to="/">
            <button
              className="navButton type1"
              onClick={() => {
                setCurrentView("Homepage");
              }}
            >
              Home
            </button>
          </NavLink>
        </div>
        <div className="navButtonDiv">
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
        </div>
        <div className="navButtonDiv">
          <NavLink to="/CarbonDioxyde">
            <button
              className="navButton"
              onClick={() => {
                setCurrentView("Bottles");
              }}
            >
              My CO2
            </button>
          </NavLink>
        </div>

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
