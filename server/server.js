const env = process.env.NODE_ENV || 'development'
if (env === 'development') {
    process.env.PORT = 3000
    process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoApp';
} else if (env === 'test') {
    process.env.PORT = 3000
    process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoAppTest'
}

console.log("environment", env)
const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')
const { ObjectID } = require('mongodb')
const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const {authenticate} = require('./middleware/authenticate')
const app = express();

const port = process.env.PORT;
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    })
    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)
    })
})


app.get('/todos', (req, res) => {

    Todo.find().then((todos) => {
        res.send({ todos, code: 12 })
    }, (e) => {
        res.status(400).send(e)
    })
})



app.get('/todos/:id', (req, res) => {
    let id = req.params.id
    if (!ObjectID.isValid(id)) res.status(404).json({ error: 'id not valid' })

    Todo.findById(id).then((todo) => {
        if (!todo) res.status(404).json({ error: 'todo not found' })

        res.send({ todo })
    }).catch(e => {
        res.status(400)
    })
})


app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) res.status(404).json({ error: 'id not valid' })

    Todo.findByIdAndRemove(id).then(result => {
        res.json(result)
    }).catch(e => res.status(400).json(e))
})

app.patch('/todos/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) res.status(404).json({ error: 'id not valid' })

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if (!todo) return res.status(404).send()

        res.json({ todo })
    }).catch(e => {
        res.status(400).send()
    })
})

app.post('/users', (req, res) => {
    let body = _.pick(req.body, ['email', 'password'])
    let user = new User(body)

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user)
    }).catch(e => res.status(400).send(e))
})
app.get('/users', (req, res) => {

    User.find().then(result => {
        res.json(result)
    }).catch(e => {
        res.status(400).send()
    })
})



app.get('/users/me',authenticate, (req, res) => {
    res.send(req.user)

})


app.listen(port, () => {
    console.log(`Started server at ${port}`)
})

module.exports = { app }