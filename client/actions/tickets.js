export function loadAllTickets(tickets) {
  return {
    type: 'GET_TICKETS',
    tickets
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