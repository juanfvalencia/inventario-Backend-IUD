const { check } = require('express-validator');
const { validateResultUser } = require('../helpers/validateResultUser');

const validateUser = [
    check('name','name.requerido').not().isEmpty(),
    check('email','email.requerido').isEmail(),
    check('state','state.requerido').isIn(['Active','Inactive']),
    (req, res, next) => {
        validateResultUser(req, res, next)
    }
]

module.exports = { validateUser }