import React, { Component } from "react";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, password } = this.state;
    const { handleRegister, history } = this.props;

    return (
      <div className="register-container">
        <div className="card">
          <form
            className="card-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister(this.state);
              history.push("/posts");
            }}
          >
            <div className="card-image">
              <h2 className="card-heading">Register</h2>
            </div>
            <div className="input">
              <input
                className="input-field"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
                required
              />
              <label className="input-label">Username</label>
            </div>
            <div className="input">
              <input
                className="input-field"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
              <label className="input-label">Email</label>
            </div>
            <div className="input">
              <input
                className="input-field"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                required
              />
              <label className="input-label">Password</label>
            </div>
            <div className="action">
              <button className="action-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
