import React, { Fragment } from 'react'

import TopRecentTi from './TopRecentTi'
import ResolvedTickets from './ResolvedTickets'

export function Dashboard () {

  return (
    <Fragment>
      <TopRecentTi /> 
      <ResolvedTickets />
    </Fragment>
  )
}

export default Dashboard