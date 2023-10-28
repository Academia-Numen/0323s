const bcrypt = require('bcryptjs')
const {User} =require('../models/user')
const generadorJWT = require('../utils/genedor')


const userController = {
    testJWT (req, res) {
        const token = generadorJWT(req.body)
        res.json(token)
    },
    pasoElToken (req, res) {
        res.send('paso el token')
    },


    prueba (req, res) {
        const user = {
            id:"1234567890",
            name: "juan",
            age: 22
        }
        req.session.user = user
        res.cookie('cookieDelUsuario',user.id,{maxAge:60000})
        res.json(req.session)
    },
    consulta (req, res) {
        console.log('llegue al callback')
        res.json({session: req.session,cookie: req.cookies.cookieDelUsuario})
    },
    borrarSession (req, res) {
        req.session.destroy()
        res.clearCookie('cookieDelUsuario')
        res.json({
            msg: "session borrada"
        })
    },
    hash (req, res) {
        const salt = bcrypt.genSaltSync(15)
        const pass = "1234567890"
        const hash = bcrypt.hashSync(pass,salt)
        const comparacion1 = bcrypt.compareSync(pass,hash)
        const comparacion2 = bcrypt.compareSync("megustalamilanesa",hash)
        res.json({pass,hash,comparacion1, comparacion2})
    },
    async register(req, res){
        const salt = bcrypt.genSaltSync(15)
        const hash = bcrypt.hashSync(req.body.password,salt)
        const nuevoUsuarioEnLadb = new Alumno({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })
        await nuevoUsuarioEnLadb.save()
        res.status(201).json(nuevoUsuarioEnLadb)
    },
    async login (req, res) {
        try {
            const persona = await User.findOne({email: req.body.email})
            if (persona == null) {
                return res.json({
                    msg: "la contraseña o el email son invalido"
                })
            }
            if (!bcrypt.compareSync(req.body.password, persona.password)) {
                return res.json({
                    msg: "la contraseña o el email son invalido"
                })
            }
            const user = {
                _id: persona._id,
                name: persona.name
            }

            req.session.user = user
            if (req.body.remember) {
                res.cookie('cookieDelUsuario', req.session.user,{maxAge: 60000*60})
            }
            res.json({
                msg: "session creada"
            })
        } catch (error) {
            res.json(error)
        }
    },
    logout (req, res) {
        req.session.destroy()
        res.clearCookie('cookieDelUsuario')
        res.json({
            msg: "session borrada"
        })
    },
    async loginConToken (req, res) {
        try {
            const persona = await User.findOne({email: req.body.email})
            if (persona == null) {
                return res.json({
                    msg: "la contraseña o el email son invalido"
                })
            }
            if (!bcrypt.compareSync(req.body.password, persona.password)) {
                return res.json({
                    msg: "la contraseña o el email son invalido"
                })
            }
            const token = generadorJWT({id: persona._id,name: persona.name})
            res.json({
                msg: "se creo el token",
                token
            })

        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = userController