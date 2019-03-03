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
                <MediaCard title={'test'} description={'Lets just test this out shall we?'} id={4} />
            </div>
        )
    }
}

export default TopRecentTi
