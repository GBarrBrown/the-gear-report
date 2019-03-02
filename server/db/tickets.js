const connection = require('./connection')

function addTicket(veg, user, testDb){
  const db = testDb || connection
  return db('users')
  .where('username', user.username)
  .select('users.id').first().then(user => {
    return db('garden')
    .where('user_id', user.id)
    .where('veg_id', veg.id).then((rows)=>{
      if (rows.length===0) {
        return db('garden').insert({veg_id: veg.id, user_id: user.id})
      }
    })
    .catch(err => {
      console.log(err)
    })
  })
}

function getAllTickets(testDb) {
  const db = testDb || connection
  return db('tickets')
}

module.exports = {
  addTicket,
  getAllTickets
}