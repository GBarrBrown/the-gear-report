import request from 'superagent'

import {loadAllTickets, loadCurrentTicket} from '../../actions/tickets'

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