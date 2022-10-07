const { Router } = require('express');
const { validateEquipmentType } = require('../validators/equipmentType')
const equipmentTypeController = require('../controllers/equipmentTypeController')

const router = Router();

router.get('/', equipmentTypeController.getAllEquipmentType);
router.get('/:equipmentTypeId', equipmentTypeController.getEquipmentTypeById)
router.post('/', validateEquipmentType, equipmentTypeController.createdEquipmentType);
router.put('/:equipmentTypeId', validateEquipmentType, equipmentTypeController.updatedEquipmentType);

module.exports = router;