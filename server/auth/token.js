// server/auth/token.js
const jwt = require('jsonwebtoken')

const {getUserByEmail, createUser, getUserById} = require('../db/users')
const verifyJwt = require('express-jwt')

function issue (req, res) {
  getUserByEmail(req.body.email)
    .then(user => {
      if (!user) {
        createUser(req.body).then( newUserId => {
          getUserById(newUserId[0])
          .then( user => {
            const token = createToken(user, req.body.picture, process.env.GEAR_ENV)
            res.json({
              message: 'Welcome back!',
              token
            })
          })
        })
      } else {
        const token = createToken(user, req.body.picture, process.env.GEAR_ENV)
        res.json({
          message: 'Welcome back!',
          token
        })
      }
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
}
    

function createToken (user, picture, secret) {
  const payload = {
    user_id: user.id,
    email: user.email,
    name: user.name,
    picture: picture
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
