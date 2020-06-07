// App setup
require("dotenv").config();
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT;

// Imports
import "./models";
const { requireAuth, createToken } = require("./authenticate");
const PostModel = require("./models/PostModel");

// Connect to mongobd
const mongoose = require("mongoose");
const dbString = process.env.MONGO_CONNECTION_STRING;
try {
  mongoose.connect(dbString, {
    auto_reconnect: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
} catch (e) {
  console.log(e);
}
mongoose.connection.once("open", () =>
  console.log("Connected to the database")
);

// ============================================
// ============== DATABASE CALLS ==============
// ============================================

app.get("/", (req, res) => res.send(posts));

app.post("/newpost", (req, res) => {
  // Something to add the posts to DB
});

// Run app
app.listen(port, () => console.log(`App serving on port ${port}!`));
