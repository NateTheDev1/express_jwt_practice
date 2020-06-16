const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// IMPORT ROUTES
const authRoute = require("./routes/auth");

dotenv.config();

// CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("db connected");
  }
);

// Middleware
app.use(express.json());

// Route middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => {
  console.log("server running");
});
