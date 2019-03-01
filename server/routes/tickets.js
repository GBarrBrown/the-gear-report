const express = require('express')
const db = require('../db/locations')
const router = express.Router()

router.use(express.json())



module.exports = router