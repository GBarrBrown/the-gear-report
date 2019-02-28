import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './Header'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'
import About from '../components/About'
import Ticket from './Ticket'
import AllTickets from './AllTickets'
import ResolveTicket from './ResolveTicket'
import Footer from '../components/Footer'
import AddTicket from './AddTicket'
import EditTicket from './EditTicket'


export default function App() {
  return (
		<div className="app-container">	
			<Header />
			<Router>	
				<div className="body">
					{/* <Route path='/' component={Header} /> */}
					<Route exact path='/' component={Dashboard} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/about' component={About} />
					<Route exact path='/tickets' component={AllTickets} />
					<Route exact path='/tickets/:ticketId' component={Ticket} />
					<Route exact path='/tickets/add' component={AddTicket} />
					<Route exact path='/tickets/:id/resolve' component={ResolveTicket} />
					<Route exact path='/tickets/:id/edit' component={EditTicket} />
				</div>
			</Router>
			<Footer />
		</div>
  )
}
