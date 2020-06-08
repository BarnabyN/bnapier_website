// App setup
require("dotenv").config();
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 5000; //process.env.PORT;

// Imports
const { requireAuth, createToken } = require("./authenticate");
const PostModel = require("./models/PostModel");

// Connect to mongobd
const mongoose = require("mongoose");
const dbString =
  "mongodb+srv://barney:napierb@cluster0-6maj7.mongodb.net/sitedata?retryWrites=true&w=majority"; //process.env.MONGO_CONNECTION_STRING;
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

app.get("/", async (req, res) => {
  const posts = await PostModel.find({});
  res.send({
    posts,
  });
});

app.get("/post/:id", (req, res) => {
  const matchingPosts = posts.filter((p) => p.id == req.params.id);
  if (matchingPosts.length > 0) {
    res.send({ ...matchingPosts[0] });
  } else {
    res.send({ error: "Post not found." });
  }
});

app.post("/newpost", async (req, res) => {
  const { title, subtitle, content } = req.body;
  const id = title.replace(" ", "_");
  const newPost = new PostModel({
    title,
    subtitle,
    content,
    id,
  });
  await newPost.save();
  res.send({ success: true });
});

// Run app
app.listen(port, () => console.log(`App serving on port ${port}!`));
