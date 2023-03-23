const User = require("../model/User");
const bcr = require("bcrypt");
const jwt = require("jsonwebtoken");
const userController = {
  generateAccesstoken: (user) => {
    return jwt.sign(
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
      const password = req.body.password;
      if (username.length < 8 || password.length < 8) {
        return res.status(500).json({
          mess: "username and password must have more than 8 characters",
        });
      }
      const userFound = await User.findOne({ username: username });
      if (userFound) {
        return res.status(400).json({ mess: "Account is existed" });
      }

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
      const passwords = req.body.password;
      const userFound = await User.findOne({ username: username });
      if (!userFound) {
        return res.status(404).json({ mess: "This Account is not existed" });
      }
      if (await !bcr.compareSync(passwords, userFound.password)) {
        return res.status(400).json({ mess: "The password is not exact" });
      }
      const accessToken = userController.generateAccesstoken(userFound);
      const { password, ...rest } = userFound._doc;
      res.status(200).json({ ...rest, accessToken });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllPlayer: async(req,res)=>{
    try {
      const listPlayer = await User.find().sort('name');
      res.status(200).json(listPlayer);
    } catch (error) {
      res.status(500).json(listPlayer);
    }
  }
};
module.exports = userController;
