const { Router } = require('express');
const { validateUser } = require('../validators/user')
const userController = require('../controllers/userController')
const validarJwt = require('../middlewares/validarJwt')
const isAdmin = require('../middlewares/validarRol') 

const router = Router();

router.get('/', validarJwt, isAdmin, userController.getAllUser);
router.get('/:userId', validarJwt, isAdmin, userController.getUserById)
router.post('/', validarJwt, isAdmin, validateUser, userController.createdUser);
router.put('/:userId', validarJwt, isAdmin, validateUser, userController.updatedUser);

module.exports = router;
