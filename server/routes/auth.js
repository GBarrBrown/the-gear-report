// server/routes/auth.js

const router = require('express').Router()
const token = require('../auth/token')

const {userExists, createUser} = require('../db/users')

router.post('/register', register, token.issue)

function register (req, res, next) {
  const {name, email, password} = req.body
  userExists(email)
    .then(exists => {
      if (exists) return res.status(400).send({message: "User Name Taken"})
      createUser(name, email, password)
        .then(() => next())
        .catch(err => res.status(500).send({message: "Server Error"}))
    })
    .catch(err => res.status(500).send({message: "Server Error"}))
}

router.post('/login', token.issue)

module.exports = router