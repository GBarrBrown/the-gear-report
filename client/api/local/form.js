//api form.js
import request from 'superagent'

import {loadFirstDdArr, loadThirdDdArr, loadSecondDdArr, loadFourthDdArr, loadFifthDdArr} from '../../actions/tickets'
import { showError } from '../../actions/index'

export function getFirstByParent(parentId) {//get island
  return (dispatch) => {
    request.get(`/api/v1/locations/parent/${parentId}`)
    .then(res => {
      dispatch(loadFirstDdArr(res.body))
    })
    .catch(err => {
      dispatch(showError(err.message))
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
      dispatch(showError(err.message))
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
      dispatch(showError(err.message))
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
      dispatch(showError(err.message))
    })
  }
}

export function getFifthByParent(parentId) {
  return (dispatch) => {
    request.get(`/api/v1/locations/parent/${parentId}`)
    .then(res => {
      dispatch(loadFifthDdArr(res.body))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}

export function addTicket(payload){
  return (dispatch) => {
    request.post('/api/v1/tickets', payload)
    .then(res => {
      let ticketId = res.body[0]
      document.location = `/tickets/ticketId/${ticketId}`
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}