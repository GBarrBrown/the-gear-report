const express = require('express')
const db = require('../db/users')
const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  db.getUserById(10)
  .then(user => {
    return res.json(user)
  })
})
 
module.exports = router