
panggilan("wahyu","fimale")

function panggilan(nama,gender){
    if(gender === "male"){
      console.log("hallo tuan "+nama);
    }else if(gender === "female"){
      console.log("hallo nyonya "+nama);
    }else{
        console.log("hallo kakak "+nama);
    }
}