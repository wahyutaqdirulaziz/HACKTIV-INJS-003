const express = require('express')
const app = express()
const port = 3000
var route = require('./router')

// ...
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(route)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})