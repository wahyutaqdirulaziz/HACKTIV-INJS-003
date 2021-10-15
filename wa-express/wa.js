const { Client } = require('whatsapp-web.js');
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const client = new Client();

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
});

client.on('ready', async () => {
    console.log('Client is ready!');

});

client.on('message', msg => {
    if (msg.body == 'ping') {
        msg.reply('pong');
    }
});

app.post('/send-whatsapp', async(req, res) => {
    const number = req.body.no;
    const text = req.body.msg;
    const sanitized_number = number.toString().replace(/[- )(]/g, "",'0'); // remove unnecessary chars from the number
    const final_number = `+62${sanitized_number.substring(sanitized_number.length - 11)}`; // add 91 before the number here 91 is country code of India
    const chatId = final_number.substring(1) + "@c.us";
    const number_details = await client.getNumberId(chatId); // get mobile number details

    if (number_details) {
        client.sendMessage(chatId, text);
     res.json({
         status : "pesan sukses terkirim",
         nomor_tujuan : number,
         pesan : text,
     }); // send message
    } else {
        console.log(final_number, "Mobile number is not registered");
    }
    
    
  })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



client.initialize();