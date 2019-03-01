const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(express.json())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/locations', require('./routes/locations'))
server.use('/api/tickets', require('./routes/tickets'))
server.use('/api/globe', require('./routes/globe'))

server.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})



module.exports = server