import {combineReducers} from 'redux'

import {tickets, formDropdownArr} from './tickets'
import { updateCurrentLocation, updateLocationsByParent } from './location'

export default combineReducers({
  tickets,
  currentLocation: updateCurrentLocation,
  children: updateLocationsByParent,
  formDropdownArr

})

