
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, lat: -38.601895, long: 175.537682, name: 'North', parent_id: '104', island_name: 'North', region_name: '', area_name: '', crag_name: '', tc_id: '', type: 'island', depth: '2'},
        {id: 2, lat: -43.509652, long: 170.747225, name: 'South', parent_id: '104', island_name: 'South', region_name: '', area_name: '', crag_name: '', tc_id: '', type: 'island', depth: '2'},

        // north island regions
        {id: 3,  name: 'Northland', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -35.895336, long: 174.085554, depth: '3'},
        {id: 4,  name: 'Auckland', island_name: 'North', region_name: 'Auckland', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -36.854879, long: 174.756941, depth: '3'},
        {id: 5,  name: 'Coromandel Peninsula', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -37.282853, long: 175.725388, depth: '3'},
        {id: 6,  name: 'Waikato', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -37.580256, long: 175.159297, depth: '3'},
        {id: 7,  name: 'Bay Of Plenty', island_name: 'North', region_name: 'Bay Of Plenty', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -38.341210, long: 177.240525, depth: '3'},
        {id: 8,  name: 'Lake Taupo', island_name: 'North', region_name: 'Lake Taupo', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -38.777244, long: 175.913973, depth: '3'},
        {id: 9,  name: 'Tongariro National Park', island_name: 'North', region_name: 'Tongariro National Park', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -39.127961, long: 175.651724, depth: '3'},
        {id: 10,  name: 'Taranaki', island_name: 'North', region_name: 'Taranaki', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -39.260428, long: 174.363805, depth: '3'},
        {id: 11,  name: 'Wellington', island_name: 'North', region_name: 'Wellington', area_name: '', crag_name: '', tc_id: '', parent_id: '1', type: 'region', lat: -41.270910, long: 174.850551, depth: '3'}, 

        // northland crags
        {id: 12, lat: -36.312789, long: 174.790351,  name: 'Ti Point', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Ti Point', tc_id: '11874913', parent_id: '3', type: 'crag', description: 'Ti Point offers a great day trip destination for climbers, providing good a mix of quality sport/trad climbing on coastal basalt. The sea cliffs here are generally solid but be aware that there are some loose blocks about.', approach: 'Ti Point is located about 90 km north of the Auckland CBD, near Leigh.', depth: '4'},
        {id: 13, lat: -36.117446360000, long: 174.446055700000,  name: 'Pukepohatu/ Bald Rock', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Pukepohatu/ Bald Rock', tc_id: '11874889', parent_id: '3', type: 'crag', depth: '4'},
        {id: 14, lat: -36.030689000000, long: 174.524459000000,  name: 'Waipu Cove', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Waipu Cove', tc_id: '11874865', parent_id: '3', type: 'crag',  depth: '4', description: 'The sea cliffs and boulders at this popular holiday spot had been known about by Phil Giles for some time. However, the first climbs were put up only recently in preparation for this guide. There is potential for plenty more, plus bouldering, although the area will probably never develop into a major crag. The awesome setting makes it a good choice on a warm summer’s day.'},
        {id: 15, lat: -35.937820240000, long: 174.346525500000,  name: 'Waipu Caves', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Waipu Caves', tc_id: '11874841', parent_id: '3', type: 'crag', depth: '4', description: 'The outcrops tucked away in the hills behind Waipu have potential to develop into a pretty decent climbing area, but unfortunately most of the areas that have been developed are on private land where access is currently forbidden.'},
        {id: 16, lat: -36.021241000000, long: 173.976081000000,  name: 'Maungaraho', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Maungaraho', tc_id: '11874721', parent_id: '3', type: 'crag', depth: '4', description: 'This large volcanic plug has the oldest recorded climb in Northland. Try climbing Slab Route in mountaineering boots with an old rope and next to no pro — just as Peter Clement and George Carr did in 1962. A few climbs were put up in the 1960s and 1970s, usually following obvious cracks or ledges, but the area was virtually forgotten through the 1980s and into the 1990s.'},
        {id: 17, lat: -36.057262000000, long: 173.974965000000,  name: 'Tokatoka', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Tokatoka', tc_id: '11874745', parent_id: '3', type: 'crag', depth: '4', description: 'Tokatoka is a similar but inferior volcanic plug just south of Mangaraho. First climbed in 1966 by John Maine and Pete Matthews, the crag saw little further activity until Bryce Martin, John Smith and Dave Garrity put up three routes in 1995.'},    
        {id: 19, lat: -35.736937000000, long: 174.294024000000,  name: 'Ngahere Drive ', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Ngahere Drive ', tc_id: '12478081', parent_id: '3', type: 'crag', depth: '4', description: 'Outside of Auckland Quarry and Ti Point, this is probably the next most climbed crag in the northern region. First checked out by Phil Giles and Noel Herman in the 1970s, it wasn’t till the early 1980s that Ngahere Drive developed into Whangarei’s number one climbing spot. Gavin Cox, Gavin Harrison, Glen Hawke and Rex Withers worked on new lines and a number of challenging boulder problems. '},
        {id: 20, lat: -35.587145, long: 174.285725,  name: 'Waro Reserve', island_name: 'North', region_name: 'Northland', area_name: '', crag_name: 'Waro Reserve', tc_id: '11874817', parent_id: '3', type: 'crag', depth: '4'},
    
        // auckland sub regions
        {id: 21, lat: '', long: '',  name: 'Auckland City', island_name: 'North', region_name: 'Auckland City', area_name: '', crag_name: '', tc_id: '', parent_id: '4', type: 'region', depth: '4'},
        {id: 22, lat: '', long: '',  name: 'Waiheke Island', island_name: 'North', region_name: 'Waiheke Island', area_name: '', crag_name: '', tc_id: '', parent_id: '4', type: 'region', depth: '4'},

        // auckland city
        {id: 23, lat: '', long: '',  name: 'Maungarei Springs', island_name: 'North', region_name: 'Auckland City', area_name: '', crag_name: 'Maungarei Springs', tc_id: '879850311', parent_id: '21', type: 'crag', depth: '5'},
        
        // waiheke island
        {id: 24, lat: '', long: '',  name: 'Stony Batter', island_name: 'North', region_name: 'Waiheke Island', area_name: '', crag_name: '', tc_id: '', parent_id: '22', type: 'crag', depth: '5'},

        // Coromandel peninsula
        {id: 25, lat: -36.803581000000, long: 175.562811000000,  name: 'Motutere', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Motutere', tc_id: '11874985', parent_id: '5', type: 'crag', depth: '4'},
        {id: 26, lat: -37.061616000000, long: 175.722499000000,  name: 'Tairua Crag', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Tairua Crag', tc_id: '1620687828', parent_id: '5', type: 'crag', depth: '4', description: 'As seen in the opening scene of "Hunt for the wilderpeople". The rock at Tairua is rhyolite from the Kapowai Caldera, a volcanic complex that was active around 9 million years ago. It has steep, featured terrain with crack systems, pockets, edges, sloping bulges and chickenhead knobs in abundance. Some of the more featured rock resembles bubbles and there is the occasional hollow sounding flake, but the vast majority is good quality hard rock. '},
        {id: 27, lat: -37.166577, long: 175.882522,  name: 'Te Ananui', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Te Ananui', tc_id: '11874961', parent_id: '5', type: 'crag', depth: '4'},
        {id: 28, lat: -37.300207000000, long: 175.759792000000,  name: 'Maratoto', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Maratoto', tc_id: '', parent_id: '5', type: 'crag', depth: '4', description: 'With tonnes of exposure and fantastic surrounds Maratoto makes for a great days climbing. If you make the effort to venture up to the base of this impressive looking rock feature you will be rewarded with some classic sports routes'},        
        {id: 29, lat: -37.422272, long: 175.720892,  name: 'Karangahake Gorge', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Karangahake Gorge ', tc_id: '', parent_id: '5', type: 'crag', depth: '4'},
        {id: 30, lat: -37.551790630000, long: 175.748977660000,  name: 'Buck Rock', island_name: 'North', region_name: 'Coromandel Peninsula', area_name: '', crag_name: 'Buck Rock', tc_id: '196256694', parent_id: '5', type: 'crag', depth: '4', description: 'Sitting high on the south west ridge of Mt Te Aroha, Buck Rock is an impressive fin of rock 60 – 90m tall and over 500m long. There are a few reports of climbers visiting and climbing at Buck Rock in the 80 and 90’s but the first report ascents was made by Grant Pearson and Co up the western buttress and arete. In 2006 Kevin Barrett and Richard Knott visited Buck Rock and put up the 2 pitch line of “Demo of Bosh”. ', approach: 'From Te Aroha, drive south down Te Aroha/Gordon road, ~2 km out of town turn left into Waiorangomai road, 1km down the road is the Waiorangomai settlement and gold mine car park. Buck Rock is a 40min walk up the hill.'},

        // Waikato sub regions
        {id: 31, depth: '4', lat: '', long: '',  name: 'Wharepapa South', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: '', tc_id: '', parent_id: '6', type: 'region', },
        {id: 32, depth: '4', lat: '', long: '',  name: 'Te Kuiti', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: '', tc_id: '', parent_id: '6', type: 'region', },
        {id: 33, depth: '4', lat: '', long: '',  name: 'Waitomo', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: '', tc_id: '', parent_id: '6', type: 'region', },

        // Waikato crags (it has regions inside waikato (shown above) and individual crags)
        {id: 34, depth: '4', lat: '', long: '',  name: 'Mangaotaki', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: 'Mangaotaki', tc_id: '11874625', parent_id: '6', type: 'crag', },
        {id: 35, depth: '4', lat: '', long: '',  name: 'Piarere', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: 'Piarere', tc_id: '', parent_id: '6', type: 'crag', },
        {id: 36, depth: '4', lat: '', long: '',  name: 'Ohakuri Dam', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: 'Ohakuri Dam', tc_id: '', parent_id: '6', type: 'crag', },
        {id: 37, depth: '4', lat: '', long: '',  name: 'Lake Whakamaru', island_name: 'North', region_name: 'Waikato', area_name: '', crag_name: 'Lake Whakamaru', tc_id: '', parent_id: '6', type: 'crag', },

        // Wharepapa South
        {id: 38, depth:'5', lat: '', long: '',  name: 'Castle Rock', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Castle Rock', tc_id: '12476017', parent_id: '31', type: 'crag', },
        {id: 39, depth:'5', lat: '', long: '',  name: 'Froggatt Edge', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Froggatt Edge', tc_id: '12476041', parent_id: '31', type: 'crag', },
        {id: 40, depth:'5', lat: '', long: '',  name: 'Sheridan Hills', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Sheridan Hills', tc_id: '12476065', parent_id: '31', type: 'crag', },
        {id: 41, depth:'5', lat: '', long: '',  name: 'Secret Valley', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Secret Valley', tc_id: '972787071', parent_id: '31', type: 'crag', },
        {id: 42, depth:'5', lat: '', long: '',  name: 'Bayley Road', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Bayley Road', tc_id: '12476161', parent_id: '31', type: 'crag', },
        {id: 43, depth:'5', lat: '', long: '',  name: 'Waipapa', island_name: 'North', region_name: 'Wharepapa South', area_name: '', crag_name: 'Waipapa', tc_id: '11874505', parent_id: '31', type: 'crag', },

        // Te Kuiti
        {id: 44, depth:'5', name: 'Mangaokewa', island_name: 'North', region_name: 'Te Kuiti', area_name: '', crag_name: 'Mangaokewa', tc_id: '80404782', parent_id: '32', type: 'crag', },
        
        // Waitomo
        {id: 45, depth:'5', lat: '', long: '',  name: 'The Airstrip', island_name: 'North', region_name: 'Waitomo', area_name: '', crag_name: 'The Airstrip', tc_id: '190687545', parent_id: '33', type: 'crag', },
        {id: 46, depth:'5', lat: '', long: '',  name: 'Frogpond', island_name: 'North', region_name: 'Waitomo', area_name: '', crag_name: 'Frogpond', tc_id: '715921614', parent_id: '33', type: 'crag', },
        {id: 47, depth:'5', lat: '', long: '',  name: 'Pakeho', island_name: 'North', region_name: 'Waitomo', area_name: '', crag_name: 'Pakeho', tc_id: '2078670879', parent_id: '33', type: 'crag', },

      ]);
    });
};
