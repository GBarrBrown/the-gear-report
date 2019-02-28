import React from 'react'

import Directory from './Directory'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>Dashboard
                <Directory />
            </div>
        )
    }
}

export default Dashboard