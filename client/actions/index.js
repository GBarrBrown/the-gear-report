//actions - index.js

export function addTicket(currentTicket) {
  return {
    type: 'LOAD_CURRENT_TICKET',
    currentTicket
  };
}

export function loadIslandDropdownArr(islandDropdownArr) {
  return {
    type: 'UPDATE_ISLAND_DROPDOWN',
    islandDropdownArr
  }
}

export function loadRegionDropdownArr(regionDropdownArr) {
  return {
    type: 'UPDATE_REGION_DROPDOWN',
    regionDropdownArr
  }
}

export function loadAreaDropdownArr(areaDropdownArr) {
  return {
    type: 'UPDATE_AREA_DROPDOWN',
    areaDropdownArr
  }
}

export function loadCragDropdownArr(cragDropdownArr) {
  return {
    type: 'UPDATE_CRAG_DROPDOWN',
    cragDropdownArr
  }
}

export const showError = (errorMessage) => {
  return {
    type: 'SHOW_ERROR',
    errorMessage: errorMessage
  }
}