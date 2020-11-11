const express = require("express");
const app = express();
const axios = require("axios");
const csv = require("csv-parser");
const fs = require("fs");
//const cors = require("cors");
app.use(express.static("./"));
require("dotenv").config();

//app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

let data;
let litters = 0;

axios({
  method: "GET",
  url: "https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/community",
  headers: {
    Authorization: `Bearer ${process.env.DEV_KEY}`,
  },
}).then((res) => {
  data = res.data;
  console.log(data);
});

// app.get("/api/users", (res, req) => {
//   axios({
//     method: "GET",
//     url:
//       "https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/community",
//     headers: {
//       Authorization: `Bearer ${process.env.DEV_KEY}`,
//     },
//   }).then((x) => res.send(x.data));
// })

// async function getUsers() {

//   return await fs.createReadStream("./refills-2.csv")
//         .pipe(csv())
//         .on("data", (row) => {
//           litters += +row["500"];
//         })
//         .on("end", () => {
//           console.log(litters);
//         });
// }

// getUsers()

app.listen(process.env.PORT || 5000, () => {
  console.log("listening at port 5000");
});

module.exports = { data };
