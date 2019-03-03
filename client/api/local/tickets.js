import request from 'superagent'

import {loadAllTickets, loadCurrentTicket, loadTicketLocations} from '../../actions/tickets'

export function getAllTickets() {
  console.log('local api pinged');
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

export function getTicketLocationsById(ticketId) {
  console.log('hit api fn with ticketId:', ticketId)
  return (dispatch) => {
    request.get(`/api/v1/tickets/locationsById/${ticketId}`)
    .then(res => {
      dispatch(loadTicketLocations(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err)
    })
  }
}