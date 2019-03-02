export function loadAllTickets(tickets) {
  return {
    type: 'GET_TICKETS',
    tickets
  }
}

// export function loadLocationsByParent(children) {
//   return {
//     type: 'GET_CHILDREN',
//     children
//   }
// }