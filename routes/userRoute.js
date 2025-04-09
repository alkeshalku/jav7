var express = require("express");
var router = express.Router();
var userModel = require("../model/user");

router.post("/", (req, res) => {
  try {
    userModel(req.body).save();
    res.send("User added");
  } catch (error) {
    res.send(error);
  }
});
// api login
router.post("/login", async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });
  if (!user) {
    return res.send("User not found");
  }
  try {
    if (user.password === req.body.password) {
      res.send("LOGIN SUCESSFUL");
    } else {
      res.send("INVALID CREDENTIALS");
    }
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
