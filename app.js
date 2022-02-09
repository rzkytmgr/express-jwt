const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();

const { authentication, home, tokenize } = require("./src/routes");

const PORT = process.env.PORT || 4001;
const app = express();

app.use(morgan("tiny"));

app.use(bodyParser());
app.use(bodyParser.urlencoded());

app.use("/auth", authentication);
app.use("/token", tokenize);
app.use("/", home);

app.listen(PORT, () => {
  console.clear();
  console.log(`[⚡] Server is running http://localhost:${PORT}`);
});
