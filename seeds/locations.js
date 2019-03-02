
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1,  name: 'North', island_name: 'North', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: 'island', lat_long: ''},
        {id: 2,  name: 'South', island_name: 'South', region_name: '', area_name: '', crag_name: '', tc_id: '', parent_id: '', type: 'island', lat_long: ''},

        // north island regions
        {id: 3,  name: 'Northland', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 4,  name: 'Auckland', island_name: 'North', region_name: 'Auckland', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 5,  name: 'Coromandel Peninsula', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 6,  name: 'Waikato', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 7,  name: 'Bay Of Plenty', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 8,  name: 'Lake Taupo', island_name: 'North', region_name: 'Lake Taupo', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 9,  name: 'Tongariro National Park', island_name: 'North', region_name: 'Tongariro National Park', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 10,  name: 'Taranaki', island_name: 'North', region_name: 'Taranaki', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''},
        {id: 11,  name: 'Wellington', island_name: 'North', region_name: 'Wellington', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat_long: ''}, 

        // northland crags
        {id: 12,  name: 'Ti Point', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Ti Point', tc_id: '11874913', parent_id: '3', type: 'crag', lat_long: ''},
        {id: 13,  name: 'Pukepohatu/ Bald Rock', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Pukepohatu/ Bald Rock', tc_id: '11874889', parent_id: '3', type: 'crag', lat_long: ''},
        {id: 14,  name: 'Waipu Cove', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Waipu Cove', tc_id: '11874865', parent_id: '3', type: 'crag', lat_long: ''},
        {id: 15,  name: 'Waipu Caves', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Waipu Caves', tc_id: '11874841', parent_id: '3', type: 'crag', lat_long: ''},
        {id: 16,  name: 'Maungaraho', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Maungaraho', tc_id: '11874721', parent_id: '3', type: 'crag', lat_long: ''},
        {id: 17,  name: 'Tokatoka', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Tokatoka', tc_id: '11874745', parent_id: '3', type: 'crag', lat_long: ''},    
        {id: 18,  name: 'Whangarei Heads', island_name: 'North', region_name: 'Northland', area_name: 'Whangarei Heads', crag_name: '', tc_id: '', parent_id: '3', type: 'area', lat_long: ''},
        {id: 19,  name: 'Ngahere Drive ', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Ngahere Drive ', tc_id: '12478081', parent_id: '3', type: 'crag', lat_long: ''},
        {id: 20,  name: 'Waro Reserve', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Waro Reserve', tc_id: '11874817', parent_id: '3', type: 'crag', lat_long: ''},
    
        // auckland sub regions
        {id: 21,  name: 'Auckland City', island_name: 'North', region_name: 'Auckland City', area_name: '', crag_name: '', tc_id: '', parent_id: '4', type: 'region', lat_long: ''},
        {id: 22,  name: 'Waiheke Island', island_name: 'North', region_name: 'Waiheke Island', area_name: '', crag_name: '', tc_id: '', parent_id: '4', type: 'region', lat_long: ''},

        // auckland city
        {id: 23,  name: 'Maungarei Springs', island_name: 'North', region_name: 'Auckland City', area_name: '', crag_name: 'Maungarei Springs', tc_id: '879850311', parent_id: '21', type: 'crag', lat_long: ''},
        
        // waiheke island
        {id: 24,  name: 'Stony Batter', island_name: 'North', region_name: 'Waiheke Island', area_name: '', crag_name: '', tc_id: '', parent_id: '22', type: 'crag', lat_long: ''},

        // Coromandel peninsula
        {id: 25,  name: 'Motutere', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Motutere', tc_id: '11874985', parent_id: '5', type: 'crag', lat_long: ''},
        {id: 26,  name: 'Tairua Crag', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Tairua Crag', tc_id: '1620687828', parent_id: '5', type: 'crag', lat_long: ''},
        {id: 27,  name: 'Te Ananui', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Te Ananui', tc_id: '11874961', parent_id: '5', type: 'crag', lat_long: ''},
        {id: 28,  name: 'Maratoto', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Maratoto', tc_id: '', parent_id: '5', type: 'crag', lat_long: ''},
        {id: 29,  name: 'Karangahake Gorge', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Karangahake Gorge ', tc_id: '', parent_id: '5', type: 'crag', lat_long: ''},
        {id: 30,  name: 'Buck Rock', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Buck Rock', tc_id: '196256694', parent_id: '5', type: 'crag', lat_long: ''},

        // Waikato sub regions
        {id: 31,  name: 'Wharepapa South', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: '', tc_id: '', parent_id: '6', type: 'region', lat_long: ''},
        {id: 32,  name: 'Te Kuiti', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: '', tc_id: '', parent_id: '6', type: 'region', lat_long: ''},
        {id: 33,  name: 'Waitomo', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: '', tc_id: '', parent_id: '6', type: 'region', lat_long: ''},

        // Waikato crags (it has regions inside waikato (shown above) and individual crags)
        {id: 34,  name: 'Mangaotaki', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: 'Mangaotaki', tc_id: '11874625', parent_id: '6', type: 'crag', lat_long: ''},
        {id: 35,  name: 'Piarere', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: 'Piarere', tc_id: '', parent_id: '6', type: 'crag', lat_long: ''},
        {id: 36,  name: 'Ohakuri Dam', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: 'Ohakuri Dam', tc_id: '', parent_id: '6', type: 'crag', lat_long: ''},
        {id: 37,  name: 'Lake Whakamaru', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: 'Lake Whakamaru', tc_id: '', parent_id: '6', type: 'crag', lat_long: ''},

        // Wharepapa South
        {id: 38,  name: 'Castle Rock', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Castle Rock', tc_id: '12476017', parent_id: '31', type: 'crag', lat_long: ''},
        {id: 39,  name: 'Froggatt Edge', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Froggatt Edge', tc_id: '12476041', parent_id: '31', type: 'crag', lat_long: ''},
        {id: 40,  name: 'Sheridan Hills', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Sheridan Hills', tc_id: '12476065', parent_id: '31', type: 'crag', lat_long: ''},
        {id: 41,  name: 'Secret Valley', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Secret Valley', tc_id: '972787071', parent_id: '31', type: 'crag', lat_long: ''},
        {id: 42,  name: 'Bayley Road', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Bayley Road', tc_id: '12476161', parent_id: '31', type: 'crag', lat_long: ''},
        {id: 43,  name: 'Waipapa', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Waipapa', tc_id: '11874505', parent_id: '31', type: 'crag', lat_long: ''},

        // Te Kuiti
        {id: 44,  name: 'Mangaokewa', island_name: 'North', region_name: 'Te Kuiti', area_name: '', crag_name: 'Mangaokewa', tc_id: '80404782', parent_id: '32', type: 'crag', lat_long: ''},
        
        // Waitomo
        {id: 45,  name: 'The Airstrip', island_name: 'North', region_name: 'Waitomo', area_name: '', crag_name: 'The Airstrip', tc_id: '190687545', parent_id: '33', type: 'crag', lat_long: ''},
        {id: 46,  name: 'Frogpond', island_name: 'North', region_name: 'Waitomo', area_name: '', crag_name: 'Frogpond', tc_id: '715921614', parent_id: '33', type: 'crag', lat_long: ''},
        {id: 47,  name: 'Pakeho', island_name: 'North', region_name: 'Waitomo', area_name: '', crag_name: 'Pakeho', tc_id: '2078670879', parent_id: '33', type: 'crag', lat_long: ''},

        // Bay of Plenty
        {id: 48,  name: 'Mount Maunganui', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: 'Mount Maunganui', tc_id: '', parent_id: '7', type: 'crag', lat_long: ''},
        {id: 49,  name: 'Moturiki Island', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: 'Moturiki Island', tc_id: '', parent_id: '7', type: 'crag', lat_long: ''},
        {id: 50,  name: 'Bowentown Wall', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: 'Bowentown Wall', tc_id: '636413415', parent_id: '7', type: 'crag', lat_long: ''},
        {id: 51,  name: 'Reporoa Gorge', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: 'Reporoa Gorge', tc_id: '', parent_id: '7', type: 'crag', lat_long: ''},
        {id: 52,  name: 'Tarawera Falls', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: 'Tarawera Falls', tc_id: '12477637', parent_id: '7', type: 'crag', lat_long: ''},
        {id: 53,  name: 'Mangorewa', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: 'Mangorewa', tc_id: '1019306049', parent_id: '7', type: 'crag', lat_long: ''},

        // Taupo sub regions
        {id: 54,  name: 'Taupo East', island_name: 'North', region_name: 'Taupo East', area_name: '', crag_name: '', tc_id: '', parent_id: '8', type: 'region', lat_long: ''},
        {id: 55,  name: 'Taupo West', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: '', tc_id: '', parent_id: '8', type: 'region', lat_long: ''},

        // Taupo West
        {id: 56,  name: 'Kawakawa Bay', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Kawakawa Bay', tc_id: '12475567', parent_id: '55', type: 'crag', lat_long: ''},
        {id: 57,  name: 'Kinloch', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Kinloch', tc_id: '12475591', parent_id: '55', type: 'crag', lat_long: ''},
        {id: 58,  name: 'Middle Earth', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Middle Earth', tc_id: '12475303', parent_id: '55', type: 'crag', lat_long: ''},
        {id: 59,  name: 'Kuratau', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Kuratau', tc_id: '12475327', parent_id: '55', type: 'crag', lat_long: ''},
        {id: 60,  name: 'Karangahape Cliffs', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Karangahape Cliffs', tc_id: '12475351', parent_id: '55', type: 'crag', lat_long: ''},
        {id: 61,  name: 'Te Putu', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Te Putu', tc_id: '12475399', parent_id: '55', type: 'crag', lat_long: ''},
        {id: 62,  name: 'Tihoi', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Tihoi', tc_id: '12475543', parent_id: '55', type: 'crag', lat_long: ''},

        // Taupo East
        {id: 63,  name: 'Bulli Point', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Bulli Point', tc_id: '12475255', parent_id: '54', type: 'crag', lat_long: ''},
        {id: 64,  name: 'Te Toki Point', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Te Toki Point', tc_id: '12475279', parent_id: '54', type: 'crag', lat_long: ''},

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
      ]);
    });
};
