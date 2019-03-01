//actions - index.js

export function addTicket(currentTicket) {
  return {
    type: 'LOAD_CURRENT_TICKET',
    currentTicket
  };
}

export function loadIslandDropdownArr(islandDropdownArr) {
  console.log('updateformChildArr:', islandDropdownArr);
  return {
    type: 'UPDATE_ISLAND_DROPDOWN',
    islandDropdownArr
  }
}

export function loadRegionDropdownArr(regionDropdownArr) {
  console.log('updateformChildArr:', regionDropdownArr);
  return {
    type: 'UPDATE_REGION_DROPDOWN',
    regionDropdownArr
  }
}

export function loadAreaDropdownArr(areaDropdownArr) {
  console.log('updateformChildArr:', areaDropdownArr);
  return {
    type: 'UPDATE_AREA_DROPDOWN',
    areaDropdownArr
  }
}

export function loadCragDropdownArr(cragDropdownArr) {
  console.log('updateformChildArr:', cragDropdownArr);
  return {
    type: 'UPDATE_CRAG_DROPDOWN',
    cragDropdownArr
  }
}