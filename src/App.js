import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bottles from './components/Bottles'
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  const [scroll, setScroll] = useState(0)

  async function getData(){
    await axios({
      method: "GET",
      url: "/api/refills"
    }).then(res => {
      setData(res.data)
      console.log(data.refill_amount)
    });
  }  

  return (
    <div className="App">
      <div className="header">
        <h1 className="headerText">mymisualize</h1>
        <p className="headerNote">A guide to visualizing mymizu's impact on the environment</p>
      </div>
      <button onClick={getData}>Show me the Money</button>
        <div>
          <h1>{data.refill_amount}</h1>
        </div>
        <>
      <BrowserRouter>
        <div>
        <Navbar />
            <Switch>
              <Route path="/Bottles" render={() => <Bottles scroll={scroll} setScroll={setScroll}/>} />
              
            </Switch>
          </div> 
          <div>
            {/* Insert login area */}
          </div>
      </BrowserRouter>
    </>
    </div>
  );
}

export default App;
