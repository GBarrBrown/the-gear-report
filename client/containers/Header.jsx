import React from 'react'
import { connect } from 'react-redux'

class Header extends React.Component {

  render() {
    const { auth } = this.props
    return (
      <div className="header">
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/tickets">Tickets</a>
        </div>
        <div>
          <a href="/about">About</a>
        </div>
        {auth.isAuthenticated ? 
        ( <div>
            <h3>{auth.user.name}</h3>
            <img src={auth.user.picture} alt="Profile pic"/>
          </div>
        ) : 
        <h3>
          {auth.errorMessage}
        </h3>
        
      }

      </div>
    )
  }
}
const mapStateToProps = ({auth}) => {
    return {
      auth
    }
  }

    export default connect(mapStateToProps)(Header)