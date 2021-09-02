let r = 10
const PI = 3.14

// luas(r)
r = 5
// luas(r)
r = 6
// luas(r)
r = 8
//luas(r)

/* function luas(jari) {
    if (typeof jari === "number") {
        console.log(PI * jari * jari)
    } else {
        console.log(jari + "bukan angka");
    } */
    
// }


/* cara deklarasi function
Arrow function */
const NilaiKHS = (nilai) => {
   /*  >= 80 = A
    70 -79 = B
    60 - 69 = C
    50 - 59 = D
    < 50 = E */
    if (nilai >= 80 ) {
        return 'a'
    } else if ( nilai >= 70 && nilai <= 79) {
        return 'b'
    } else if (nilai >= 60) {
        return 'c'
    } else if (nilai  >= 50) {
        return 'd'
    } else {
        return 'e'
    }

}
