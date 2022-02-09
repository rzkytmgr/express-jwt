const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const { authentication, home, tokenize } = require("./src/routes");

const PORT = process.env.PORT || 4001;
const app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded());

app.use("/", home);
app.use("/auth", authentication);
app.use("/token", tokenize);

app.listen(PORT, () => {
  console.clear();
  console.log(`[⚡] Server is running http://localhost:${PORT}`);
});
