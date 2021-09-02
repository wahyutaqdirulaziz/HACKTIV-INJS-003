const http = require('http'); //memanggil buildin modul http bawaan dari nodejs
const port = 3000;

const server = http.createServer( (req, res) => {
    res.write('Hello world abang');
    res.end();
})

server.listen(() => {
    console.log(`running at http://localhost:${port}`)
})
