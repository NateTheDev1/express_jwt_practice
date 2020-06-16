const { route } = require("./auth");

const router = require("express").Router();
const privateRoute = require("./privateRoute");

router.get("/", privateRoute, (req, res) => {
  res.json({
    posts: { title: "First post attempt", description: "random data" },
  });
});

module.exports = router;
