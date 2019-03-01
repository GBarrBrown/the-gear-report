const express = require('express')
const router = express.Router()
const db = require('../db/locations')
const { Request } = require('superagent')

// router.use(express.json())

router.get('/:locId', (req,res) => {
    // db.getLocationsByParent(req.params.locId)
    // .then(locations => {
    //     console.log(locations)
    // })
    Request
    .get('https://maps.googleapis.com/maps/api/staticmap?center=Taranaki,Nz&size=400x400&key=AIzaSyCRxmSZK32nQHfg32jz1btIxI9gvZpFsLU')
    .then(res => {
        res.body
    })
    
    // db.getGlobe(req.params.location, req.params.markers)
})

module.exports = router