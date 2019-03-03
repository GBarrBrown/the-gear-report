
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ticket_loc').del()
    .then(function () {
      // Inserts seed entries
      return knex('ticket_loc').insert([
        {id: 1, ticket_id: 1, loc_id: 1},
        {id: 2, ticket_id: 1, loc_id: 5},
        {id: 3, ticket_id: 1, loc_id: 30},
        {id: 4, ticket_id: 1, loc_id: 75},
        {id: 5, ticket_id: 1, loc_id: 83},
        {id: 6, ticket_id: 2, loc_id: 1},
        {id: 7, ticket_id: 2, loc_id: 3},
        {id: 8, ticket_id: 2, loc_id: 12},
        {id: 9, ticket_id: 2, loc_id: 90},
        {id: 10, ticket_id: 2, loc_id: 93},
        {id: 11, ticket_id: 3, loc_id: 1},
        {id: 12, ticket_id: 3, loc_id: 3},
        {id: 13, ticket_id: 3, loc_id: 12},
        {id: 14, ticket_id: 3, loc_id: 91},
        {id: 15, ticket_id: 3, loc_id: 97},
      ]);
    });
};
