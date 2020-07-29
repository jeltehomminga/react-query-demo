const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const interestSchema = new Schema(
  {
    name: { type: String, required: true },
    interests: { type: Array, required: true },
  },
  { timestamps: true }
);

const Interest = mongoose.model("interests", interestSchema);

module.exports = Interest;
