import React from 'react'

import TopRecentTi from './TopRecentTi'
import TopContribs from './TopContribs'
import TopNewRoutes from './TopNewRoutes'
import TopResolved from './TopResolvedTi'
import TopRoutes from './TopRoutes'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
              <TopRecentTi />
              <TopContribs />
              <TopNewRoutes />
              <TopResolved />
              <TopRoutes />
            </React.Fragment>
        )
    }
}

export default Dashboard