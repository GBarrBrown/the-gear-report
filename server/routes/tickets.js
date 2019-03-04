//server routes/tickets.js

const express = require('express')

const db = require('../db/locations')
const ticketDb = require('../db/tickets')
const ticket_locDb = require('../db/ticket_loc')

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
  console.log('ping');
  console.log('back end', req.query.ticketId);
  var ticketId = req.params.ticketId
  ticketDb.getTicketById(ticketId)
  .then(ticket => {
    res.json(ticket)
  })
  .catch(err => {
    console.log('ERROR!',err)
  })
})

router.get('/locationId/:locationId', (req, res) => {
  var locationId = req.params.locationId
  ticket_locDb.getTicketsByLoc(locationId)
  .then(tickets => {
    console.log('tickets routes');
    res.json(tickets)
  })
  .catch(err => {
    console.log('ERROR!',err)
  })
})

router.post('/ticketIds', (req,res) => {
  console.log('hit');
  console.log('test', req.body)
  ticketDb.getTicketsByIds(req.body)
  .then(tickets => {
    console.log(tickets);
    res.json(tickets)
  })
  .catch(err => {
    console.log('ERROR!',err)
  })
})  



module.exports = router