import {combineReducers} from 'redux'

import {ticketsByLocation, currentTicket, dropdownArr, allTickets,} from './tickets'
import { updateCurrentLocation, updateLocationsByParent, loadLocationById, loadParentByCurrent, loadChildrenByParent } from './location'
import auth from './auth'

export default combineReducers({
  currentTicket,
  currentLocation: updateCurrentLocation,
  children: updateLocationsByParent,
  dropdownArr,
  allTickets,
  auth,
  loadLocationById,
  loadParentByCurrent,
  loadChildrenByParent,
  ticketsByLocation
})

