// load the things we need
var express = require('express');
var app = express();
app.use(express.urlencoded({extended : true}))
// set teamplet engine dengan ejs
app.set('view engine', 'ejs');

// use res.render untuk load file ejs 

// index page
app.get('/', function(req, res) {
    let data = {
        nama : "wahyu",
        kelas : "intro to nodejs",
        nomor : "Injs-ks-003"
    }
    res.render('home/index',data);
});

// req.params
// about page
app.get('/about', function(req, res) {
   let data = [
        {
            nama : "wahyu",
            kelas : "injs-ks-003"
        },
        {
            nama : "tera",
            kelas : "injs-ks-004"
        }
   ]
    res.render('about/index',{
        data :data
    });
});


app.get('/anggota', function(req, res) {
    let data = [
         {
             nama : "wahyu",
             kelas : "injs-ks-003"
         },
         {
             nama : "tera",
             kelas : "injs-ks-004"
         }
    ]
     res.render('about/index',{
         data :data
     });
 });

app.listen(8080);
console.log('8080 is the magic port');