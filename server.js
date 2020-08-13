const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// installing path
const path = require("path");

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

// Serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
