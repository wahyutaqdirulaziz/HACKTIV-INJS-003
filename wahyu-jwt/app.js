const express = require('express')
const route = require("express").Router()
const jwt = require("jsonwebtoken")
const app = express()
const port = 3000
const fs = require('fs')
const data = require("./data.json")

// Middlewares
app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.use(route)



route.post('/login', (req, res) => {
    let find = data.find(item => {
        return item.email === req.body.email && item.password === req.body.password
      })
      if(!find){
          res.status(401).json({
              message : "Email and Password is not valid !"
          });
      }else{
        let token = jwt.sign(find, 'kode rahasia');
        res.status(200).json({ 
            token: token,
            message : true,
            data : find
      
      })
      }
     
  })

route.post('/registrasi', (req, res) => {
    console.log(req.body)
    let obj = {
      email: req.body.email,
      nama : req.body.nama,
      password: req.body.password,
    }
    data.push(obj)
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf-8')
    res.status(200).send({
        message : "Registrasi success !"
    });
  })


  route.use(function (req, res, next) {
    console.log(req.headers.token)
    try {
      let decoded = jwt.verify(req.headers.token, 'kode rahasia');
      console.log(decoded)
      let cek = data.find(item => {
        return item.email === decoded.email
      })
      if(cek)
      {
        next()
      }else{
        res.status(401).json({ message: "User Belum Terdaftar" })
      }
    } catch(err) {
      console.log("Masuk catch dari try")
      res.status(500).json({
        message : "membutuhkan auth untuk melanjutkan ke enpoint ini !"
      })
    }
  })

  route.get('/Home', (req, res) => {
    let decoded = jwt.verify(req.headers.token, 'kode rahasia');
    res.json({
      message : 'Selamat Datang Guys ' + decoded.nama,
      data : decoded
    })
  })

  app.post('/users', (req, res) => {
    console.log(req.body)
    let obj = {
      email: req.body.email,
      nama : req.body.nama,
      password: req.body.password,
    }
    data.push(obj)
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf-8')
    res.status(200).send({
        message : "Registered success !"
    });
  })

// Listen
app.listen(port,() => {
  console.log(`listening on port: ${port}!`)
})
