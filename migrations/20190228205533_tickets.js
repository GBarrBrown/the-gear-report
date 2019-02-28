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
      table.string('island_name')
          .notNullable()
          .references('name')
          .inTable('island')
          .index();
      table.string('region_name')
          .notNullable()
          .references('name')
          .inTable('region')
          .index();
      table.string('area_name')
          .references('name')
          .inTable('area')
          .index();
      table.string('crag_name')
          .references('name')
          .inTable('crag')
          .index();
      table.string('wall_name')
          .references('name')
          .inTable('wall')
          .index();
      table.string('route_name')
          .references('name')
          .inTable('routes')
          .index();
      table.boolean('has_grant')
          .defaultTo(false)
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets')
};