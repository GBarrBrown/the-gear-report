export function updateCurrentLocation(currentLocation) {
  return {
    type: 'UPDATE_LOCATION',
    currentLocation
  }
}

export function loadLocationsByParent(children) {
  return {
    type: 'GET_CHILDREN',
    children
  }
}