// server/auth/token.js
const jwt = require('jsonwebtoken')

const {getUserByEmail} = require('../db/users')
const verifyJwt = require('express-jwt')
const {comparePasswordToHash} = require('./hash')

function issue (req, res) {
  getUserByEmail(req.body.email)
    .then(user => {
      if (!user) {
        res.status(403).json({message: 'User does not exist'})
      } else {
        const token = createToken(user, process.env.GEAR_ENV)
        res.json({
          message: 'Authentication successful',
          token
        })
      }
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
}

function createToken (user, secret) {
  const payload = {
    user_id: user.user_id,
    username: user.username
  }

  const options = {
    expiresIn: '24h'
  }

  return jwt.sign(payload, secret, options)
}

function decode (req, res, next) {
  verifyJwt({ secret: process.env.GEAR_ENV, credentialsRequired: true })(req, res, next)
}

module.exports = {
  issue,
  decode,
}
