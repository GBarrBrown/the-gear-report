//server routes/tickets.js

const express = require('express')

const db = require('../db/locations')
const ticketDb = require('../db/tickets')

const router = express.Router()

router.use(express.json())

router.post('/', (req,res)=>{
 const {user, title, description, severity, location} = req.body
 ticketDb.addTicket(user, title, description, severity, location)
  .then((result) =>{
    console.log('route', result)
    res.json(result)
  })
  .catch(err => {
    console.log('ERROR!',err)
  })
})

router.get('/all', (req, res) => {
  ticketDb.getAllTickets()
  .then(tickets => {
    res.json(tickets)
  })
  .catch(err => {
    console.log('ERROR!',err)
  })
})

router.get('/ticketId/:ticketId', (req, res) => {
  console.log('routes', req.params.ticketId)
  var ticketId = req.params.ticketId
  console.log(ticketId)
  ticketDb.getTicketById(ticketId)
  .then(ticket => {
    console.log(ticket)
    res.json(ticket)
  })
  .catch(err => {
    console.log('ERROR!',err)
  })
})

router.get('/locationsById/:ticketId', (req, res) => {
  var ticketId = req.params.ticketId
  ticketDb.getTicketLocationsById(ticketId)
  .then(locations => {
    res.json(locations)
  })
  .catch(err => {
  console.log('ERROR!', err)
  })

})

router.get('/creatorById/:creatorId', (req, res) => {
  var creatorId = req.params.creatorId
  console.log('hitting getTicketCreator in server/routes/tickets with id:', creatorId)
  ticketDb.getTicketCreator(creatorId)
  .then(ticketCreator => {
    console.log('ticket creator: ', ticketCreator)
    res.json(ticketCreator)
  })
  .catch(err => {
    console.log('ERROR!', err)
  })
})


module.exports = router