const Message = require("../Models/Messages");

class userMessage {
  async messages(req, res) {
    const message = await new Message(req.body);

    try {
      const savedMessage = await message.save();
      res.status(200).json(savedMessage);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getMessage(req, res) {
    try {
      const messages = await Message.find({
        conversationId: req.params.conversationId
      });
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new userMessage();
