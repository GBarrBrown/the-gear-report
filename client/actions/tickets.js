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

export function loadTicketsByLocation(tickets) {
  return {
    type: 'UPDATE_TICKETS_BY_LOC',
    tickets
  }
}
export function loadTicketLocations(locations) {
  return {
    type: 'UPDATE_TICKET_LOCATIONS',
    locations
  }
}

export function loadTicketCreator(creator) {
  return {
    type: 'UPDATE_TICKET_CREATOR',
    creator
  }
}

export function loadTopContributors(topContributors) {
  return {
    type: 'UPDATE_TOP_CONTRIBUTORS',
    topContributors
  }
}
