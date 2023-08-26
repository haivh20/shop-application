const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const app = express();

app.use(morgan("combined"));
app.use(helmet());
app.use(compression());
// init middleware

// init db

// init routes

app.get("/", (req, res, next) => {
  const strData = "Hello, world!";
  return res.status(200).json({
    message: "Hello world",
    metadata: strData.repeat(10000),
  });
});

// missing error handlers

module.exports = app;
