// db tickets.js

const connection = require('./connection')

function addTicket(user, title, description, severity, island, region, area, crag, wall, route, testDb){
  const db = testDb || connection
  
  //TODO get definition on data that is saved 

  // return db('tickets')
  // // .insert({
  // //   title: title,
  // //   description: description,
  // //   severity: severity,
  
  // then(newticketId
  // join_table
  //   locations.map(object
       
  //     insert({t_id: newTickedId, l_id: object})
  //   )
  // )
  // .insert()
  
  
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

module.exports = {
  addTicket,
  getAllTickets
}