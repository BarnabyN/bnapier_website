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
const AdminModel = require("./models/AdminModel");

// Connect to mongobd
const mongoose = require("mongoose");
const dbString =
  "mongodb+srv://barney:napierb@cluster0-6maj7.mongodb.net/sitedata?retryWrites=true&w=majority";
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

app.get("/posts", async (req, res) => {
  const posts = await PostModel.find({});
  res.send({
    posts,
  });
});

app.get("/tags", async (req, res) => {
  const posts = await PostModel.find({});
  var alltags = [];

  posts.forEach((p) => {
    p.tags.forEach((t) => {
      if (alltags.includes(t) === false) {
        alltags.push(t);
      }
    });
  });

  res.send({
    alltags,
  });
});

app.get("/post/:id", async (req, res) => {
  const allposts = await PostModel.find({});
  const matchingPosts = allposts.filter((p) => p.id == req.params.id);
  if (matchingPosts.length > 0) {
    res.send({ ...matchingPosts[0]._doc });
  } else {
    res.send({ error: "Post not found." });
  }
});

app.post("/admin-login", async (req, res) => {
  const { username, password } = req.body;
  const matchingAdmin = await AdminModel.findOne({ username }).select(
    "+password"
  );
  if (matchingAdmin && matchingAdmin.password == password) {
    res.send({
      success: true,
      token: createToken(matchingAdmin.id),
    });
  } else {
    res.send({ success: false, message: "invalid credentials" });
  }
});

app.get("/get-current-admin", requireAuth, async (req, res) => {
  const matchingAdmin = await AdminModel.findById(req.user);
  if (matchingAdmin) {
    const { id, name, username } = matchingAdmin;
    return res.send({ id, name, username });
  }
  res.send(null);
});

app.post("/newpost", async (req, res) => {
  const { title, subtitle, date, author, content, tags } = req.body;
  const id = title.replace(" ", "_");
  const newPost = new PostModel({
    title,
    subtitle,
    date,
    author,
    tags,
    content,
    id,
  });
  await newPost.save();
  res.send({ success: true });
});

// Run app
app.listen(port, () => console.log(`App serving on port ${port}!`));
