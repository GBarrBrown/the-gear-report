//reducer tickets.js
const initialState = []
const initialFormState = {
  region: [],
  area: [],
  crag: [],

}

export function currentTicket (state = initialState, action){
  switch (action.type){
    case 'UPDATE_CURRENT_TICKET_OBJ':
    console.log('ticket reducer', action.ticket)
      return action.ticket
  }
  return state
}

export function dropdownArr (state = initialFormState, action){
  switch (action.type){
    case 'UPDATE_REGION_DROPDOWN':
      return {...state, region: action.regionDropdownArr}
    case 'UPDATE_AREA_DROPDOWN':
      return {...state, area: action.areaDropdownArr}
    case 'UPDATE_CRAG_DROPDOWN':
      return {...state, crag: action.cragDropdownArr}
  }
  return state
}

export function allTickets (state = initialState, action) {
  
  switch (action.type){
    case 'GET_TICKETS':
    console.log('allTickets reducer');
      return {...state, allTickets: action.tickets}
      

      default:
        return state
  }
}