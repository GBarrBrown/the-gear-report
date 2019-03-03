import {combineReducers} from 'redux'

import {currentTicket, dropdownArr, allTickets, ticketLocations} from './tickets'
import { updateCurrentLocation, updateLocationsByParent } from './location'
import auth from './auth'

console.log('combineReducers');

export default combineReducers({
  currentTicket,
  currentLocation: updateCurrentLocation,
  children: updateLocationsByParent,
  dropdownArr,
  allTickets,
  auth,
  ticketLocations

})

