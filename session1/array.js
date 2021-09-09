let orang = [
    { name: "Yusuf",no_absen : "injs-01"},
    { name: "Wahyu",no_absen : "injs-02" },
    { name: "Hafid",no_absen : "injs-03"},
    { name: "Raka" ,no_absen : "injs-04"},
    { name: "Rizky",no_absen : "injs-05" },
    { name: "Yolan",no_absen : "injs-06"},
  ]
// fungsi callback untuk cekgenap
  function cekgenap(num) {
   
      if (num.no_absen[6] % 2 == 0) {
        return true;
      }
  }
// fungsi callback untuk cekganjil
  function cekganjil(num){
    if (num.no_absen[6] % 2 == 0) {
        return false;
    }else{
        return true
    }
  }
  const genap = orang.filter(cekgenap);
  const ganjil = orang.filter(cekganjil);
  console.log("=============GENAP==============")
  console.log(genap);
  console.log("=============GANJIL==============")
  console.log(ganjil);

// function cek(v)
// {
//     v.foreach(element => {
//         if(element.noabsen % 2 == 0){
//         return element.name
//         }else{
//        return false
//         } 
//     });
// }


//   function cekganjil(num) {
//     for (let i = 2; num.noabsen > i; i++) {
//       if (num.noabsen % i == 1) {
//         return false;
//       }
//     }
//     return num.noabsen > 1;
//   }
//   const genap = orang.filter(cekgenap);
//   console.log(genap);
  
  
//   const genap = orang.filter(data => data.noabsen % 2 == 0);
//   const genap = orang.filter(cekganjil);
//   const ganjil = orang.filter(data => data.noabsen % 2 == 1);
//   console.log("============= ganjil ============")
//   console.log(ganjil);
//   console.log("============= genap ============")
//   console.log(genap);

//   orang.forEach(element => {
//       if(element.noabsen % 2 == 0){
//         console.log(element.name + ": genap")
//       }else{
//         console.log(element.name + ": ganjil")
//       }
      
//   });

// if(3 % 2 == 0){
//  console.log('genap')
// }else{
//     console.log('ganjil')
// }