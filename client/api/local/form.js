import request from 'superagent'

import {loadIslandDropdownArr} from '../../actions/index'

export function getIslandByParent(parentId) {//get island
  return (dispatch) => {
    request.get(`/api/locations/parent/${parentId}`)
    .then(res => {
      dispatch(loadIslandDropdownArr(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
  }
}

export function getChildArrByParent(parentId) {// get region
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
