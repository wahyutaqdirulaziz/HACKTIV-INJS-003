

exports.cekbilangan = function bagi(a) {
    if (a % 2 === 0) { 
        return a + " ganjil"
    } else {
        return a + " genap"
    }
}

exports.printconsole = function print(value){
    console.log(value)
}