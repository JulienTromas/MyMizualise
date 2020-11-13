import React, {useEffect, useState} from "react";
import "./App.css";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Bottles from "./components/Bottles";
import "./App.css";
import Background from "./img/pexels-daria-shevtsova-1680140.jpg";
import CarbonDioxyde from "./components/CarbonDioxyde";
import "./App.css";
import axios from "axios";
import MymizuLogo from "./img/mymizu-logo-1.svg";

function App() {
  const [data, setData] = useState([]);
  const [currentView, setCurrentView] = useState("Homepage");
  const [scroll, setScroll] = useState(0);

  // async function getData() {
  //   await axios({
  //     method: "GET",
  //     url: "/api/refills",
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(data.refill_amount);
  //   });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <BrowserRouter>
      {currentView === "Homepage" ? (
        <Home currentView={currentView} setCurrentView={setCurrentView} />
      ) : (
        <div className="navbarDiv">
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
