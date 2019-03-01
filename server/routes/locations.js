const express = require('express')
const db = require('../db/locations')
const router = express.Router()

router.use(express.json())

// GET / api/locations

router.get('/', (req,res)=>{
    db.getLocations() 
    .then(locations => {
      res.json(locations)
    })
})
  
router.get('/:id', (req,res) => {
    db.getLocationById(req.params.id)
    .then(location => {
        res.json(location)
    })
})

router.get('/parent/:id', (req,res) => {
    db.getLocationsByParent(req.params.id)
    .then(locations => {
        res.json(locations)
    })
})

module.exports = router