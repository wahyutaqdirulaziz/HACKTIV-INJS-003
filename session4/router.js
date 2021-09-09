var express = require('express')
const home = require('./controllers/mahasiswa')

var router = express.Router()

// get
router.get('/',home.mahasiswa)

router.get('/mahasiswaById',home.mahasiswabyid)
// post
router.post('/mahasiswa-insert',home.mahasiswaInsert)

// put
router.put('/mahasiswa-update',home.mahasiswaUpdate)
// delete
router.delete('/mahasiswa-delete',home.mahasiswaDelete)


module.exports = router