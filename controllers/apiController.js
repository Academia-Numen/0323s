const {Alumno} = require('../models/alumnos')

const apiController = {
    async apiGet (req, res){
        const listadoDeAlumnos = await Alumno.find()
        res.json(listadoDeAlumnos)
    },
    async apiGetOne (req, res){
        const listadoDeAlumnos = await Alumno.findOne(req.params)
        res.json(listadoDeAlumnos)
    },
    async apiGetList (req, res){
        const listadoDeAlumnos = await Alumno.find(req.query)
        res.json(listadoDeAlumnos)
    },
    async apiGetId (req, res){
        const listadoDeAlumnos = await Alumno.findById(req.params.id)
        res.json(listadoDeAlumnos)
    },
    async apiPost (req, res){
        const nuevoAlumno = new Alumno(req.body)
        await nuevoAlumno.save()
        res.status(201).json(nuevoAlumno)
    },
    async apiPut (req ,res){
        await Alumno.findByIdAndUpdate(req.params.id, req.body)
        const editado = await Alumno.findById(req.params.id)
        res.status(201).json(editado)
    },
    async apiDelete (req ,res){
        await Alumno.findByIdAndDelete(req.params.id)
        res.status(200).send('se borro el alumno')
    }
}



module.exports = apiController