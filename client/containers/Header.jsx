import React from 'react'
import { connect } from 'react-redux'

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
                Login {auth.errorMessage}
              </div>
              </a>
            )
          }
        </div>
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


      //     <div className="header">
      //   <a href="/">
      //     <div className="header-items">
      //       Home
      //     </div>
      //   </a>
      //   <a href="/tickets">
      //     <div className="header-items">
      //       Tickets
      //     </div>
      //   </a>
      //   <a href="/faq">
      //     <div className="header-items">
      //       FAQ
      //     </div>
      //   </a>
      //   <a href="/about">
      //     <div className="header-items">
      //       About
      //     </div>
      //   </a>
      //   {auth.isAuthenticated ? 
      //   ( <div className="header-items-login">
      //       <h3>{auth.user.name}</h3>
      //       <img src={auth.user.picture} alt="Profile pic"/>
      //     </div>
      //   ) : 
      //   (
      //     <a href="/login">
      //       <div className="header-items-login">
      //         Login {auth.errorMessage}
      //       </div>
      //     </a>
      //   )
      // }

      // </div>