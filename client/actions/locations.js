export function updateCurrentLocation(currentLocation) {
  console.log('updateCurrentLocation');
  return {
    type: 'UPDATE_LOCATION',
    currentLocation
  }
}

export function loadLocationsByParent(children) {
  console.log('loadLocationsByParent - actions/locations', children);
  return {
    type: 'GET_CHILDREN',
    children
  }
}