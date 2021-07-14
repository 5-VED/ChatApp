const Conversation = require("../Models/Conversation");

class Conversation {
  async UserConversation(req, res) {
    const conversation = new Conversation({
      members: [req.body.senderId, req.body.recieverId],
    });

    try {
      const savedConversation = await conversation.save();
      res.status(200).json(savedConversation);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getConveration(req, res) {
    try {
      const conversation = await Conversation.find({
        members: { $in: [req.params.userId] },
      });
      res.status(200).json(conversation);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new Conversation();
