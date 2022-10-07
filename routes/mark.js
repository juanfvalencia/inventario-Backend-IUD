const { Router } = require('express');
const { validateMark } = require('../validators/mark')
const markController = require('../controllers/markController')

const router = Router();

router.get('/', markController.getAllMark);
router.get('/:markId', markController.getMarkById);
router.post('/', validateMark, markController.createdMark);
router.put('/:markId', validateMark, markController.updatedMark);

module.exports = router;