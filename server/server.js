const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp');

const Todo = mongoose.model('Todo',{
    text: {
        type:String
    },
    completed: {
        type: Boolean
    },
    completedAt:{
        type: Number
    }
})

var newTodo = new Todo({
    text:"hello world",
    completed:false
});

newTodo.save().then((doc)=>{
    console.log("Saved todo",doc)
},(e)=>{
    console.log("Unable to save todo!",e)
})