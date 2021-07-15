const User = require("../Models/Users");

class user {
  async createUser(req, res) {
    const user = new User(req.body);
    try {
      const saveduser = await user.save();
      res.status(200).json(saveduser);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new user();
