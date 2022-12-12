const { Router } = require('express');
const { validateMark } = require('../validators/mark')
const markController = require('../controllers/markController')
const validarJwt = require('../middlewares/validarJwt')
const isAdmin = require('../middlewares/validarRol') 

const router = Router();

router.get('/', validarJwt, isAdmin, markController.getAllMark);
router.get('/:markId', validarJwt, isAdmin, markController.getMarkById);
router.post('/', validarJwt, isAdmin, validateMark, markController.createdMark);
router.put('/:markId', validarJwt, isAdmin, validateMark, markController.updatedMark);

module.exports = router;