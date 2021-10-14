const { Router } = require('express');
const authmid = require("../middleware/auth");
const user = require('../controllers/user');
const auth = require('../controllers/login');

const router = Router();

router.post('/', authmid,(req, res) => res.send('Welcome'))
router.post('/login', auth.loginUser);
router.post('/register', auth.registrasiUser);


router.post('/user',user.createUser);
router.get('/user', user.getAllUser);
router.get('/user/:UserId', user.getUserById);
router.put('/user/:UserId', user.updateUser);
router.delete('/user/:UserId', user.deleteUser);

module.exports = router;