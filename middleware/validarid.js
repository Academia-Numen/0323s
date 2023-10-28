const {Alumno} = require('../models/alumnos')

const validarID = async (req, res , next) =>{
    try {
        const buscar = await Alumno.findById(req.params.id)
        if (buscar !== null) {
            next()
        } else {
            res.status(400).json({
                msg: 'el id ' + req.params.id + ' es invalido'
            })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { validarID }