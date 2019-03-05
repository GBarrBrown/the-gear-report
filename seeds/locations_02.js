
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      return knex('locations').insert([
                // Bay of Plenty
                {id: 48, depth: '4',  name: 'Mount Maunganui', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: 'Mount Maunganui', tc_id: '', parent_id: '7', type: 'crag'},
                {id: 49, depth: '4',  name: 'Moturiki Island', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: 'Moturiki Island', tc_id: '', parent_id: '7', type: 'island'},
                {id: 50, depth: '4',  name: 'Bowentown Wall', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: 'Bowentown Wall', tc_id: '636413415', parent_id: '7', type: 'crag'},
                {id: 51, depth: '4',  name: 'Reporoa Gorge', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: 'Reporoa Gorge', tc_id: '', parent_id: '7', type: 'crag'},
                {id: 52, depth: '4',  name: 'Tarawera Falls', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: 'Tarawera Falls', tc_id: '12477637', parent_id: '7', type: 'crag'},
                {id: 53, depth: '4',  name: 'Mangorewa', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: 'Mangorewa', tc_id: '1019306049', parent_id: '7', type: 'crag'},
        
                // Taupo sub regions
                {id: 54, depth: '4', name: 'Taupo East', island_name: 'North', region_name: 'Taupo East', area_name: '', crag_name: '', tc_id: '', parent_id: '8', type: 'region'},
                {id: 55, depth: '4', name: 'Taupo West', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: '', tc_id: '', parent_id: '8', type: 'region'},
        
                // Taupo West
                {id: 56, depth: '5',  name: 'Kawakawa Bay', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Kawakawa Bay', tc_id: '12475567', parent_id: '55', type: 'crag'},
                {id: 57, depth: '5',  name: 'Kinloch', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Kinloch', tc_id: '12475591', parent_id: '55', type: 'crag'},
                {id: 58, depth: '5',  name: 'Middle Earth', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Middle Earth', tc_id: '12475303', parent_id: '55', type: 'crag'},
                {id: 59, depth: '5',  name: 'Kuratau', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Kuratau', tc_id: '12475327', parent_id: '55', type: 'crag'},
                {id: 60, depth: '5',  name: 'Karangahape Cliffs', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Karangahape Cliffs', tc_id: '12475351', parent_id: '55', type: 'crag'},
                {id: 61, depth: '5',  name: 'Te Putu', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Te Putu', tc_id: '12475399', parent_id: '55', type: 'crag'},
                {id: 62, depth: '5',  name: 'Tihoi', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Tihoi', tc_id: '12475543', parent_id: '55', type: 'crag'},

                // Taupo East
                {id: 63, depth: '5',  name: 'Bulli Point', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Bulli Point', tc_id: '12475255', parent_id: '54', type: 'crag'},
                {id: 64, depth: '5',  name: 'Te Toki Point', island_name: 'North', region_name: 'Taupo West', area_name: '', crag_name: 'Te Toki Point', tc_id: '12475279', parent_id: '54', type: 'crag'},
        
        
      ]);
};
