
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ticket_loc', (t) => {
    t.increments('id').primary()
    t.integer('ticket_id')
    t.integer('loc_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ticket_loc')
};
