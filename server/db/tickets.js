// db tickets.js

const connection = require('./connection')

function addTicket(user, title, description, severity, location, testDb){
  const db = testDb || connection
  return db('tickets')
  .returning('id')
  .insert({
    user_id: user,
    title: title,
    description: description,
    severity: severity
  })
  .then(async newTicketId => {
    await Promise.all (location.map(id => {
      if(typeof id == 'number'){
        return db('ticket_loc')
        .returning('id')
        .insert({
          ticket_id: newTicketId[0], 
          loc_id: id
        })
      }
    }))
    console.log('server db tickets', newTicketId);
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
  return db('tickets')
  .join('users', 'users.id', 'tickets.user_id')
  .then(res => {
    let count = res.reduce((acc,cur) => {
      if(acc[cur.name]){
        acc[cur.name] += 1;
      }
      else {
        acc[cur.name] = 1;
      }
      return acc
    },{})

    var sortable = []
    for (let person in count){
      sortable.push([person, count[person]])
    }
    //sorts sortable smallest to biggest
    sortable.sort(function(a,b){
      return a[1] - b[1]
    })
    //grab the last 5 (highest contributors)
    let topContributors = sortable.slice(-5)
    //put the highest contributor as number 1
    topContributors.reverse()
    return topContributors
  })
}

function resolveTicket(id, testDb) {
  const db = testDb || connection
  return db('tickets')
  .where('id', id).update({resolved: true})
}

function updateTicket(id, update, testDb) {
  const db = testDb || connection
  return db('tickets')
  .where('id', id)
  .update(update)
}

module.exports = {
  addTicket,
  getAllTickets,
  getTicketById,
  getTicketLocationsById,
  getTicketCreator,
  getTicketsByIds,
  getTopContributors,
  resolveTicket,
  updateTicket
}