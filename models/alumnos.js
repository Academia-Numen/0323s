const {Schema, model} = require('mongoose')

const schema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    dni :{
        type: Number,
        required: true
    },
    edad: {
        type: Number
    },
    curso : {
        type: String,
        required: true
    },
    turno :{
        type: String,
        required: true,
        enum: ['turno mañana', 'turno tarde', 'turno noche']
    },
})

const Alumno = model('Alumno',schema) // coleccion == alumnos
module.exports={Alumno}