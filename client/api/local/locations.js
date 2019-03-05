import request from 'superagent'

import {loadLocationsByParent} from '../../actions/locations'
import {loadLocationById} from '../../actions/locations'
import {loadParentByCurrent} from '../../actions/locations'
import {loadChildrenByParent} from '../../actions/locations'
import {updateCurrentLocation} from '../../actions/locations'

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
      console.log(res.body);
      dispatch(loadLocationById(res.body))
      dispatch(getParentByCurrent(res.body[0].parent_id))
      dispatch(updateCurrentLocation(res.body[0].id))
      dispatch(loadChildrenByParent(res.body[0].id))
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