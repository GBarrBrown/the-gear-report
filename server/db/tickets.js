// db tickets.js

const connection = require('./connection')

function addTicket(user, title, description, severity, location, testDb){
  const db = testDb || connection

  return db('tickets')
  .insert({
    title: title,
    description: description,
    severity: severity
  })
  .then(newTicketId => {
    location.map(id => {
      if(typeof id === number)
       return db('ticket_loc')
       .insert({t_id: newTicketId, l_id: id})
    })
  })
  .catch(err => {
    console.log(err)
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