exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets', (table) => {
      table.increments('id').primary()
      table.string('title')
          .notNullable();
      table.text('description')
          .notNullable();
      table.integer('severity')
          .notNullable();
      table.string('img')
      table.boolean('has_grant')
          .defaultTo(false)
      table.timestamps(true, true)
      table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets')
};