const initialState = []

export function updateCurrentLocation(state = initialState, action) {
  console.log('reducer hit')
    switch (action.type){
        case 'UPDATE_LOCATION':
          return action.currentLocation

          default:
            return state
    }
}

export function updateLocationsByParent(state = initialState, action) {
  switch (action.type){
      case 'GET_CHILDREN':
        return action.children

        default:
          return state
  }
}


export function loadLocationById(state = initialState, action) {
  switch (action.type){
    case 'GET_LOCATION':
      return action.locationObj

      default:
        return state
  }
}

export function loadParentByCurrent(state = initialState, action) {
  switch (action.type) {
    case 'GET_PARENT':
      return action.parentObj

      default:
        return state
  }
}

export function loadChildrenByParent(state = initialState, action) {
  switch (action.type) {
    case 'GET_PCHILDREN':
      return action.parentChildren

      default:
        return state
  }
}