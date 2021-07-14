const express = require('express')
const router = express.Router();
const Conversation = require('../Controllers/Converstion');

router.post('/',Conversation.UserConversation);
router.get('/:userId',Conversation.getConveration);


module.exports = router;
