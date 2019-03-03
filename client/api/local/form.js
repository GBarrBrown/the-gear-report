//api form.js
import request from 'superagent'

import {loadFirstDdArr, loadThirdDdArr, loadSecondDdArr, loadFourthDdArr, showError} from '../../actions/index'

export function getFirstByParent(parentId) {//get island
  return (dispatch) => {
    request.get(`/api/v1/locations/parent/${parentId}`)
    .then(res => {
      dispatch(loadFirstDdArr(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
  }
}

export function getSecondByParent(parentId) {// get region
  return (dispatch) => {
    request.get(`/api/v1/locations/parent/${parentId}`)
    .then(res => {
      dispatch(loadSecondDdArr(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
  }
}

export function getThirdByParent(parentId) {
  return (dispatch) => {
    request.get(`/api/v1/locations/parent/${parentId}`)
    .then(res => {
      dispatch(loadThirdDdArr(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
  }
}

export function getFourthByParent(parentId) {
  return (dispatch) => {
    request.get(`/api/v1/locations/parent/${parentId}`)
    .then(res => {
      dispatch(loadFourthDdArr(res.body))
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
  }
}

export function addTicket(payload){
  console.log('api:', payload)
  return (dispatch) => {
    request.post('/api/v1/tickets', payload)
    .then(res => {
      dispatch((res.body))//should dispatch get all tickets
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}