const express = require('express')
const router = express.Router();
const Conversation = require('../Controllers/Converstion');
const User = require('../Controllers/Users');
const Message = require('../Controllers/Messages');

//Create new Conversation
router.post('/conversation',Conversation.UserConversation);
//Get Conversation By userId
router.get('/conversation/:userId',Conversation.getConveration);

//Create new User
router.post('/user',User.createUser);


//Enter message in DB
router.post('/message',Message.messages);
//Get messaged from DB
router.get('/message/:conversationId',Message.getMessage);


module.exports = router;
