import React, { Component } from 'react'

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, email, password } = this.state;
    const { handleRegister, history } = this.props;

    return (
      <div className="register-box">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleRegister(this.state);
          history.push('/posts');
        }}>
          <h3>Register</h3>
          <div>
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
          <div className="register-email-input">
            <label>
              Email:
          <input
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <br />
          <div>
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
          <button className="register-button">Submit</button>
        </form>
      </div>
    )
  }
}