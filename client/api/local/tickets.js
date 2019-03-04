import request from 'superagent'

<<<<<<< HEAD
import {loadAllTickets, loadCurrentTicket, loadTicketsByLocation} from '../../actions/tickets'
=======
import {loadAllTickets, loadCurrentTicket, loadTicketLocations} from '../../actions/tickets'
>>>>>>> 92faabec3c34587499c65cde535e2ab6005b6439

export function getAllTickets() {
  return (dispatch) => {
    request.get(`/api/v1/tickets/all`)
    .then(res => {
      dispatch(loadAllTickets(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
  }
}

export function getCurrentTicketById(ticketId) {
  return (dispatch) => {
    request.get(`/api/v1/tickets/ticketId/${ticketId}`)
    .then(res => {
      dispatch(loadCurrentTicket(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err)
    })
  }
}

<<<<<<< HEAD
export function getTicketsByLocation(locationId) {
  return (dispatch) => {
    request.get(`/api/v1/tickets/locationId/${locationId}`)
    .then(res => {
    let result = res.body.map(a => a.ticket_id);
    request.post(`/api/v1/tickets/ticketIds`)
            .send(result)
            .then(res => {
            var tickets = JSON.parse(res.text)
            dispatch(loadTicketsByLocation(tickets))
            })
            .catch(err => {
              console.log('ERROR!', err)
            })
=======
export function getTicketLocationsById(ticketId) {
  console.log('hit api fn with ticketId:', ticketId)
  return (dispatch) => {
    request.get(`/api/v1/tickets/locationsById/${ticketId}`)
    .then(res => {
      dispatch(loadTicketLocations(res.body))
>>>>>>> 92faabec3c34587499c65cde535e2ab6005b6439
    })
    .catch(err => {
      console.log('ERROR!', err)
    })
  }
<<<<<<< HEAD
}

=======
}
>>>>>>> 92faabec3c34587499c65cde535e2ab6005b6439
