import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
const axios = require("axios");

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://cors-anywhere.herokuapp.com/https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/community",
      headers: {
        Authorization: `Bearer 11|lNYfuYmccaqcTsup2VZhgHavQ85FAX8OofXKah4u`,
      },
    }).then((res) => {
      setUsers(res.data);
      console.log(users);
    });
  }, [users]);

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
