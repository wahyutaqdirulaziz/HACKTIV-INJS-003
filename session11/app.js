const express = require('express');
const app = express();
const Student = require('./model/student')
const port =3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/student',Student.getStudent)
app.post('/student',Student.createStudent)

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

