// const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')


let data = {
    id:321
};

let token = jwt.sign(data,'123abc');

// console.log(token)
let verify = jwt.verify(token,'123abc')
console.log(verify)

// let message= 'I am user number 3';

// var hash = SHA256(message).toString();

// console.log(hash)

// let data = {
//     id:4
// }
// var token = {
//     data,
//     hash:SHA256(JSON.stringify(data)+'somesecret').toString()
// }

// console.log(token)

