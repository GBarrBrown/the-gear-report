
exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', (t) => {
      t.increments('id').primary()
      t.string('name')
      t.string('island_name')
      t.string('region_name')
      t.string('area_name')
      t.string('crag_name')
      t.string('tc_id')
      t.string('parent_id')
      t.string('type')
      t.string('lat_long')
      t.string('grade')
      t.string('height')
      t.string('style')
      t.string('quality')
      t.string('pitches')
      t.string('quickdraws')
      t.text('description')
      t.text('approach')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('locations') 
};
