import React from 'react'
import FacebookLogin from 'react-facebook-login'
import {connect} from 'react-redux'

import {loginUser, loginError, requestLogin} from '../actions/auth'
import { bindActionCreators } from 'redux';



class Login extends React.Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
      };

      componentDidMount() {
        this.props.dispatch(loginError(''))
      }

      responseFacebook = (response) => {
        console.log(response);
        this.setState({
          name: response.name,
          picture: response.picture.data.url,
          isLoggedIn: true
        })
        // now to send that info to our db and route to last address in history
      }

      componentClicked = () => this.props.requestLogin; //loading action here

      render() {
        let fbContent;
    
        if (this.state.isLoggedIn) {
          fbContent = (
            <div
              style={{
                width: "400px",
                margin: "auto",
                background: "#f4f4f4",
                padding: "20px"
              }}
            >
              <img src={this.state.picture} alt={this.state.name} />
              <h2>Welcome {this.state.name}</h2>
              
            </div>
          );
        } else {
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
    
        return <div>{fbContent}</div>;
      }
    }

    const mapStateToProps = ({auth}) => {
      return {
        auth
      }
    }

    const mapDisptachToProps = (dispatch) => {
      return bindActionCreators({loginUser, loginError, requestLogin}, dispatch)
    }
    
    export default connect(mapStateToProps, mapDisptachToProps)(Login)

