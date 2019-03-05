
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1,  name: 'North', parent_id: '104', island_name: 'North', region_name: '', area_name: '', crag_name: '', tc_id: '', type: 'island', lat: '', long: '', depth: '2'},
        {id: 2,  name: 'South', parent_id: '104', island_name: 'South', region_name: '', area_name: '', crag_name: '', tc_id: '', type: 'island', lat: '', long: '', depth: '2'},

        // north island regions
        {id: 3,  name: 'Northland', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: 35.378764, long: 173.886515, depth: '3'},
        {id: 4,  name: 'Auckland', island_name: 'North', region_name: 'Auckland', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -36.854879, long: 174.756941, depth: '3'},
        {id: 5,  name: 'Coromandel Peninsula', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -36.832302, long: 175.583376, depth: '3'},
        {id: 6,  name: 'Waikato', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -37.580256, long: 175.159297, depth: '3'},
        {id: 7,  name: 'Bay Of Plenty', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -38.341210, long: 177.240525, depth: '3'},
        {id: 8,  name: 'Lake Taupo', island_name: 'North', region_name: 'Lake Taupo', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -38.777244, long: 175.913973, depth: '3'},
        {id: 9,  name: 'Tongariro National Park', island_name: 'North', region_name: 'Tongariro National Park', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -39.127961, long: 175.651724, depth: '3'},
        {id: 10,  name: 'Taranaki', island_name: 'North', region_name: 'Taranaki', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -39.260428, long: 174.363805, depth: '3'},
        {id: 11,  name: 'Wellington', island_name: 'North', region_name: 'Wellington', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -41.270910, long: 174.850551, depth: '3'}, 

        // northland crags
        {id: 12,  name: 'Ti Point', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Ti Point', tc_id: '11874913', parent_id: '3', type: 'crag', lat: '', long: '', description: 'Ti Point offers a great day trip destination for climbers, providing good a mix of quality sport/trad climbing on coastal basalt. The sea cliffs here are generally solid but be aware that there are some loose blocks about.', approach: 'Ti Point is located about 90 km north of the Auckland CBD, near Leigh.', depth: '4'},
        {id: 13,  name: 'Pukepohatu/ Bald Rock', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Pukepohatu/ Bald Rock', tc_id: '11874889', parent_id: '3', type: 'crag', lat: '', long: '', depth: '4'},
        {id: 14,  name: 'Waipu Cove', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Waipu Cove', tc_id: '11874865', parent_id: '3', type: 'crag', lat: '', long: '', depth: '4'},
        {id: 15,  name: 'Waipu Caves', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Waipu Caves', tc_id: '11874841', parent_id: '3', type: 'crag', lat: '', long: '', depth: '4'},
        {id: 16,  name: 'Maungaraho', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Maungaraho', tc_id: '11874721', parent_id: '3', type: 'crag', lat: '', long: '', depth: '4'},
        {id: 17,  name: 'Tokatoka', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Tokatoka', tc_id: '11874745', parent_id: '3', type: 'crag', lat: '', long: '', depth: '4'},    
        {id: 18,  name: 'Whangarei Heads', island_name: 'North', region_name: 'Northland', area_name: 'Whangarei Heads', crag_name: '', tc_id: '', parent_id: '3', type: 'area', lat: '', long: '', depth: '4'},
        {id: 19,  name: 'Ngahere Drive ', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Ngahere Drive ', tc_id: '12478081', parent_id: '3', type: 'crag', lat: '', long: '', depth: '4'},
        {id: 20,  name: 'Waro Reserve', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Waro Reserve', tc_id: '11874817', parent_id: '3', type: 'crag', lat: '', long: '', depth: '4'},
    
        // auckland sub regions
        {id: 21,  name: 'Auckland City', island_name: 'North', region_name: 'Auckland City', area_name: '', crag_name: '', tc_id: '', parent_id: '4', type: 'region', lat: '', long: '', depth: '4'},
        {id: 22,  name: 'Waiheke Island', island_name: 'North', region_name: 'Waiheke Island', area_name: '', crag_name: '', tc_id: '', parent_id: '4', type: 'region', lat: '', long: '', depth: '4'},

        // auckland city
        {id: 23,  name: 'Maungarei Springs', island_name: 'North', region_name: 'Auckland City', area_name: '', crag_name: 'Maungarei Springs', tc_id: '879850311', parent_id: '21', type: 'crag', lat: '', long: '', depth: '5'},
        
        // waiheke island
        {id: 24,  name: 'Stony Batter', island_name: 'North', region_name: 'Waiheke Island', area_name: '', crag_name: '', tc_id: '', parent_id: '22', type: 'crag', lat: '', long: '', depth: '5'},

        // Coromandel peninsula
        {id: 25,  name: 'Motutere', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Motutere', tc_id: '11874985', parent_id: '5', type: 'crag', lat: '', long: '', depth: '4'},
        {id: 26,  name: 'Tairua Crag', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Tairua Crag', tc_id: '1620687828', parent_id: '5', type: 'crag', lat: '', long: '', depth: '4'},
        {id: 27,  name: 'Te Ananui', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Te Ananui', tc_id: '11874961', parent_id: '5', type: 'crag', lat: '', long: '', depth: '4'},
        {id: 28,  name: 'Maratoto', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Maratoto', tc_id: '', parent_id: '5', type: 'crag', lat: '', long: '', depth: '4'},
        {id: 29,  name: 'Karangahake Gorge', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Karangahake Gorge ', tc_id: '', parent_id: '5', type: 'crag', lat: '', long: '', depth: '4'},
        {id: 30,  name: 'Buck Rock', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Buck Rock', tc_id: '196256694', parent_id: '5', type: 'crag', lat: '', long: '', depth: '4', description: 'Great rural crag with easy access from Hamilton, Tauranga and Auckland. Good rock with some long multi pitch routes (up to 80m).', approach: 'From Te Aroha, drive south down Te Aroha/Gordon road, ~2 km out of town turn left into Waiorangomai road, 1km down the road is the Waiorangomai settlement and gold mine car park. Buck Rock is a 40min walk up the hill.'},

        // Waikato sub regions
        {id: 31, depth: '4',  name: 'Wharepapa South', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: '', tc_id: '', parent_id: '6', type: 'region', lat: '', long: ''},
        {id: 32, depth: '4',  name: 'Te Kuiti', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: '', tc_id: '', parent_id: '6', type: 'region', lat: '', long: ''},
        {id: 33, depth: '4',  name: 'Waitomo', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: '', tc_id: '', parent_id: '6', type: 'region', lat: '', long: ''},

        // Waikato crags (it has regions inside waikato (shown above) and individual crags)
        {id: 34, depth: '4',  name: 'Mangaotaki', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: 'Mangaotaki', tc_id: '11874625', parent_id: '6', type: 'crag', lat: '', long: ''},
        {id: 35, depth: '4',  name: 'Piarere', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: 'Piarere', tc_id: '', parent_id: '6', type: 'crag', lat: '', long: ''},
        {id: 36, depth: '4',  name: 'Ohakuri Dam', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: 'Ohakuri Dam', tc_id: '', parent_id: '6', type: 'crag', lat: '', long: ''},
        {id: 37, depth: '4',  name: 'Lake Whakamaru', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: 'Lake Whakamaru', tc_id: '', parent_id: '6', type: 'crag', lat: '', long: ''},

        // Wharepapa South
        {id: 38, depth:'5',  name: 'Castle Rock', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Castle Rock', tc_id: '12476017', parent_id: '31', type: 'crag', lat: '', long: ''},
        {id: 39, depth:'5',  name: 'Froggatt Edge', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Froggatt Edge', tc_id: '12476041', parent_id: '31', type: 'crag', lat: '', long: ''},
        {id: 40, depth:'5',  name: 'Sheridan Hills', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Sheridan Hills', tc_id: '12476065', parent_id: '31', type: 'crag', lat: '', long: ''},
        {id: 41, depth:'5',  name: 'Secret Valley', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Secret Valley', tc_id: '972787071', parent_id: '31', type: 'crag', lat: '', long: ''},
        {id: 42, depth:'5',  name: 'Bayley Road', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Bayley Road', tc_id: '12476161', parent_id: '31', type: 'crag', lat: '', long: ''},
        {id: 43, depth:'5',  name: 'Waipapa', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Waipapa', tc_id: '11874505', parent_id: '31', type: 'crag', lat: '', long: ''},

        // Te Kuiti
        {id: 44, depth:'5', name: 'Mangaokewa', island_name: 'North', region_name: 'Te Kuiti', area_name: '', crag_name: 'Mangaokewa', tc_id: '80404782', parent_id: '32', type: 'crag', lat: '', long: ''},
        
        // Waitomo
        {id: 45, depth:'5',  name: 'The Airstrip', island_name: 'North', region_name: 'Waitomo', area_name: '', crag_name: 'The Airstrip', tc_id: '190687545', parent_id: '33', type: 'crag', lat: '', long: ''},
        {id: 46, depth:'5',  name: 'Frogpond', island_name: 'North', region_name: 'Waitomo', area_name: '', crag_name: 'Frogpond', tc_id: '715921614', parent_id: '33', type: 'crag', lat: '', long: ''},
        {id: 47, depth:'5',  name: 'Pakeho', island_name: 'North', region_name: 'Waitomo', area_name: '', crag_name: 'Pakeho', tc_id: '2078670879', parent_id: '33', type: 'crag', lat: '', long: ''},

      ]);
    });
};
