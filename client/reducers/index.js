import {combineReducers} from 'redux'

import tickets from './tickets'
import { updateCurrentLocation, updateLocationsByParent } from './location'

export default combineReducers({
  tickets,
  currentLocation: updateCurrentLocation,
  children: updateLocationsByParent,
})

