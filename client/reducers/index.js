import {combineReducers} from 'redux'

import {tickets, dropdownArr} from './tickets'
import { updateCurrentLocation, updateLocationsByParent } from './location'

export default combineReducers({
  tickets,
  currentLocation: updateCurrentLocation,
  children: updateLocationsByParent,
  dropdownArr

})

