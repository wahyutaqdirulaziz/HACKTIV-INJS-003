var user = require('./user.json')
var fs = require('fs');


// read data
exports.mahasiswa = (req, res) => {
    res.json({
        status : true,
        data : user
    });
}
 
// insert data ke file user.json
exports.mahasiswaInsert = (req, res) => {
    var read = req.body;
    data = user
    data.push({
        id : parseInt(read.id),
        nama : read.nama,
        kelas : read.kelas,
    })
    fs.writeFile('controllers/user.json', JSON.stringify(data,null,2), function (err) {
        if (err) throw err;
        res.json({
            message : "data berhasil di tambahkan",
            success : true
        });
    });
}

// update data ke users.json
exports.mahasiswaUpdate = (req, res) => {
    var read = req.body;
    var editedUser = {id: parseInt(read.id),nama: read.nama, kelas: read.kelas};
    users = user.map(u => u.id !== parseInt(editedUser.id) ? u : editedUser);
    fs.writeFile('controllers/user.json', JSON.stringify(users,null,2), function (err) {
        if (err) throw err;
        res.json({
            message : "data berhasil di update",
            success : true
        });
      });
    
}
 
// hapus data di file user.json
exports.mahasiswaDelete = (req, res) => {
    var read = req.body;
    const result = user.filter(user => user.id !== parseInt(read.id));
    fs.writeFile('controllers/user.json', JSON.stringify(result,null,2), function (err) {
        if (err) throw err;
        res.json({
            message : "data berhasil di hapus",
            success : true
        });
    });
}