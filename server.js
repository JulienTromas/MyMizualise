const express = require("express")
const axios = require("axios");
require('dotenv').config()

//server initialization
const app = express()
const PORT = process.env_PORT || 8080


//middleware
app.use(express.static("./"))

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
