import request from 'superagent'

import { saveUserToken } from '../../authUtilities/auth'

function requestLogin () {
  return {
    type: 'LOGIN_REQUEST',
    isFetching: true,
    isAuthenticated: false
  }
}

function receiveLogin (user) {
  return {
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

function loginError (message) {
  return {
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

function login (user) {
  return {
    type: 'LOGIN',
    user
  }
}

function logout () {
  return {
    type: 'LOGOUT',
    user: false
  }
}

export function toggleLogin(){
  return dispatch => {
    request.get(`/api/v1/login`)
    .then(res => {
      dispatch(login(res.body))
    })
  }
}

export function toggleLogout(){
  return dispatch => {
    dispatch(logout())
   
  }
}

//function below is for logging in with Facebook

export function loginUser(creds){
  return (dispatch) => {
    dispatch(requestLogin())
    return request.post(`/api/v1/login`, creds)
    .then(res => {
      const userInfo = saveUserToken(res.body.token)
      userInfo.name = creds.name
      userInfo.picture = creds.picture
      dispatch(receiveLogin(userInfo)); 
      document.location = "/dashboard/1" 
    })
    .catch(err => {
      console.log(err)
      dispatch(loginError(err.response.body.message))
    })
  }
}