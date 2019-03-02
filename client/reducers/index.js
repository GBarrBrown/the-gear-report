import {combineReducers} from 'redux'

import {currentTicket, dropdownArr, allTickets} from './tickets'
import { updateCurrentLocation, updateLocationsByParent } from './location'

console.log('combineReducers');

export default combineReducers({
  currentTicket,
  currentLocation: updateCurrentLocation,
  children: updateLocationsByParent,
  dropdownArr,
  allTickets
})

