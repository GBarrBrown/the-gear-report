import {combineReducers} from 'redux'

import {currentTicket, dropdownArr, allTickets, ticketLocations, ticketCreator, ticketsByLocation, topContributors} from './tickets'
import { updateCurrentLocation, updateLocationsByParent, loadLocationById, loadParentByCurrent, loadChildrenByParent } from './location'
import isLoggedIn from './login'

export default combineReducers({
  currentTicket,
  currentLocation: updateCurrentLocation,
  children: updateLocationsByParent,
  dropdownArr,
  allTickets,
  isLoggedIn,
  ticketLocations,
  loadLocationById,
  loadParentByCurrent,
  loadChildrenByParent,
  ticketCreator,
  ticketsByLocation,
  topContributors
})

