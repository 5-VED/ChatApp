const express = require('express')
const router = express.Router();
const Conversation = require('../Controllers/Converstion');
const User = require('../Controllers/Users');


//Create new Conversation
router.post('/conversation',Conversation.UserConversation);
//Get Conversation By userId
router.get('/:userId',Conversation.getConveration);

//Create new User
router.post('/user',User.createUser);

module.exports = router;
