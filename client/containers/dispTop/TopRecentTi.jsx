import React from 'react'
import MediaCard from './Card'



class TopRecentTi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="topRecentTi">TopRecentTi
                <MediaCard title={'test'}/>
            </div>
        )
    }
}

export default TopRecentTi
