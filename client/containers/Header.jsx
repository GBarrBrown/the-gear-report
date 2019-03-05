import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Header extends React.Component {

  render() {
    const { auth } = this.props
    return (
      <div className="header-container">
        <div className="header">
          <ul>
            <li className="header-items"><a href="/">Home</a></li>
            <li className="header-items"><a href="/tickets">Tickets</a></li>
            <li className="header-items"><a href="/faq">FAQ</a></li>
            <li className="header-items"><a href="/about">About</a></li>
            <li className="header-items"><a href="/register">Register</a></li>

          </ul>
          {auth.isAuthenticated ? 
            ( <div className="header-items-login">
                <h3>{auth.user.name}</h3>
                <img src={auth.user.picture} alt="Profile pic"/>
              </div>
            ) : 
            (
              <a href="/login">
              <div className="header-items-login">
                {auth.errorMessage}
              </div>
              </a>
            )
          }
        </div>
      </div>



    )
  }
}
const mapStateToProps = ({auth, children, loadLocationById}) => {
    return {
      auth,
      children,
      loadLocationById
    }
  }

export default connect(mapStateToProps)(Header)

