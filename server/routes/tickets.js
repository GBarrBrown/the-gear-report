//server routes/tickets.js

const express = require('express')
const ticketDb = require('../db/tickets')

const router = express.Router()

router.use(express.json())

router.post('/', (req,res)=>{
 console.log(req.body)
 const {user, title, description, severity, island, region, area, crag, wall, route} = req.body
  db.addTicket(user, title, description, severity, island, region, area, crag, wall, route)
  .then(result =>{
    console.log('result',result)
    // res.json(veg)
  })
})

router.get('/all', (req, res) => {
  console.log('routes tickets');
  ticketDb.getAllTickets()
  .then(tickets => {
    res.json(tickets)
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/ticketId/:ticketId', (req, res) => {
  var ticketId = req.params.ticketId
  ticketDb.getTicketById(ticketId)
  .then(ticket => {
    res.json(ticket)
  })
  .catch(err => {
    console.log('ERROR!',err)
  })
})


module.exports = router