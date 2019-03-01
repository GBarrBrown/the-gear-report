const initialState = []

export function updateCurrentLocation(state = initialState, action) {
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
