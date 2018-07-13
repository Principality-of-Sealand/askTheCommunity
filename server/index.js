require('newrelic')
const express = require("express");
const parser = require("body-parser");
const path = require("path");
const { Router } = require('../server/router')
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "../client/dist"), {maxAge: "10d"}));
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=86400')
  next();
})
app.use('/api', Router);


app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
