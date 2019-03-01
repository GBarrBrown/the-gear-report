import request from 'superagent'

import {loadFormDropdownArr} from '../../actions/index'

export function getChildArrByParent(parentId) {
  return (dispatch) => {
    request.get(`/api/locations/parent/${parentId}`)
    .then(res => {
      dispatch(loadFormDropdownArr(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
  }
}