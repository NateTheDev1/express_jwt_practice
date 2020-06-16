const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// IMPORT ROUTES
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("db connected");
  }
);

// Middleware
app.use(cors());
app.use(express.json());

// Route middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server running");
});
