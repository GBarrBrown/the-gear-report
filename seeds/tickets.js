
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        {id: 1, title: 'Worn cable at the Arete Route', description: '20m past Arete Route on the left, rope is frayed and looks like it will fail soon', severity: 4, has_grant: true, user_id: '1'},
        {id: 2, title: 'Old climbing tape', description: 'At the top of the first anchor, climbing tape is worn out. Have tied up so it wont be used but should be replaced', severity: 3, has_grant: true, user_id: '2'},
        {id: 3, title: 'Rockfall', description: 'Entrance to The Arch', severity: 1, has_grant: false, user_id: '1'},
      ]);
    });
};
