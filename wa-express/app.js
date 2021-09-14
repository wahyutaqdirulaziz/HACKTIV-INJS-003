const wbm = require('wbm');
// with wbm
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended : true}))


// wbm.start().then(async () => {
//     const phones = ['6285900341381'];
//     const message = 'Good Morning.';
//     await wbm.send(phones, message);
//     await wbm.end();
// }).catch(err => console.log(err));

wbm.start()

app.post('/send-whatsapp', async(req, res) => {
    const phones = req.body.nomor;
    const message = req.body.pesan;
    await wbm.send(phones, message);
    wbm.end();
    res.json('succeess'+req.body.nomor)
  })
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})