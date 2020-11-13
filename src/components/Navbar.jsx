import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import Background from "../img/pexels-daria-shevtsova-1680140.jpg";
import Logo from "../img/mymizu-logo-2.svg";

export default function Navbar({setCurrentView}) {
  return (
    <>
      <div className="navbarDiv" style={{backgroundImage: `url(${Background})`}}>
        <div className="navButtonDiv">
          <NavLink to="/">
            <img
              src={Logo}
              alt="logo"
              className="navLogo"
              onClick={() => {
                setCurrentView("Homepage");
              }}
            />
          </NavLink>
        </div>
        <div className="navButtonDiv">
          <NavLink to="/Bottles">
            <button
              alt="My Bottles"
              className="navButton"
              onClick={() => {
                setCurrentView("Bottles");
              }}
            >
              My Bottles
            </button>
          </NavLink>
        </div>
        <div className="navButtonDiv">
          <NavLink to="/CarbonDioxyde">
            <button
              className="navButton"
              alt="My CO2"
              onClick={() => {
                setCurrentView("Bottles");
              }}
            >
              My CO2
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
