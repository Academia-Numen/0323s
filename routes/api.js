const express = require('express')
const router = express.Router()
const apiController = require('../controllers/apiController')
const {validarID} = require('../middleware/validarid')
const checks = require('../middleware/checks')
const {validarChecks}= require('../middleware/validarChecks')
const validarToken = require('../middleware/validarToken')



router.get('/info',validarToken ,apiController.apiGet)
router.get('/one/:curso',apiController.apiGetOne)
router.get('/buscar',apiController.apiGetList)
router.get('/id/:id',validarID,apiController.apiGetId)
router.post('/crear',validarToken,checks,validarChecks,apiController.apiPost)
router.put('/editar/:id',validarToken,validarID,checks,validarChecks,apiController.apiPut)
router.delete('/borrar/:id',validarToken,validarID,apiController.apiDelete)

module.exports = router