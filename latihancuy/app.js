var express = require('express')
var express = require('./data.json')
var app = express()
const fs = require('fs');
const path = require('path');
   
fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});


// respond with "hello world" when a GET request is made to the homepage
app.get('/data-ceritanya', function (req, res) {
    res.json(data)
})