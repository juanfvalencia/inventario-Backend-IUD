const { Router } = require('express');
const { validateInventory } = require('../validators/Inventory');
const inventoryController = require('../controllers/inventoryController');   
const validarJwt = require('../middlewares/validarJwt')
const isAdmin = require('../middlewares/validarRol') 

const router = Router();

router.get('/', validarJwt, inventoryController.getAllInventory);
router.get('/:inventoryId', validarJwt, inventoryController.getInventoryById)
router.post('/', validarJwt, isAdmin, validateInventory, inventoryController.createdInventory);
router.put('/:inventoryId', validarJwt, isAdmin, validateInventory, inventoryController.updatedInventory);

module.exports = router;