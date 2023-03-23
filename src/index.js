const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const route = require("./routes/index");
const Database = require("./config/db/DBconnection");
Database.connect();
const app = express();

app.use(morgan("common"));
app.use(cors({ origin: "*" }));
app.use(express.json());
route(app);
app.use(express.static("src"));
app.listen(8000, () => {
  console.log("server is running");
});
