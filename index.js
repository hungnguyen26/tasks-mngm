const express = require("express");
const cors = require("cors");
const database = require("./config/database");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const routerApiVer1 = require("./api/v1/router/index.router");

const app = express();
const port = process.env.PORT;

app.use(cors());

database.connect(); // kết nối db

app.use(cookieParser());

// parse application/json
app.use(bodyParser.json());

// Router Version 1
routerApiVer1(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
