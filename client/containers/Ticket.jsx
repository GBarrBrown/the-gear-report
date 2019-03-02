import React from 'react'
import { connect } from 'react-redux'


class Ticket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>Ticket</div>
        )
    }
}


function mapStateToProps(){
    return{}
}

export default connect(mapStateToProps)(Ticket)