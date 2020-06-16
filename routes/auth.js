const router = require("express").Router();

// Routes
router.post("/register", (req, res) => {
  res.send("Register Mock");
});

module.exports = router;
