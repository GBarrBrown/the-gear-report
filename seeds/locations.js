
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1,  name: 'North', island_name: 'North', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: 'island', lat_long: ''},
        {id: 2,  name: 'South', island_name: 'South', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: 'island', lat_long: ''},
        {id: 3,  name: 'Northland', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 4,  name: 'Auckland', island_name: 'North', region_name: 'Auckland', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 5,  name: 'Coromandel Peninsula', island_name: 'North', region_name: '', area_name: 'Coromandel Peninsula', crag_name: '', tc_id: '', parent_id: '1', type: 'area', lat_long: ''},
        {id: 6,  name: 'Waikato', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 7,  name: 'Bay Of Plenty', island_name: 'North', region_name: '', area_name: 'Bay Of Plenty', crag_name: '', tc_id: '', parent_id: '1', type: 'area', lat_long: ''},
        {id: 8,  name: 'Lake Taupo', island_name: 'North', region_name: 'Lake Taupo', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 9,  name: 'Tongariro National Park', island_name: 'North', region_name: 'Tongariro National Park', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 10,  name: 'Taranaki', island_name: 'North', region_name: 'Taranaki', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 11,  name: 'Wellington', island_name: 'North', region_name: 'Wellington', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 12,  name: 'Ti Point', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Ti Point', tc_id: '', parent_id: '3', type: 'crag', lat_long: ''},
        {id: 13,  name: 'Pukepohatu/ Bald Rock', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Pukepohatu/ Bald Rock', tc_id: '', parent_id: '3', type: 'crag', lat_long: ''},
        {id: 14,  name: 'Waipu Cove', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Waipu Cove', tc_id: '', parent_id: '3', type: 'crag', lat_long: ''},
        {id: 15,  name: 'Maungaraho', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Maungaraho', tc_id: '', parent_id: '3', type: 'crag', lat_long: ''},
        {id: 16,  name: 'Tokatoka', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Tokatoka', tc_id: '', parent_id: '3', type: 'crag', lat_long: ''},
        {id: 17,  name: 'Whangarei Heads', island_name: 'North', region_name: 'Northland', area_name: 'Whangarei Heads', crag_name: '', tc_id: '', parent_id: '3', type: 'area', lat_long: ''},
        {id: 18,  name: 'Ngahere Drive ', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Ngahere Drive ', tc_id: '', parent_id: '3', type: 'crag', lat_long: ''},
        {id: 19,  name: 'Waro Reserve', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Waro Reserve', tc_id: '', parent_id: '3', type: 'crag', lat_long: ''},
        {id: 20,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 21,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 22,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 23,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 24,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 25,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 26,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 27,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 28,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 29,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 30,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 31,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 32,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 33,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 34,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 35,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 36,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 37,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 38,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 39,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 40,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 41,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 42,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 43,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 44,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 45,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        {id: 46,  name: '', island_name: '', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: '', lat_long: ''},
        
      ]);
    });
};
