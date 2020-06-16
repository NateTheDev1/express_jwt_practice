const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");

// Routes
router.post("/register", async (req, res) => {
  // Validation
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check if the user is already in the database
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).send("Email already in use.");
  }

  // HAS THE PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Create Error
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save();
    res.status(200).send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
