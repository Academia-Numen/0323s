const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
require('dotenv').config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log("se conecto a la base de datosssssss!!!!")
    } catch {
        console.log('error al conectarse con la base de datos')
    }
}

module.exports ={ connect }