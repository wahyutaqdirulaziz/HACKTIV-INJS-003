const db = require('./config');
var passwordHash = require('password-hash');
var moment = require('moment'); // require

const createUser = (request, response) => {
    let name = request.body.name;
    let email = request.body.email;
    let password = passwordHash.generate(request.body.password);
    let created = moment().format();
    console.log(name)
    db.pool.query(`INSERT INTO users (name,email,password,created_at) VALUES ('${name}','${email}','${password}','${created}')`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`data sukses di simpan cuy}`)
    })
}



module.exports = {
    createUser
}