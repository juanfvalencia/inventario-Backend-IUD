const { check } = require('express-validator');
const { validateResultEquipmentState } = require('../helpers/validateResultEquipmentState');

const validateEquipmentState = [
    check('name', 'name.requerido').not().isEmpty(),
    check('state', 'state.requerido').isIn(['Active', 'Inactive']),
    (req, res, next) => {
        validateResultEquipmentState(req, res, next)
    }
]

module.exports = { validateEquipmentState }