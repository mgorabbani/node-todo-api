const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err,db)=>{
    if(err) return console.log('Unable to connect to mongoDB server');
    console.log('Connected to MongoDB server')

    db.collection('User').insertOne({
        name:"golam rabbani",
        age:22,
        location:'dhaka'
    },(err,res)=>{
        if(err) return console.error("unable to insert data")
        console.log(JSON.stringify(res.ops,undefined,2))
    })



    db.close()
})