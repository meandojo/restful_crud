const controller = require('./controller');
const bp = require('body-parser');
module.exports = function(app){
    app.use(bp.json());
    app.get('/messages', controller.allMessages)
    app.get('/messages/:message_id',controller.oneMessage)
    app.post('/messages', controller.createMessage)
    app.put('/messages/:message_id', controller.updateMessage)
    app.delete('/messages/:message_id',controller.deleteMessage)
    return app
}