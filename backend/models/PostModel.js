const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  tags: Array,
  content: String,
  id: String,
});
module.exports = mongoose.model("Post", PostSchema);
