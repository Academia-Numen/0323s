module.exports = (req, res, next) =>{
    console.log("estoy en el middleware")
    if (!req.session.user) {
        res.json({
            msg: "no hay ningun usuario dentro de la session"
        })
    } else {
        next()
    }
}