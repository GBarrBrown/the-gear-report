//server routes/tickets.js

const express = require('express')
const db = require('../db/tickets')
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



module.exports = router