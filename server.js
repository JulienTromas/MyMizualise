const express = require("express");
const axios = require("axios");
require("dotenv").config();

//server initialization
const app = express()
const PORT = process.env_PORT || 8080
const GKEY = process.env.GOOGLE_DEV_KEY

//middleware
app.use(express.static("./"));

//test route
app.get('/api/hello', (req, res)=> {
  res.send("jay")
})

//route from mymizu api for community refills
app.get('/api/refills', (req, res) => {
  
  axios({
    method: "GET",
    url: "https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/community",
    headers: {
      Authorization: `Bearer ${process.env.DEV_KEY}`,
    },
  }).then((response) => {
    console.log(response.data);
    res.json(response.data);
  });
});

//route from google maps api 
app.get('/api/distance', async (req, res) => {
  try{
    const city = 'new+york+city'
    const {data} = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${city}&key=${GKEY}`
    )
    console.log(data)
    res.json(data.results[0].geometry.location)
  }
  catch (err) {
    console.log('sorry bro')
  }
})

app.listen(PORT,() => {
    console.log(`listening at http://localhost:${PORT}`)
})
