const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

const {ObjectID} = require('mongodb')
let id = '59170f19c1c33a195035a84e';

User.find({email:'rabbani@gmail.com'}).then((res)=>{
    console.log(res)
}).catch(e=> console.error('User not Found'))

// Todo.findById(id).then(todo=>{
//     console.log(todo)
// }).catch(e=> console.error('Id not valid'))