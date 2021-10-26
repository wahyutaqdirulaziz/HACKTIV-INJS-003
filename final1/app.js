const express = require('express')
const users = require('./users')
var jwt = require('express-jwt');
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let status = true;

// app.get('/tesjwt',
//     jwt({ secret: 'shhhhhhared-secret', algorithms: ['HS256'] }),
//     function(req, res) {
//         if (!req.user.admin) return res.sendStatus(401);
//         res.sendStatus(200);
//     });


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.post('/register', users.createUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})