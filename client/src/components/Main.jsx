import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import PostDetail from './PostDetail'
import Posts from './Posts'
import EditPost from './EditPost'
import EditComment from './EditComment'

export default class Main extends Component {
  


  

  render() {
    const { handleLogin, handleRegister } = this.props;
    return (
      <main>
        <Route path='/login' render={(props) => (
          <Login
            {...props}
            handleLogin={handleLogin}
          />
        )} />
        <Route path='/register' render={(props) => (
          <Register
            {...props}
            handleRegister={handleRegister}
          />
        )} />
        <Route exact path='/posts' render={() => (
          <Posts/>
        )} />
        <Route exact path='/posts' render={() => (
          <PostDetail />
        )} />
        <Route exact path='/posts' render={() => (
          <EditPost />
        )} />
        <Route exact path='/posts' render={() => (
          <EditComment />
        )} />
      </main>
    )
  }
}