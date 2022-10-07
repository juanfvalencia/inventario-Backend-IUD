const { check } = require('express-validator');
const { validateResultInventory } = require('../helpers/validateResultInventory');

const validateInventory = [
    check("serial", "serial.requerido").not().isEmpty(),
    check("model", "model.requerido").not().isEmpty(),
    check("description", "description.requerido").not().isEmpty(),
    check("color", "color.requerido").not().isEmpty(),
    check("photo", "photo.requerido").not().isEmpty(),
    check("description", "description.requerido").not().isEmpty(),
    check("buyDate", "buyDate.requerido").not().isEmpty(),
    check("price", "price.requerido").not().isEmpty(),
    check("user", "user.requerido").not().isEmpty(),
    check("mark", "mark.requerido").not().isEmpty(),
    check("equipmentType", "equipmentType.requerido").not().isEmpty(),
    check("equipmentState", "equipmentState.requerido").not().isEmpty(),
    (req, res, next) => {
        validateResultInventory(req, res, next)
    }
];

module.exports = { validateInventory }