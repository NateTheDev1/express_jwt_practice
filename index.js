const express = require("express");
const app = express();
const mongoose = require("mongoose");

// IMPORT ROUTES
const authRoute = require("./routes/auth");
mongoose.connect(
  "mongodb+srv://admin:passwordpassword@rest-fjpi5.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("db connected");
  }
);

// Route middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => {
  console.log("server running");
});
