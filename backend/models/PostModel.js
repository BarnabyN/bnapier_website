const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  date: String,
  author: String,
  tags: Array,
  content: String,
  id: String,
});
module.exports = mongoose.model("Post", PostSchema);
