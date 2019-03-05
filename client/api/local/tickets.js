import request from 'superagent'

import {loadAllTickets, loadCurrentTicket, loadTicketLocations, loadTicketCreator, loadTicketsByLocation} from '../../actions/tickets'


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

export function resolveTicket(ticketId) {
  return (dispatch) => {
    request.get(`/api/v1/tickets/resolve/${ticketId}`)
    .then(res => {
      (res.body == 1
        ? document.location = `/tickets/ticketId/${ticketId}`
        : dispatch(loadCurrentTicket(null))
      )
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
      // if its successful and returns an obj dispatch the obj, else dispatch null
      (typeof res.body[0] == 'object'
        ? dispatch(loadCurrentTicket(res.body[0]))
        : dispatch(loadCurrentTicket(null))
      )
    })
    .catch(err => {
      console.log('ERROR!', err)
    })
  }
}

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
          }
    )}
  }

export function getTicketLocationsById(ticketId) {
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

export function getTicketCreator(creatorId) {
  return(dispatch) => {
    request.get(`/api/v1/tickets/creatorById/${creatorId}`)
    .then(res => {
      dispatch(loadTicketCreator(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err)
    })
  }
}
