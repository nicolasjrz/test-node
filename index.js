const express = require("express");

const { dbConnection } = require("./database/config");

require("dotenv").config();

const app = express();

dbConnection();

app.use(express.json());

app.use(express.static("public"));

app.use("/api/test", require("./routes/test"));

const port = process.env.PORT || 4000;

app.listen(port);

console.log("App listen on Port   " + port);
