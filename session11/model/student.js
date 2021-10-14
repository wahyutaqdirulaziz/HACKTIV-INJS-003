const db = require('../config')


const getStudent = (request, response) => {
    db.pool.query('SELECT * FROM student', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}


const createStudent = (request, response) => {
    let nama = request.body.nama;
    let nim = request.body.nim;
    let hobi = request.body.hobi;
    let umur = request.body.umur;
  console.log(nama)
    db.pool.query(`INSERT INTO student (nim, nama,hobi,umur) VALUES ('${nim}','${nama}','${hobi}','${umur}')`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`data sukses di simpan cuy}`)
    })
  }

  const updateStudent = (request, response) => {
    const nim = request.params.nim;
    let nama = request.body.nama;
    let hobi = request.body.hobi;
    let umur = request.body.umur;
  
    pool.query(
      `UPDATE users SET nama = ${nama}, hobi = ${hobi}, umur = ${umur} WHERE nim = ${nim}`,
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

module.exports = {
    getStudent,
    createStudent
  }