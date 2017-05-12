const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp');

const Todo = mongoose.model('Todo',{
    text: {
        type:String,
        required:true,
        minlength:3,
        trim:true
    },
    completed: {
        type: Boolean,
        required:true
    },
    completedAt:{
        type: Number
    }
})

// var newTodo = new Todo({
//     text:21,
//     completed:false
// });

// newTodo.save().then((doc)=>{
//     console.log("Saved todo",doc)
// },(e)=>{
//     console.log("unable to save!")
// })

const User = mongoose.model('User',{
    email:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    }
})

let newUser = new User({
    email:"@"
})

newUser.save().then((doc)=>{
     console.log(doc)
},(e)=>{
    console.log("data cannot be saved! 😞 ")
})

