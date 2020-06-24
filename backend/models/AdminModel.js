const mongoose = require("mongoose");
const AdminSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
});
module.exports = mongoose.model("Admin", AdminSchema, "admin-users");
