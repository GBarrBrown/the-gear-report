
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        {id: 1, title: 'Worn cable at the Point', description: '20m past high hopes, rope is frayed and looks like it will fail soon', severity: 4, island_name: 'North', region_name: 'Auckland', area_name: 'Coromandel', crag_name: 'Castle Rock', wall_name: "Quiet Earth Wall", route_name: "ANZAC Parade", has_grant: "true", created_at: "2019-01-11 10:18:56"},
        {id: 2, title: 'Old climbing tape', description: 'Next to Bete Noir', severity: 3, island_name: 'North', region_name: 'Waikato', area_name: 'Wharepapa', crag_name: 'Froggatt Edge', wall_name: "Hold on to your face wall", route_name: "Safety Buffalo", has_grant: "true", created_at: "2019-02-09 10:18:56"},
        {id: 3, title: 'Rockfall', description: 'Entrance to Castle Rock', severity: 1, island_name: 'North', region_name: 'Auckland', area_name: 'Coromandel', crag_name: 'Castle Rock', has_grant: "false", created_at: "2019-01-02 10:18:56"},
      ]);
    });
};
