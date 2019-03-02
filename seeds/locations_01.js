
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      return knex('locations').insert([
                // Tongariro National Park
                {id: 65,  name: 'Mt Ruapehu', island_name: 'North', region_name: 'Tongariro National Park', area_name: 'Mt Ruapehu', crag_name: '', tc_id: '', parent_id: '9', type: 'area', lat_long: ''},
                {id: 66,  name: 'Mangatepopo Valley', island_name: 'North', region_name: 'Tongariro National Park', area_name: '', crag_name: 'Mangatepopo Valley', tc_id: '11874313', parent_id: '9', type: 'crag', lat_long: ''},
                {id: 67,  name: 'Whakapapa Gorge', island_name: 'North', region_name: 'Tongariro National Park', area_name: '', crag_name: 'Whakapapa Gorge', tc_id: '585779421', parent_id: '9', type: 'crag', lat_long: ''},
                {id: 68,  name: 'Tukino', island_name: 'North', region_name: 'Tongariro National Park', area_name: 'Tukino', crag_name: '', tc_id: '', parent_id: '9', type: 'area', lat_long: ''},
        
                // Taranaki
                {id: 69,  name: 'Mount Taranaki (Egmont)', island_name: 'North', region_name: 'Taranaki', area_name: '', crag_name: 'Mount Taranaki (Egmont)', tc_id: '', parent_id: '10', type: 'crag', lat_long: ''},
        
                // Wellington
                {id: 70,  name: 'Baring Head', island_name: 'North', region_name: 'Wellington', area_name: '', crag_name: 'Baring Head', tc_id: '11875657', parent_id: '11', type: 'crag', lat_long: ''},
                {id: 71,  name: 'Titahi Bay', island_name: 'North', region_name: 'Wellington', area_name: '', crag_name: 'Titahi Bay', tc_id: '11875681', parent_id: '11', type: 'crag', lat_long: ''},
                {id: 72,  name: 'Pukerua Bay', island_name: 'North', region_name: 'Wellington', area_name: '', crag_name: 'Pukerua Bay', tc_id: '11875705', parent_id: '11', type: 'crag', lat_long: ''},
                {id: 73,  name: 'Turakirae Head', island_name: 'North', region_name: 'Wellington', area_name: '', crag_name: 'Turakirae Head', tc_id: '11875729', parent_id: '11', type: 'crag', lat_long: ''},
                {id: 74,  name: 'Fly Rock', island_name: 'North', region_name: 'Wellington', area_name: '', crag_name: 'Fly Rock', tc_id: '11875777', parent_id: '11', type: 'crag', lat_long: ''},
        
                // Buck Rock
                {id: 75,  name: 'Main Cliff', tc_id: '', parent_id: '30', type: 'cliff', description: 'The main cliff area with the most routes. The path leads up to Première and the routes are both to the right and left. Some good link up options exist by mixing up belay points and different climbs. There is quite a bit of loose rock around so helmets and caution advised, the crag is steep so take care on accessing routes and belaying.', },
                {id: 76,  name: 'Summit Crag', tc_id: '', parent_id: '30', type: 'cliff'},
        
                // Summit Crag
                {id: 77, name: 'Instant Gratification', parent_id: '76', type: 'route', grade: '21', height: '15m', style: 'sport', quality: '2', pitches: '1', quickdraws: '6'},
                {id: 78, name: 'Fight or Flight', parent_id: '76', type: 'route', grade: '24', height: '15m', style: 'sport', quality: '2', pitches: '1', quickdraws: '6'},
                {id: 79, name: 'The Earl of Buckingham', parent_id: '76', type: 'route', grade: '20', height: '15m', style: 'sport', quality: '2', pitches: '1', quickdraws: '6'},
                {id: 80, name: 'Left Crack Route', parent_id: '76', type: 'route', grade: '16', height: '15m', style: 'trad', quality: '', pitches: '1', quickdraws: '7'},
                {id: 81, name: 'Right Direcrional Crack Route', parent_id: '76', type: 'route', grade: '16', height: '10m', style: 'trad', quality: '1', pitches: '', quickdraws: ''},
                {id: 82, name: 'Renee', parent_id: '76', type: 'route', grade: '20', height: '12m', style: 'sport', quality: '1', pitches: '1', quickdraws: '5'},
        
                // Main Cliff
                {id: 83, name: 'Arete Route', parent_id: '75', type: 'route', grade: '15', height: '50m', style: 'sport', quality: '', pitches: '', quickdraws: ''},
                {id: 84, name: 'Midnight Lightning', parent_id: '75', type: 'route', grade: '17', height: '80m', style: 'sport', quality: '1', pitches: '2', quickdraws: '13'},
                {id: 85, name: 'Midnight Summer Dream', parent_id: '75', type: 'route', grade: '17', height: '60m', style: 'sport', quality: '1', pitches: '3', quickdraws: '13'},
                {id: 86, name: 'Original Route', parent_id: '75', type: 'route', grade: '16', height: '50m', style: 'sport', quality: '', pitches: '4', quickdraws: ''},
                {id: 87, name: 'Bolt Clinic', parent_id: '75', type: 'route', grade: '24', height: '50m', style: 'sport', quality: '1', pitches: '2', quickdraws: '17'},
                {id: 88, name: 'JAFA Cake', parent_id: '75', type: 'route', grade: '18', height: '55m', style: 'sport', quality: '2', pitches: '2', quickdraws: '19'},
                {id: 89, name: 'Bung Light', parent_id: '75', type: 'route', grade: '23', height: '55m', style: 'sport', quality: '2', pitches: '2', quickdraws: '13'},
        
                // Ti Point
                {id: 90,  name: 'The Preamble', tc_id: '', parent_id: '12', type: 'cliff', description: 'There is an access track around the back of the crag which may have to be used at high tide and also provide access to the top of most routes.', },
                {id: 91,  name: 'The Arch', tc_id: '', parent_id: '12', type: 'cliff', description: 'There is an access track around the back of the crag which may have to be used at high tide and also provide access to the top of most routes.', },
                {id: 92,  name: 'The Ampitheatre', tc_id: '', parent_id: '12', type: 'cliff', description: 'Walk to "The Arch" and keep walking', },
        
                // The Preamble
                {id: 93, name: 'To the Max', parent_id: '90', type: 'route', grade: '19', height: '15m', style: 'sport', quality: '1', pitches: '', quickdraws: '4'},
                {id: 94, name: 'Shenzy', parent_id: '90', type: 'route', grade: '14', height: '20m', style: 'trad', quality: '', pitches: '', quickdraws: ''},
                {id: 95, name: 'Ngombo', parent_id: '90', type: 'route', grade: '15', height: '20m', style: 'trad', quality: '', pitches: '', quickdraws: ''},
                {id: 96, name: 'Tashi Deli', parent_id: '90', type: 'route', grade: '21', height: '15m', style: 'sport', quality: '2', pitches: '', quickdraws: '5'},
                // The Arch
                {id: 97, name: 'Chockstone Chimney', parent_id: '91', type: 'route', grade: '14', height: '30m', style: 'trad', quality: '1', pitches: '', quickdraws: ''},
                {id: 98, name: 'Hotch Potch', parent_id: '91', type: 'route', grade: '13', height: '30m', style: 'trad', quality: '', pitches: '', quickdraws: ''},
                {id: 99, name: 'Kyrie Ellison', parent_id: '91', type: 'route', grade: '14', height: '35m', style: 'trad', quality: '', pitches: '', quickdraws: ''},
                // The Ampitheatre
                {id: 100, name: 'Gom Jabbar', parent_id: '92', type: 'route', grade: '18', height: '25m', style: 'trad', quality: '', pitches: '', quickdraws: ''},
                {id: 101, name: 'The Angry Sea and the Sky', parent_id: '92', type: 'route', grade: '18', height: '20m', style: 'sport', quality: '2', pitches: '', quickdraws: '5'},
                {id: 102, name: 'The Angel of Calcutta', parent_id: '92', type: 'route', grade: '17', height: '20m', style: 'sport', quality: '2', pitches: '', quickdraws: '6'},
                {id: 103, name: '52nd Symphony', parent_id: '92', type: 'route', grade: '22', height: '20m', style: 'sport', quality: '2', pitches: '', quickdraws: '6'},
        
      ]);
};
