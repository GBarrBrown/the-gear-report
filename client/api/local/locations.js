import request from 'superagent'

import {loadLocationsByParent} from '../../actions/locations'
import {loadLocationById} from '../../actions/locations'
import {loadParentByCurrent} from '../../actions/locations'
import {loadChildrenByParent} from '../../actions/locations'

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
      console.log('ping')
      dispatch(loadLocationById(res.body))
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
      console.log('ping')
      dispatch(loadParentByCurrent(res.body))
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