import request from 'superagent'

import {loadLocationsByParent} from '../../actions/locations'

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