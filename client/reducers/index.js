import {combineReducers} from 'redux'

import {currentTicket, dropdownArr, allTickets, ticketLocations, ticketCreator, ticketsByLocation} from './tickets'
import { updateCurrentLocation, updateLocationsByParent, loadLocationById, loadParentByCurrent, loadChildrenByParent } from './location'
import auth from './auth'

export default combineReducers({
  currentTicket,
  currentLocation: updateCurrentLocation,
  children: updateLocationsByParent,
  dropdownArr,
  allTickets,
  auth,
  ticketLocations,
  loadLocationById,
  loadParentByCurrent,
  loadChildrenByParent,
  ticketCreator,
  ticketsByLocation
})

