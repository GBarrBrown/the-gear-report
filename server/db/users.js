const {generatePasswordHash} = require('../auth/hash')

const connection = require('./connection')

function createUser (name, email, password, testDb) {
  const db = testDb || connection
  return generatePasswordHash(password)
    .then(hash => {
      return db('users').insert({name, email, hash})
    })
}

function userExists (email, testDb) {
  const db = testDb || connection
  return db('users')
    .where('email', email)
    .then(users => users.length > 0)
}

function getUserByEmail (email, testDb) {
  const db = testDb || connection
  return db('users')
    .where('email', email)
    .first()
}

module.exports = {
  createUser,
  userExists,
  getUserByEmail
}
