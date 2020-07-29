require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const Bank = require("./models/bank.model");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.once("open", () => console.log("MongoDB connected"));

// let's do the routing stuff
app.get("/banks", async (req, res) => {
  const banks = await Bank.find().catch((err) =>
    res.status(400).json(`Error: ${err}`)
  );
  return setTimeout(() => res.json(banks), 1000);
});

app.use(express.static(path.join(__dirname, "public/build")));
app.use((req, res) => res.sendFile(__dirname + "/public/build/index.html"));

app.listen(port, () => console.log(`port running on ${port}`));
