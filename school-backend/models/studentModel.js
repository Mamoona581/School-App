const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  fatherName: String,
  age: Number,
  emailAddress: String,
  contactNumber: String,
  class: String,
  address: String,
});

module.exports = mongoose.model("Student", studentSchema);
