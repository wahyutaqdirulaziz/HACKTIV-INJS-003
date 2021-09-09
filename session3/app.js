var http = require('http')
var fs = require('fs')
var PORT = 3000;



app = http.createServer((req,res)=>{
    fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });

})


app.listen(PORT);
    console.log('Port '+PORT+': Server File ');