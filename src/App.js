import React, {useState} from 'react'
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState([])

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
      <button onClick={getData}>Show me the Money</button>
        <div>
          <h1>{data.refill_amount}</h1>
        </div>
    </div>
  );
}

export default App;
