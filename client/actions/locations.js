export function updateCurrentLocation(currentLocation) {
  console.log('action hit');
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

export function loadLocationById(locationObj) {
  return {
    type: 'GET_LOCATION',
    locationObj
  }
}

export function loadParentByCurrent(parentObj) {
  return {
    type: 'GET_PARENT',
    parentObj
  }
}

export function loadChildrenByParent(parentChildren) {
  return {
    type: 'GET_PCHILDREN',
    parentChildren
  }
}