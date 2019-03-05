import request from 'superagent'

import {loadLocationsByParent} from '../../actions/locations'
import {loadLocationById} from '../../actions/locations'
import {loadParentByCurrent} from '../../actions/locations'
import {loadChildrenByParent} from '../../actions/locations'
import {updateCurrentLocation} from '../../actions/locations'
import {loadTicketsByLocation} from '../../actions/tickets'


export function getLocationsByParent(parentId) {
  return (dispatch) => {
    request.get(`/api/v1/locations/parent/${parentId}`)
    .then(res => {
      dispatch(loadLocationsByParent(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
  }
}

export function getLocationById(id) {
  
  return (dispatch) => {
    request.get(`/api/v1/locations/${id}`)
    .then(res => {
      dispatch(loadLocationById(res.body))
      dispatch(getParentByCurrent(res.body[0].parent_id))
      dispatch(updateCurrentLocation(res.body[0].id))
      dispatch(loadChildrenByParent(res.body[0].id))
      dispatch(getTicketsByLocation(res.body[0].id))
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
  }
}

export function getParentByCurrent(id) {
  return (dispatch) => {
    request.get(`/api/v1/locations/${id}`)
    .then(res => {
      dispatch(loadParentByCurrent(res.body))
      getChildrenByParent(res.body[0].id)
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
  }
}

export function getChildrenByParent(id) {
  return (dispatch) => {
    request.get(`/api/v1/locations/parent/${id}`)
    .then(res => {
      dispatch(loadChildrenByParent(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
  }
}

export function sendNewLocation(id) {
  return (dispatch) => {
    dispatch(updateCurrentLocation(id))
  }
}

export function getTicketsByLocation(locationId) {
  console.log(locationId);
  return (dispatch) => {
    request.get(`/api/v1/tickets/locationId/${locationId}`)
    .then(res => {
    let result = res.body.map(a => a.ticket_id);
    console.log('ticket', result);
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