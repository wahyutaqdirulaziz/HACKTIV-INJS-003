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