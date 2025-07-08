let id = 1;

function newId() {
  id = id + 1;
  return id;
}

const messages = [
  {
    id: id,
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: newId(),
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

module.exports = {
  getMessages: (req, res) => {
    res.render('messagesList', {
      title: 'Mini Messageboard',
      messages: messages,
    });
  },

  getMessageDetails: (req, res) => {
    const messageId = req.params.messageId;
    const message = messages.find(
      (message) => String(message.id) === messageId
    );
    res.render('messageDetails', {
      title: 'Message Details',
      message: message,
    });
  },

  getCreateMessageForm: (req, res) => {
    res.render('messageForm', { title: 'New Message' });
  },

  createMessage: (req, res) => {
    const { user, text } = req.body;

    messages.push({
      id: newId(),
      user: user,
      text: text,
      added: new Date(),
    });

    res.redirect('/');
  },
};
