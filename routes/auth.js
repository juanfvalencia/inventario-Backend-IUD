const { Router } = require('express');
const authController = require('../controllers/authController');
const validarJwt = require('../middlewares/validarJwt')
const isAdmin = require('../middlewares/validarRol') 

const router = Router();

//Registro
router.post('/register', validarJwt, isAdmin, authController.register);

//Login
router.post('/login', authController.login);

module.exports = router