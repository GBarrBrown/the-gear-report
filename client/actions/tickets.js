//actions tickets.js

export function loadAllTickets(tickets) {
  return {
    type: 'GET_TICKETS',
    tickets
  }
}

export function loadFirstDdArr(firstDropdown) {
  return {
    type: 'UPDATE_FIRST_DROPDOWN',
    firstDropdown
  }
}

export function loadSecondDdArr(secondDropdown) {
  return {
    type: 'UPDATE_SECOND_DROPDOWN',
    secondDropdown
  }
}

export function loadThirdDdArr(thirdDropdown) {
  return {
    type: 'UPDATE_THIRD_DROPDOWN',
    thirdDropdown
  }
}

export function loadFourthDdArr(fourthDropdown) {
  return {
    type: 'UPDATE_FOURTH_DROPDOWN',
    fourthDropdown
  }
}

export function loadFifthDdArr(fifthDropdown) {
  return {
    type: 'UPDATE_FIFTH_DROPDOWN',
    fifthDropdown
  }
}
export function loadCurrentTicket(ticket) {
  return {
    type: 'UPDATE_CURRENT_TICKET_OBJ',
    ticket
  }
}

export function loadTicketLocations(locations) {
  return {
    type: 'UPDATE_TICKET_LOCATIONS',
    locations
  }
}

// export function loadLocationsByParent(children) {
//   return {
//     type: 'GET_CHILDREN',
//     children
//   }
// }