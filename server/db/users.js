
const connection = require('./connection')

function createUser (userInfo, testDb) {
  const db = testDb || connection
  const {name, email} = userInfo
 
  return db('users').insert({name, email })
    
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

function getUserById (id, testDb) {
  const db = testDb || connection
  return db('users')
    .where('id', id)
    .first()
}

module.exports = {
  createUser,
  userExists,
  getUserByEmail,
  getUserById
}
