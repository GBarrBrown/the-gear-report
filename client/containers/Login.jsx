import React from 'react'
import FacebookLogin from 'react-facebook-login'



class Login extends React.Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
      };

      responseFacebook = (response) => {
        console.log(response);
        this.setState({
          name: response.name,
          picture: response.picture.data.url,
          isLoggedIn: true
        })
        // now to send that info to our db and route to last address in history
      }

      componentClicked = () => console.log("clicked"); //loading action here

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

export default Login

