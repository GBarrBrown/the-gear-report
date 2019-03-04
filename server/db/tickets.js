// db tickets.js

const connection = require('./connection')

function addTicket(user, title, description, severity, location, testDb){
  const db = testDb || connection
  return db('tickets')
  .insert({
    user_id: user,
    title: title,
    description: description,
    severity: severity
  })
  .then(async newTicketId => {
    await Promise.all (location.map(id => {
      if(typeof id == 'number'){
        return db('ticket_loc').insert({
          ticket_id: newTicketId[0], 
          loc_id: id
        })
      }
    }))
    return newTicketId
  })
  .catch(err => {
    console.log(err)
  }) 
}

function getAllTickets(testDb) {
  const db = testDb || connection
  return db('tickets')
}

function getTicketById(ticketId, testDb) {
  const db = testDb || connection
  return db('tickets').where('id', ticketId).first()
}

function getTicketLocationsById(ticketId, testDb) {
  const db = testDb || connection 
  return db('ticket_loc')
  .where('ticket_id', ticketId)
  .join('locations', 'locations.id', 'loc_id')
  .select()

}

module.exports = {
  addTicket,
  getAllTickets,
  getTicketById,
  getTicketLocationsById
}