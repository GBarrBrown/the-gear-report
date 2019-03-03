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
                <MediaCard classKey={'topRecentTi1'} title={'test'} description={'Lets just test thsadsb dfsjahd bfjs hdffdh sjfhsd gfjkhsdg fjshd fkjhs dfkjhsd gfkjhs gdfjkhgsdfkjhsgdfkjhsdjfhsjkhdgfksjhdgfksjhdfbskjhdfbkjshdbis out shall we?'} id={1} />
                <MediaCard classKey={'topRecentTi2'} title={'test'} description={'Lets just test thsadsb dfsjahd bfjs hdffdh sjfhsd gfjkhsdg fjshd fkjhs dfkjhsd gfkjhs gdfjkhgsdfkjhsgdfkjhsdjfhsjkhdgfksjhdgfksjhdfbskjhdfbkjshdbis out shall we?'} id={2} />
            </div>
        )
    }
}

export default TopRecentTi
