const Message = require('./models');

module.exports = {
    allMessages:function(req,res){
        Message.find({})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    createMessage:function(req,res){
        Message.create(req.body)
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    oneMessage:function(req,res){
        Message.findById(req.params.message_id)
        .then(data=>console.log(data)||res.json(data))
        .catch(errs=>console.log(errs)||res.json(errs))
    },
    updateMessage:function(req,res){
        Message.findByIdAndUpdate(req.params.message_id, req.body,{new:true,runValidators:true})
        .then(data=>console.log(data)||res.json(data))
        .catch(errs=>console.log(errs)||res.json(errs))
    },
    deleteMessage:function(req,res){
        Message.findByIdAndDelete(req.params.message_id)
        .then(data=>console.log(data)||res.json(data))
        .catch(errs=>console.log(errs)||res.json(errs))
    }
}