const fs = require("fs");

let rawdata = fs.readFileSync("preMustache.json");
let json = JSON.parse(rawdata);

fs.writeFile(
  `.env-${process.env.USRV_STAGE}.json`,
  json["Parameter"]["Value"],
  "utf8",
  () => {}
);
