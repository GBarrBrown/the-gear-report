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