import {combineReducers} from 'redux'

import {tickets, dropdownArr} from './tickets'
import { updateCurrentLocation, updateLocationsByParent } from './location'
import auth from './auth'

export default combineReducers({
  tickets,
  currentLocation: updateCurrentLocation,
  children: updateLocationsByParent,
  dropdownArr,
  auth

})

