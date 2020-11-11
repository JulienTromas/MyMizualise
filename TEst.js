const axios = require("axios");

axios({
  method: "GET",
  url:
    "https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/search/area?c1=35.671812626599866&c2=139.73655447363853&c3=35.64245244856602&c4=139.75432142615318",
  headers: {
    Authorization: `Bearer 12|CrvdJ0debFsxpVfobVHCurcqMNk9zUkBhWpnwIlT`,
  },
}).then((res) => console.log(res.data));