const { route } = require("./auth");

const router = require("express").Router();
const privateRoute = require("./privateRoute");
const User = require("../models/User");

router.get("/", privateRoute, async (req, res) => {
  //   res.json({
  //     posts: { title: "First post attempt", description: "random data" },
  //   });
  //   res.send(req.user);
  const user = await User.findById(req.user._id);
  res.json(user);
});

module.exports = router;
