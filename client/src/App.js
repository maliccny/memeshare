import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import Main from './components/Main'
import { withRouter } from 'react-router-dom';

class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.handleVerify();
  }

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData);
    this.setState({ currentUser })
  }

  handleRegister = async (userData) => {
    const currentUser = await registerUser(userData);
    this.setState({ currentUser })
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    removeToken();
    this.props.history.push('/')
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  }

  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Main
          currentUser={this.state.currentUser}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
        />
        <Footer/>
      </div>
    )
  }
}

export default withRouter(App);