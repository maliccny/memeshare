import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Posts extends Component {
  state = {
    title: '',
    img_url: ''
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }



  render() {
    const { handlePostCreate, history, posts, currentUser } = this.props;
    return (
      <div>
        <div>
          {posts.map(post => (
            <React.Fragment key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <p>{post.title}</p>
                <img alt={post.title} src={post.img_url} /> 
              </Link>
            </React.Fragment>
          ))}
        </div>
        <div>
          <form onSubmit={(e) => {
            e.preventDefault();
            handlePostCreate(currentUser.id, this.state);
            history.push('/posts');
          }}>
            <h3>Create Post</h3>
            <label>
              Title:
          <input
                type='text'
                name = "title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
            <label>
              img_url:
          <input
                type='text'
                name = "img_url"
                value={this.state.img_url}
                onChange={this.handleChange}
              />
            </label>
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}