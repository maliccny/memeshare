import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import PostDetail from './PostDetail'
import Posts from './Posts'
import EditPost from './EditPost'
import EditComment from './EditComment'

import { getAllPosts, postPost, putPost } from '../services/posts'
import { putComment } from '../services/comments'

export default class Main extends Component {
  state = {
    posts: []
  }
  
  componentDidMount() {
    this.fetchPosts();
  }

 
  // axios calls for posts

  fetchPosts = async () => {
    const posts = await getAllPosts();
    this.setState({ posts });
  }

  handlePostCreate = async (user_id, postData) => {
    const newPost = await postPost(user_id, postData);
    this.setState(prevState => ({
      posts: [...prevState.posts, newPost]
    }))
  }

  handlePostUpdate = async (user_id, id, postData) => {
    const newPost = await putPost(user_id, id, postData);
    this.setState(prevState => ({
      posts: prevState.posts.map(post => post.id === parseInt(id) ? newPost : post)
    }))
  }

  

  // axois calls for comments


  handleCommentUpdate = async (user_id, post_id, id, commentData) => {
    const newComment = await putComment(user_id, post_id, id, commentData);
    // this.setState(prevState => ({
    //   comments: prevState.comments.map(comment => comment.id === parseInt(id) ? newComment : comment)
    // }))
  }

  

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
        <Route exact path='/posts' render={(props) => (
          <Posts
            {...props}
            posts={this.state.posts}
            handlePostCreate={this.handlePostCreate}
            currentUser = {this.props.currentUser}
          />
        )} />
        <Route exact path='/posts/:id' render={(props) => (
          <PostDetail
            {...props}
            currentUser={this.props.currentUser}
          />
        )} />
        <Route exact path='/posts/:id/edit' render={(props) => (
          <EditPost
            {...props}
            handlePostUpdate={this.handlePostUpdate}
            currentUser={this.props.currentUser}
          />
        )} />
        <Route exact path='/posts/:post_id/comment/:id/edit' render={(props) => (
          <EditComment
            {...props}
            handleCommentUpdate={this.handleCommentUpdate}
            currentUser={this.props.currentUser}
          />
        )} />
      </main>
    )
  }
}