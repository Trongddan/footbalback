const User = require("../model/User");
const bcr = require("bcrypt");
const jwt = require("jsonwebtoken");
const userController = {
  generateAccesstoken: (user) => {
    jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      "dankenvil",
      { expiresIn: "30d" }
    );
  },

  register: async (req, res) => {
    try {
      const username = req.body.username;
      const userFound = await User.findOne({ username: username });
      if (userFound) {
        return res.status(400).json({ mess: "Account is existed" });
      }
      const password = req.body.password;
      const salt = await bcr.genSalt(10);
      const hashed = await bcr.hash(password, salt);
      const newUser = await new User({
        username: username,
        password: hashed,
      });
      await newUser.save();
      res.status(200).json({ mess: "Register successfully" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  login: async (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const userFound = await User.findOne({ username: username });
      if (!userFound) {
        return res.status(404).json({ mess: "This Account is not existed" });
      }
      if (await !bcr.compareSync(password, userFound.password)) {
        return res.status(400).json({ mess: "The password is not exact" });
      }
      res.status(200).json(userFound);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = userController;
