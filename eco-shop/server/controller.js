const User = require("./models/users");
const Role = require("./models/role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { secret } = require("./config");

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class Controller {
  async registration(req, res) {
    try {
      // Show result validation username and password field
      const errors = validationResult(req);
      // Send errors to client
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Registration error", errors });
      }
      // Get data from request body
      const { userName, password } = req.body;
      const candidat = await User.findOne({ userName });
      // If data base consist user with this username
      if (candidat) {
        return res
          .status(400)
          .json({ message: "This username is already using " });
      }
      // Hash password
      const hashPassword = bcrypt.hashSync(password, 7);
      // Add role for user
      const userRole = await Role.findOne({ value: "ADMIN" });
      // Add new user with params
      const user = new User({
        userName,
        password: hashPassword,
        roles: [userRole.value],
      });
      // Save user to database
      await user.save();
      // Response message to client
      return res.json({
        user,
        message: "User add succsesfully. Welcome to H.H.FOOD",
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }
  async login(req, res) {
    try {
      // Get data from request body
      const { userName, password } = req.body;
      // Search user with username in database
      const user = await User.findOne({ userName });
      // Is database consist user?
      if (!user) {
        return res
          .status(400)
          .json({ message: `User with this username do not find` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      // Is passwords ===?
      if (!validPassword) {
        return res
          .status(400)
          .json({ message: `Incorrect password, please try again` });
      }
      const token = generateAccessToken(user._id, user.roles);
      // return res.status(200).json({token})
      return res.status(200).json(user);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {}
  }
}

module.exports = new Controller();
