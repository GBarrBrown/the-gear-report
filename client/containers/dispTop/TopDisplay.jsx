import React, { Fragment } from 'react'

import TopRecentTi from './TopRecentTi'
import TopContribs from './TopContribs'

export function Dashboard () {

  return (
    <Fragment>
      <TopRecentTi /> 
      <TopContribs />
    </Fragment>
  )
}

export default Dashboard