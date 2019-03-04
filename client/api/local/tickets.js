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
  console.log('hitting getTicketCreator in api/local/tickets with id:', creatorId)
  return(dispatch) => {
    request.get(`/api/v1/tickets/creatorById/${creatorId}`)
    .then(res => {
      console.log('response: ',res.body)
      dispatch(loadTicketCreator(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err)
    })
  }
}
