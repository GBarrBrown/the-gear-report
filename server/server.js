const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(express.json())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/locations', require('./routes/locations'))
server.use('/api/v1/tickets', require('./routes/tickets'))
server.use('/api/v1/globe', require('./routes/globe'))
server.use('/api/v1/auth', require('./routes/auth'))

server.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})



module.exports = server