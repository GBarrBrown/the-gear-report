import React from 'react'

import Directory from './Directory'
import TopDisp from './dispTop/TopDisplay'
import Globe from './Globe'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="dashboard-container">
              <Directory />
              <div className="dashboard">Dashboard</div>
              <TopDisp />
              <Globe />
            </div>
        )
    }
}

export default Dashboard