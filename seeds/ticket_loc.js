
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ticket_loc').del()
    .then(function () {
      // Inserts seed entries
      return knex('ticket_loc').insert([
        {id: 1, ticket_id: 1, loc_id: 2},
        {id: 2, ticket_id: 1, loc_id: 2},
        {id: 3, ticket_id: 1, loc_id: 2}
      ]);
    });
};
