const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/messages_demo',{useNewUrlParser:true}, (errs)=>errs?console.log(errs):console.log('db is good to go'))

const MessageSchema = mongoose.Schema({
    content:{
        type:String,
        required:[true,'message must have a message?!'],
        minlength:[3,'messages must be at least 3 characters']
    }
},{timestamps:true})

module.exports = mongoose.model('Message', MessageSchema);