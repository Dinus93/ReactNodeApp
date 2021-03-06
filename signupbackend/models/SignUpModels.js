const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const SignUpSchema = new Schema({
  firstName: { type: String, required: true },
  surName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const SignUpModel = mongoose.model("SignUpModel", SignUpSchema);

module.exports = SignUpModel;
