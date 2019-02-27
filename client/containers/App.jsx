import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HeadFoot from './HeadFoot'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'
import About from '../components/About'
import Ticket from './Ticket'
import AllTickets from './AllTickets'


export default function App() {
  return (
    <Router>
      <Route path='/' component={HeadFoot} />
      <Route exact path='/' component={Dashboard} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/about' component={About} />
      <Route exact path='/tickets' component={AllTickets} />
      <Route path='/tickets/:id' component={Ticket} />
      <Route path='tickets/:id/resolve' component={ResolveTicket} />
    </Router>
  )
}
