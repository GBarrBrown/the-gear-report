
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Bob Blogs', email: 'bob@test.email.com', hash: '', admin: false, profile_url: '/images/blankProfilePic.png'},
        {id: 2, name: 'Alice Alan', email: 'alice@test.email.com', hash: '', admin: false, profile_url: '/images/blankProfilePic.png'},
        {id: 3, name: 'Eve Eden', email: 'eve@test.email.com', hash: '', admin: false, profile_url: '/images/blankProfilePic.png'},
        {id: 4, name: 'Carlos Carlington', email: 'carlos@test.email.com', hash: '', admin: true, profile_url: '/images/blankProfilePic.png'},
        {id: 5, name: 'Danny Devito', email: 'magnum-dong@test.email.com', hash: '', admin: true, profile_url: '/images/blankProfilePic.png'},
        {id: 6, name: 'Franklin Fischer', email: 'franklin@test.email.com', hash: '', admin: false, profile_url: '/images/blankProfilePic.png'},
        {id: 6, name: 'Gandolf Grey', email: 'gandolf@test.email.com', hash: '', admin: false, profile_url: '/images/blankProfilePic.png'},
        {id: 6, name: 'Hulk Hogan', email: 'hulk@test.email.com', hash: '', admin: true, profile_url: '/images/blankProfilePic.png'},
        {id: 6, name: 'Kanye West', email: 'kanye@test.email.com', hash: '', admin: true, profile_url: '/images/blankProfilePic.png'},
        {id: 6, name: 'Donald Trump', email: 'donald@test.email.com', hash: '', admin: true, profile_url: '/images/blankProfilePic.png'}
      ])
    });
};
