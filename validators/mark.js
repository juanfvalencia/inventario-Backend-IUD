const { check } = require('express-validator');
const { validateResultMark } = require('../helpers/validateResultMark');

const validateMark = [
    check('name','name.requerido').not().isEmpty(),
    check('state','state.requerido').isIn(['Active','Inactive']),
    (req, res, next) => {
        validateResultMark(req, res, next)
    }
]

module.exports = { validateMark }