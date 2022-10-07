const { Router } = require('express');
const { validateEquipmentState } = require('../validators/equipmentState')
const equipmentStateController = require('../controllers/equipmentStateController');

const router = Router();

router.get('/', equipmentStateController.getAllEquipmentState);
router.get('/:equipmentStateId', equipmentStateController.getEquipmentStateById)
router.post('/', validateEquipmentState, equipmentStateController.createdEquipmentState);
router.put('/:equipmentStateId', validateEquipmentState, equipmentStateController.updatedEquipmentState);

module.exports = router;