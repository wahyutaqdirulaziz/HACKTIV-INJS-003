const modul = require('./modul')

// function beliBubur() {
//     console.log("Saya beli bubur")
// }

// function beliKetoprak(fn) {
//     console.log("Saya beli ketoprak")
//     //jajanBubur()
//     fn()
// }
// beliKetoprak(beliBubur)

function installnode(fn) {
   if(fn){
    fn()
   }else{
    modul.printconsole("hallo silahkan masukan opsi")
   }
}


function pertama()
{
    modul.printconsole("download nodejs dulu lah di websitenya ")
}

function kedua()
{
    modul.printconsole("install")
}


modul.printconsole(installnode())