import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
// import Bottles from "./components/Bottles";
// import CarbonDioxyde from "./components/CarbonDioxyde";

export default function Navbar(props) {
  return (
    <>
      <div id="#header_navbar">
        <NavLink to="/Bottles">
          <button>My bottles</button>
        </NavLink>
        <NavLink to="/CarbonDioxyde">
          <button>My CO2</button>
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
