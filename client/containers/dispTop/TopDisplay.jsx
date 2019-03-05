import React from 'react'

import TopRecentTi from './TopRecentTi'
import TopContribs from './TopContribs'
import TopResolved from './ResolvedTickets'

export function Dashboard () {

  return (
    <div className='dashboard-cards'>
      <div>
        <div className="cardsheader">
          Recent tickets
        </div>
        <TopRecentTi /> 
      </div>
      <div className="topcontributor">
        <div className="cardsheader">
          Top contributors
        </div>
        <TopContribs />
      </div>
      <div className="topresolved">
        <div className="cardsheader">
          Recently resolved tickets
        </div>
        <TopResolved />
      </div>
    </div>
  )
}

export default Dashboard