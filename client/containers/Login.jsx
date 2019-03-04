import React from 'react'
import FacebookLogin from 'react-facebook-login'
import {connect} from 'react-redux'

import {loginUser, loginError, requestLogin} from '../actions/auth/login'
import { bindActionCreators } from 'redux';

class Login extends React.Component {
  state = {
      name: "",
      email: "",
      picture: ""
    };

    componentDidMount() {
      this.props.loginError('Please login')
    }

    responseFacebook = (response) => {
      if(response.name === undefined){
        return this.props.loginError('Error')
      }
      
      this.setState({
        picture: response.picture.data.url,
        email: response.email
      })
      let {email, picture} = this.state
      this.props.loginUser({name, email, picture})

    }

    componentClicked = () => this.props.requestLogin; //loading action here

    render() {
      let fbContent;
      const { auth } = this.props
  
      if (auth.isAuthenticated) {
        fbContent = (
          <div
            style={{
              width: "400px",
              margin: "auto",
              background: "#f4f4f4",
              padding: "20px"
            }}
          >
            
            <h2>Welcome {this.state.name}</h2>
            
          </div>
        );
      } else {
        {auth.errorMessage && <span className="">{auth.errorMessage}</span>}
        fbContent = (
          <FacebookLogin
            appId="249678739247240"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        );
      }
  
      return (
      
      <div>{fbContent}</div>
      );
    }
  }

  const mapStateToProps = ({auth}) => {
    return {
      auth
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loginUser, loginError, requestLogin}, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login)

