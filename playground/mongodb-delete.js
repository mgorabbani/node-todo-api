const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err,db)=>{
    if(err) return console.log('Unable to connect to mongoDB server');
    console.log('Connected to MongoDB server')

   
    db.collection('Todos').deleteMany({text:"its a new day!"}).then((res)=>{
        console.log(res)
    })


    db.close()
})