const { Router } = require('express');
const { validateInventory } = require('../validators/Inventory');
const inventoryController = require('../controllers/inventoryController');   

const router = Router();

router.get('/', inventoryController.getAllInventory);
router.get('/:inventoryId', inventoryController.getInventoryById)
router.post('/', validateInventory, inventoryController.createdInventory);
router.put('/:inventoryId', validateInventory, inventoryController.updatedInventory);

module.exports = router;