const {check} = require('express-validator')

const checks = [
    check('nombre')
        .notEmpty().withMessage('El campo nombre es requerido')
        .isString().withMessage('El campo nombre debe ser un string'),
    check('dni')
        .notEmpty().withMessage('El campo dni es requerido')
        .isNumeric().withMessage('El campo dni debe ser un number'),
    check('curso')
        .notEmpty().withMessage('El campo curso es requerido')
        .isString().withMessage('El campo curso debe ser un string'),
    check('turno')
        .notEmpty().withMessage('El campo turno es requerido')
        .isString().withMessage('El campo turno debe ser un string')
]

module.exports = checks