// server/routes/auth.js

const router = require('express').Router()
const token = require('../auth/token')

router.post('/', token.issue)

module.exports = router