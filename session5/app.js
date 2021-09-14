const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.static(__dirname+'public'));


app.get('/', function (req, res) {
    res.sendFile('./public/views/index.html',{root : __dirname})
})

app.use(function (req, res, next) {
   if(req.params.id == "123"){
    next()
   }
   res.sendFile('./public/views/404.html',{root : __dirname})
  })


app.get('/About', function (req, res,next) {
    console.log(req.params.id)
    res.sendFile('./public/views/About.html',{root : __dirname})
})








app.listen(PORT, function(){
    console.log('Server file sudah berjalan bos!');
});