const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bankSchema = new Schema(
  { name: { type: String, required: true } },
  { timestamps: true }
);

const Bank = mongoose.model("banks", bankSchema);

module.exports = Bank;
