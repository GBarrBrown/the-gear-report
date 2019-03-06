exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.text('description');
    table.integer('severity')
    table.string('img')
    table.boolean('has_grant').defaultTo(false)
    table.boolean('resolved').defaultTo(false)
    table.timestamps(true, true)
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets')
};