//api form.js
import request from 'superagent'

import {loadIslandDropdownArr, loadAreaDropdownArr, loadRegionDropdownArr, loadCragDropdownArr} from '../../actions/index'

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

export function getRegionByParent(parentId) {// get region
  return (dispatch) => {
    request.get(`/api/locations/parent/${parentId}`)
    .then(res => {
      dispatch(loadRegionDropdownArr(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
  }
}

export function getAreaByParent(parentId) {// get area
  return (dispatch) => {
    request.get(`/api/locations/parent/${parentId}`)
    .then(res => {
      dispatch(loadAreaDropdownArr(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
  }
}

export function getCragByParent(parentId) {// get crag
  return (dispatch) => {
    request.get(`/api/locations/parent/${parentId}`)
    .then(res => {
      dispatch(loadCragDropdownArr(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
  }
}
