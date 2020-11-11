const express = require("express");
const app = express();
app.use(express.static("./"));
const axios = require("axios");
const csv = require("csv-parser");
const fs = require("fs")

let data;
let users = [];
let litters = 0

axios({
  method: "GET",
  url:
    "https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/community",
  headers: {
    Authorization: `Bearer 11|lNYfuYmccaqcTsup2VZhgHavQ85FAX8OofXKah4u`,
  },
}).then((res) => {data = res.data; console.log(data)});

app.get("/api/users", (res, req) => {
  axios({
    method: "GET",
    url:
      "https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/community",
    headers: {
      Authorization: `Bearer 11|lNYfuYmccaqcTsup2VZhgHavQ85FAX8OofXKah4u`,
    },
  }).then((json) => res.send(json.data));
})

async function getUsers() {

  return await fs.createReadStream("./refills-2.csv")
        .pipe(csv())
        .on("data", (row) => {
          litters += +row["500"];
        })
        .on("end", () => {
          console.log(litters);
        });
}

getUsers()


app.listen(process.env.PORT || 3000, () => {
  console.log("listening at port 3000");
});

module.exports = {data, users}
