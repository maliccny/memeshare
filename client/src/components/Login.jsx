import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state;
    const { handleLogin, history } = this.props;

    return (
      <div className="login-box">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin(this.state);
          history.push('/posts')
        }}>
          <h3>Login</h3>
          <div className="username-div">
            <label>
              Username:
            <input
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </label>
          </div>
          
          <br />
          <div className="password-div"> 
            <label>
              Password:
          <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
          </div>
          
          <br />
          <div className="login-register-button">
            <Link to='/register'>Register</Link>
            <button className="login-submit-button">Submit</button>
          </div>
          
        </form>
      </div>
      
    )
  }
}