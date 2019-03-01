const initialState = []

export function currentTicket (state = initialState, action){
  return state
}

export function formDropdownArr (state = initialState, action){
  console.log(action.type)
  switch (action.type){
    case 'UPDATE_FORM_DROPDOWN':
      return action.formDropdownArr
  }
  return state
}