
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        {id: 1, title: 'Worn cable at the Arete Route', description: '20m past Arete Route on the left, rope is frayed and looks like it will fail soon', severity: 4, has_grant: true, resolved: false, user_id: 1},
        {id: 2, title: 'Old climbing tape', description: 'At the top of the first anchor, climbing tape is worn out. Have tied up so it wont be used but should be replaced', severity: 3, has_grant: true, resolved: false, user_id: 2},
        {id: 3, title: 'Rockfall', description: 'Entrance to The Arch', severity: 1, has_grant: false, resolved: false, user_id: 1},
        {id: 4, title: 'Loose Anchor', description: 'The second anchor up the route appears to be coming loose, would not recommend climbing', severity: 4, has_grant: true, resolved: false, user_id: 4},
        {id: 5, title: 'Fallen Tree', description: 'There is a fallen tree leaning against the wall, blocking access', severity: 1, has_grant: false, resolved: true, user_id: 5},
        {id: 6, title: 'Broken Anchor', description: 'The highest anchor on the route has been broken', severity: 2, has_grant: true, resolved: false, user_id: 5},
        {id: 7, title: 'Missing Anchor', description: 'Lowest anchor on the route is missing and needs replacing', severity: 1, has_grant: true, resolved: true, user_id: 6},
        {id: 8, title: 'Loose Rockface', description: 'Tokatoka rockface is crumbling away, DO NOT CLIMB', severity: 5, has_grant: false, resolved: false, user_id: 3},
        {id: 9, title: 'Rock slide', description: 'Access to wall restricted by rock slide', severity: 3, has_grant: false, resolved: true, user_id: 3},
        {id: 10, title: '', description: '', severity: '', has_grant: true, resolved: false, user_id: 1},
        {id: 11, title: '', description: '', severity: '', has_grant: true, resolved: false, user_id: 1},
        {id: 12, title: '', description: '', severity: '', has_grant: true, resolved: false, user_id: 2},
        {id: 13, title: '', description: '', severity: '', has_grant: true, resolved: false, user_id: 2},
        {id: 14, title: '', description: '', severity: '', has_grant: true, resolved: false, user_id: 3},
        {id: 15, title: '', description: '', severity: '', has_grant: true, resolved: false, user_id: 3},
        {id: 16, title: '', description: '', severity: '', has_grant: true, resolved: false, user_id: 3},
        {id: 17, title: '', description: '', severity: '', has_grant: true, resolved: false, user_id: 4},
        {id: 18, title: '', description: '', severity: '', has_grant: true, resolved: false, user_id: 4},
        {id: 19, title: '', description: '', severity: '', has_grant: true, resolved: false, user_id: 1},
        {id: 20, title: '', description: '', severity: '', has_grant: true, resolved: false, user_id: 2},
        {id: 21, title: '', description: '', severity: '', has_grant: true, resolved: false, user_id: 4},
        {id: 22, title: '', description: '', severity: '', has_grant: true, resolved: false, user_id: 5},
        {id: 23, title: '', description: '', severity: '', has_grant: true, resolved: false, user_id: 5},

      ]);
    });
};
