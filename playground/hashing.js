// const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


var pass = '123password!'

// bcrypt.genSalt(10,(err,salt)=>{
//     console.log(salt)
//     bcrypt.hash(pass,salt,(err,hash)=>{
//         console.log(hash)
//     })
// })

let hashed = '$2a$10$oyACQziIezQG95BUxesNSOWKQqt07oe13Z94xLxOC2v6Z5f5c/0M.'

bcrypt.compare(pass,hashed).then((a)=>{
    console.log(a)
})
