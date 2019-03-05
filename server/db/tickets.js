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
  return db('tickets')
  .join('users', 'users.id', 'tickets.user_id')
  .where('tickets.id', ticketId).select(
    'tickets.id', 'tickets.title',
    'tickets.description',
    'tickets.severity',
    'tickets.img',
    'tickets.has_grant',
    'tickets.resolved',
    'tickets.created_at',
    'tickets.updated_at',
    'tickets.user_id',
    'users.name',
    'users.admin',
    'users.profile_url'
  )
}

function getTicketsByIds(ticketArr, testDb) {
  const db = testDb || connection
  return db('tickets').whereIn('id', ticketArr).orderBy('created_at', 'desc')
}

function getTicketLocationsById(ticketId, testDb) {
  const db = testDb || connection 
  return db('ticket_loc')
  .where('ticket_id', ticketId)
  .join('locations', 'locations.id', 'loc_id')
  .orderBy('depth')
  .select()
}

// getTicketCreator By Ticket Id... could be moved into a users db file, though this seems more relavent
// to ticket related functions
function getTicketCreator(creatorId, testDb) {
  const db = testDb || connection
  return db('users')
  .where('id', creatorId).select().first()
}

function getTopContributors(testDb) {
  const db = testDb || connection
  // this function is unfinished but is returning something resembling what i was aiming to get..
  // might need to join to users table to assign users name to their rank in the list?? else will
  // a second db call with the user id's to get their names for the dashboard topContributor card
  return db('tickets').join('users', 'users.id', 'tickets.user_id').count('user_id as popularity').groupBy('user_id')
  .then(res => {
    console.log(res)
  })
}

function resolveTicket(id, testDb) {
  const db = testDb || connection
  return db('tickets')
  .where('id', id).update({resolved: true})
}

module.exports = {
  addTicket,
  getAllTickets,
  getTicketById,
  getTicketLocationsById,
  getTicketCreator,
  getTicketsByIds,
  getTopContributors,
  resolveTicket
}