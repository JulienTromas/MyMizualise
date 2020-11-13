import React from "react";
import Background from "../img/pexels-daria-shevtsova-1680140.jpg";
import {NavLink} from "react-router-dom";
import MymizuLogo from "../img/mymizu-logo-1.svg";

export default function Home({CurrentView, setCurrentView}) {
  return (
    <>
      <div className="Home">
        <div className="header" style={{backgroundImage: `url(${Background})`}}>
          <h1 className="headerText">mymizualize</h1>
          <p className="headerNote">
            A guide to visualizing mymizu's impact on the environment
          </p>
          {/* <button onClick={getData}>Show me the Money</button>
            <h1>{data.refill_amount}</h1> */}
        </div>
        <div className="routingDiv">
          <div className="routeBoxes">
            <p className="boxTitles">Plastic Bottles Saved</p>
            <p className="textDescription">
              The amount of plastic water bottles that mymizu's users have saved are
              recorded everyone month and can be beautifully visualized here.
            </p>
            <div className="buttonBox">
              <NavLink to="/Bottles">
                <button
                  className="routingButtons"
                  onClick={() => {
                    setCurrentView("Bottles");
                  }}
                >
                  SEE BOTTLES SAVED HERE
                </button>
              </NavLink>
            </div>
          </div>
          <div className="routeBoxes">
            <p className="boxTitles">CO2 Saved</p>
            <p className="textDescription">
              Try our handy map tool to understand how much CO2 you can save by using
              mymizu!
            </p>
            <div className="buttonBox">
              <NavLink to="/CarbonDioxyde">
                <button
                  className="routingButtons"
                  onClick={() => {
                    setCurrentView("CarbonDioxyde");
                  }}
                >
                  SEE CO2 SAVED HERE
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="footerDiv">
          <h2>
            <span className="footerText">Team Wave X </span>
            <a href="https://www.mymizu.co/" target="_blank">
              <img className="mymizuLogo" src={MymizuLogo} alt="mymizu" />
            </a>
          </h2>
        </div>
      </div>
    </>
  );
}
