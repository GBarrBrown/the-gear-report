
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.string('profile_url')
    table.boolean('admin').defaultTo(false)
    table.string('hash')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
