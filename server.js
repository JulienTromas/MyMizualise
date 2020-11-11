const express = require("express")
const fetch = require("node-fetch");
const axios = require("axios");
const { response } = require("express");
require('dotenv').config()

//server initialization
const app = express()
const PORT = process.env_PORT || 3000


//middleware
app.use(express.static("./"))

// axios({
//     method: "GET",
//     url:
//       "https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/community",
//     headers: {
//       Authorization: `Bearer ${process.env.DEV_KEY}`,
//     },
//   }).then((res) => console.log(res.data));

app.get('/api/hello', (req, res)=> {
  res.send("jay")
})

app.get('/api/refills', (req, res) => {
  axios({
    method: "GET",
    url:
      "https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/community",
    headers: {
      Authorization: `Bearer ${process.env.DEV_KEY}`,
    },
  })
  .then((response) => {
    console.log(response.data); 
    res.json(response.data)
  })
})

app.listen(PORT,() => {
    console.log(`listening at http://localhost:${PORT}`)
})

