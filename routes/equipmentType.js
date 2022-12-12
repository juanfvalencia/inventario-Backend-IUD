const { Router } = require('express');
const { validateEquipmentType } = require('../validators/equipmentType')
const equipmentTypeController = require('../controllers/equipmentTypeController')
const validarJwt = require('../middlewares/validarJwt')
const isAdmin = require('../middlewares/validarRol') 

const router = Router();

router.get('/', validarJwt, isAdmin, equipmentTypeController.getAllEquipmentType);
router.get('/:equipmentTypeId', validarJwt, isAdmin, equipmentTypeController.getEquipmentTypeById)
router.post('/', validarJwt, isAdmin, validateEquipmentType, equipmentTypeController.createdEquipmentType);
router.put('/:equipmentTypeId', validarJwt, isAdmin, validateEquipmentType, equipmentTypeController.updatedEquipmentType);

module.exports = router;