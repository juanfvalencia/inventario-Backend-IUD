const { check } = require('express-validator');
const { validateResultEquipmentType } = require('../helpers/validateResultEquipmentType');

const validateEquipmentType = [
    check('name', 'name.requerido').not().isEmpty(),
    check('state', 'state.requerido').isIn(['Active', 'Inactive']),
    (req, res, next) => {
        validateResultEquipmentType(req, res, next)
    }
]

module.exports = { validateEquipmentType }