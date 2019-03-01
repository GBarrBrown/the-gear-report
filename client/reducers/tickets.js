//reducer tickets.js
const initialState = []
const initialFormState = {
  island: [],
  region: [],
  area: [],
  crag: [],

}

export function currentTicket (state = initialState, action){
  return state
}

export function dropdownArr (state = initialFormState, action){
  console.log(action.type)
  switch (action.type){
    case 'UPDATE_ISLAND_DROPDOWN':
      return {...state, island: action.islandDropdownArr}
    case 'UPDATE_REGION_DROPDOWN':
      return {...state, region: action.regionDropdownArr}
    case 'UPDATE_AREA_DROPDOWN':
      return {...state, area: action.areaDropdownArr}
    case 'UPDATE_CRAG_DROPDOWN':
      return {...state, crag: action.cragDropdownArr}
  }
  return state
}

