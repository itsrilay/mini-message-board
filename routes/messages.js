const express = require('express');
const router = express.Router();

const controller = require('../controllers/messagesController');

router.get('/', controller.getMessages);
router.get('/new', controller.getCreateMessageForm);
router.post('/new', controller.createMessage);
router.get('/:messageId', controller.getMessageDetails);

module.exports = router;
