import {combineReducers} from 'redux'

<<<<<<< HEAD
import {ticketsByLocation, currentTicket, dropdownArr, allTickets,} from './tickets'
=======
import {currentTicket, dropdownArr, allTickets, ticketLocations} from './tickets'
>>>>>>> 92faabec3c34587499c65cde535e2ab6005b6439
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
  ticketsByLocation
})

