const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

const {ObjectID} = require('mongodb')

//Todo.remove
let id = '59171b65bc3ef82049a57aee'
Todo.findByIdAndRemove(id).then(res=>{
    console.log(res)
}).catch(e=> console.log(e))