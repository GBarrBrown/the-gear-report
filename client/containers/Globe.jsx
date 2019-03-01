import React from 'react'

class Globe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            island: 'North',
            globeImg: '',
        }
    }

    componentDidMount() {
        fetch('https://maps.googleapis.com/maps/api/staticmap?center=Taranaki,Nz&size=400x400&key=AIzaSyCRxmSZK32nQHfg32jz1btIxI9gvZpFsLU')
            .then(res => {
                this.setState({
                    globeImg: res
                })
            })
    }

    render() {
        return (
            <div className="globe">{this.state.item}</div>
        )
    }
}

export default Globe