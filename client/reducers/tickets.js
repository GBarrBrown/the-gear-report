const initialState = []

export function currentTicket (state = initialState, action){
  return state
}

export function islandDropdownArr (state = initialState, action){
  console.log(action.type)
  switch (action.type){
    case 'UPDATE_ISLAND_DROPDOWN':
      return action.islandDropdownArr
  }
  return state
}

