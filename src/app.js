const express = require('express')
const path = require('path')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const networkRouter = require('./routes/network')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/network', networkRouter)

module.exports = app
