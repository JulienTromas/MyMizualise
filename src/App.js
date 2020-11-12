import React, {useEffect, useState} from "react";
import "./App.css";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Navbar from "./components/Navbar";
import Bottles from "./components/Bottles";
import CarbonDioxyde from "./components/CarbonDioxyde";
import "./App.css";
import axios from "axios";
import Background from "./img/pexels-daria-shevtsova-1680140.jpg";

function App() {
  const [data, setData] = useState([]);
  const [currentView, setCurrentView] = useState("Homepage");
  const [scroll, setScroll] = useState(0);

  async function getData() {
    await axios({
      method: "GET",
      url: "/api/refills",
    }).then((res) => {
      setData(res.data);
      console.log(data.refill_amount);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      {currentView === "Homepage" ? (
        <div className="App">
          <div className="header" style={{backgroundImage: `url(${Background})`}}>
            <h1 className="headerText">mymizualize</h1>
            <p className="headerNote">
              A guide to visualizing mymizu's impact on the environment
            </p>
          </div>
          <div>
            <button onClick={getData}>Show me the Money</button>
            <div>
              <h1>{data.refill_amount}</h1>
            </div>
            <NavLink to="/Bottles">
              <button
                onClick={() => {
                  setCurrentView("Bottles");
                }}
              >
                My bottles
              </button>
            </NavLink>
            <NavLink to="/Co2">
              <button
                onClick={() => {
                  setCurrentView("CarbonDioxyde");
                }}
              >
                My CO2
              </button>
            </NavLink>
          </div>
        </div>
      ) : (
        <div>
          <Navbar currentView={currentView} setCurrentView={setCurrentView} data={data} />
        </div>
      )}
      <div>
        <Switch>
          <Route
            path="/Bottles"
            render={() => (
              <Bottles
                data={data}
                scroll={scroll}
                setScroll={setScroll}
                setCurrentView={setCurrentView}
              />
            )}
          />
          <Route
            path="/CarbonDioxyde"
            render={() => (
              <CarbonDioxyde data={data} scroll={scroll} setScroll={setScroll} />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
