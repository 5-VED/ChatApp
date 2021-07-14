const User = require('../Models/Users');

class user {
    async createUser(req, res) {
        const user = await new User(req.body);
        try {
            user.save();  
            res.status(200).json(user);

        } catch (error) {
            res.status(500).json(error);
        }
    }

}

module.exports = new user();
