
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
        {id: 16, ticket_id: 1, loc_id: 104},
        {id: 17, ticket_id: 2, loc_id: 104},
        {id: 18, ticket_id: 3, loc_id: 104},
        {id: 19, ticket_id: 4, loc_id: 57},
        {id: 20, ticket_id: 4, loc_id: 8},
        {id: 21, ticket_id: 4, loc_id: 1},
        {id: 22, ticket_id: 4, loc_id: 104},
        {id: 23, ticket_id: 5, loc_id: 71},
        {id: 24, ticket_id: 5, loc_id: 11},
        {id: 25, ticket_id: 5, loc_id: 1},
        {id: 26, ticket_id: 5, loc_id: 104},
        {id: 27, ticket_id: 6, loc_id: 69},
        {id: 28, ticket_id: 6, loc_id: 10},
        {id: 29, ticket_id: 6, loc_id: 1},
        {id: 30, ticket_id: 6, loc_id: 104},
        {id: 31, ticket_id: 7, loc_id: 72},
        {id: 32, ticket_id: 7, loc_id: 11},
        {id: 33, ticket_id: 7, loc_id: 1},
        {id: 34, ticket_id: 7, loc_id: 104},
        {id: 35, ticket_id: 8, loc_id: 17},
        {id: 36, ticket_id: 8, loc_id: 3},
        {id: 37, ticket_id: 8, loc_id: 1},
        {id: 38, ticket_id: 8, loc_id: 104},
        {id: 39, ticket_id: 9, loc_id: 90},
        {id: 40, ticket_id: 9, loc_id: 12},
        {id: 41, ticket_id: 9, loc_id: 3},
        {id: 42, ticket_id: 9, loc_id: 1},
        {id: 43, ticket_id: 9, loc_id: 104}

      ]);
    });
};
