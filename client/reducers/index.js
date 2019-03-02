import {combineReducers} from 'redux'

import {tickets, dropdownArr, allTickets} from './tickets'
import { updateCurrentLocation, updateLocationsByParent } from './location'

console.log('combineReducers');

export default combineReducers({
  tickets,
  currentLocation: updateCurrentLocation,
  children: updateLocationsByParent,
  dropdownArr,
  allTickets
})

