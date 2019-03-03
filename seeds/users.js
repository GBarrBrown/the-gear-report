
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Bob Blogs', email: 'bob@test.email.com', admin: false, profile_url: '/images/blankProfilePic.png'},
        {id: 2, name: 'Alice Alan', email: 'alice@test.email.com', admin: false, profile_url: '/images/blankProfilePic.png'},
        {id: 3, name: 'Eve Eden', email: 'eve@test.email.com', admin: false, profile_url: '/images/blankProfilePic.png'},
        {id: 4, name: 'Becs', email: 'zimbecs@gmail.com', admin: true, profile_url: '/images/blankProfilePic.png'}
      ]);
    });
};
