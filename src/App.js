import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { getData } from "./utils/";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0)
      getData().then((data) => {
        setData(data);
        console.log(data);
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
