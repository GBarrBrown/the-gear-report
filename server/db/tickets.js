// db tickets.js

const connection = require('./connection')

function addTicket(user, title, description, severity, island, region, area, crag, wall, route, testDb){
  const db = testDb || connection
  
  //TODO get definition on data that is saved 

  return db('tickets')
  // .insert({
  //   title: title,
  //   description: description,
  //   severity: severity,
  
  
  // })
  // .select('users.id').first().then(user => {
  //   return db('garden')
  //   .where('user_id', user.id)
  //   .where('veg_id', veg.id).then((rows)=>{
  //     if (rows.length===0) {
  //       return db('garden').insert({veg_id: veg.id, user_id: user.id})
  //     }
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // })
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