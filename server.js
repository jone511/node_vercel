const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./API/Route/index");

dotenv.config();

const PORT = 555;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

mongoose
  .connect("mongodb+srv://pp05111999:sGEiq6gWb03Zd4rb@cluster0.7b0tlbw.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
