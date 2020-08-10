const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const items = require("./routes/api/items");

const app = express();

app.use(bodyParser.json());

// db config

const uri = require("./config/keys").mongoURI;

//this will conncectus
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

//user routes

app.use("/api/items", items);
// this will help us when we deploy our port

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
