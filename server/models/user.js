const mongoose = require('mongoose');

const User = mongoose.model("User",{
    email:{
        type:String,
        minlength:5,
        unique:true,
        trim:true,
        required:true
    }
})

module.exports = {User}