const jwt = require('jsonwebtoken')
const {User}= require('../models/user')
require('dotenv').config()

module.exports = validarToken = (req, res, next) =>{
    const token = req.header('JWToken')
    if (!token) {
        return res.json({
            msg: "no hay token"
        })
    }
    try {
        const {body} = jwt.verify(token,process.env.JWT)
        const user = User.findById(body.id)
        if (!user) {
           return res.json({
            msg: "token invalido"
           }) 
        }
        next()
    } catch (error) {
        res.json(error)
    }
}