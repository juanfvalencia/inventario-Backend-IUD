const { Router } = require('express');
const { validateEquipmentState } = require('../validators/equipmentState')
const equipmentStateController = require('../controllers/equipmentStateController');
const validarJwt = require('../middlewares/validarJwt')
const isAdmin = require('../middlewares/validarRol') 

const router = Router();

router.get('/', validarJwt, isAdmin, equipmentStateController.getAllEquipmentState);
router.get('/:equipmentStateId', validarJwt, isAdmin, equipmentStateController.getEquipmentStateById)
router.post('/', validarJwt, isAdmin, validateEquipmentState, equipmentStateController.createdEquipmentState);
router.put('/:equipmentStateId', validarJwt, isAdmin, validateEquipmentState, equipmentStateController.updatedEquipmentState);

module.exports = router;