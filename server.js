const express = require("express");
const app = express();
app.use(express.static("./"));
const axios = require("axios");

let data;

axios({
  method: "GET",
  url:
    "https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/community",
  headers: {
    Authorization: `Bearer 11|lNYfuYmccaqcTsup2VZhgHavQ85FAX8OofXKah4u`,
  },
}).then((res) => {data = res.data; console.log(data)});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening at port 3000");
});

module.exports = data
