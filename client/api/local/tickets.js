import request from 'superagent'

import {loadAllTickets} from '../../actions/tickets'

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