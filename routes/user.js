const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')
const checksLogin = require('../middleware/chekcsLogin')
const {validarChecks}= require('../middleware/validarChecks')
const validarToken = require('../middleware/validarToken')

router.get('/session',userController.prueba)
// metodo http - urn - middleware- middleware- middleware- middleware - callback
router.get('/consultar',auth,userController.consulta)
router.get('/borrar',userController.borrarSession)
router.get('/hash', userController.hash)


router.post('/login',checksLogin,validarChecks, userController.login)
router.delete('/logout', userController.logout)
//jwt

router.post('/testoken', userController.testJWT)
router.get('/paso',validarToken, userController.pasoElToken)
router.post('/logintoken', checksLogin,validarChecks,userController.loginConToken)

module.exports = router