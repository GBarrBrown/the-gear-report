const connection = require('./connection')

function getTicketsByLoc(locationId, testDb) {
  const db = testDb || connection 
  return db('ticket_loc')
  .where('loc_id', locationId)
  .select()
}

module.exports = {
  getTicketsByLoc
}