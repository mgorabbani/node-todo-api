const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err,db)=>{
    if(err) return console.log('Unable to connect to mongoDB server');
    console.log('Connected to MongoDB server')

    db.collection('User').find().toArray().then((doc)=>{
        console.log('Todos');
        console.log(JSON.stringify(doc,undefined,2))
    },err =>{
        console.log('Unable to fetch data')
    })



    db.close()
})