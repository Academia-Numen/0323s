const express = require('express') 
const logger = require('morgan')
const cookie = require('cookie-parser')
const session = require('express-session')

require('dotenv').config()
 

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(cookie())
app.use(session({
    secret: process.env.SESSION,
    resave: true,
    saveUninitialized: true
}))

const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
const userRouter = require('./routes/user')
const {connect}= require('./db/connect')

app.use('/index', indexRouter)
app.use('/api', apiRouter)
app.use('/user', userRouter)
connect()


module.exports = app