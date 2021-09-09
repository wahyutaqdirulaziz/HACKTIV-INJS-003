let orang = [
  { name: "Yusuf",no_absen : "injs-01"},
  { name: "Wahyu",no_absen : "injs-02" },
  { name: "Hafid",no_absen : "injs-03"},
  { name: "Raka" ,no_absen : "injs-04"},
  { name: "Rizky",no_absen : "injs-05" },
  { name: "Yolan",no_absen : "injs-06"},
]

  
  var result = orang.reduce(function(author, val) {
    var comma = orang.length ? "," : "";
    
    return author + val.name + comma ;
  }, '');

  console.log(result)



//   console.log(descending)

// const dsc = orang.sort(function(a, b){return b.no_absen[6]- a.no_absen[6]});
// console.log(dsc);