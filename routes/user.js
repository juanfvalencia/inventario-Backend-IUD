const { Router } = require('express');
const { validateUser } = require('../validators/user')
const userController = require('../controllers/userController')

const router = Router();

router.get('/', userController.getAllUser);
router.get('/:userId', userController.getUserById)
router.post('/', validateUser, userController.createdUser);
router.put('/:userId', validateUser, userController.updatedUser);

module.exports = router;
