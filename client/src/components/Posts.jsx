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
        <div className="posts">
          {posts.map((post) => (
            <React.Fragment key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <div className="individual-posts">
                  <p>{post.title}</p>
                  <img
                    className="posts-images"
                    alt={post.title}
                    src={post.img_url}
                  />
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
        <div className="create-post-container">
          <div className="card">
            <form
              className="card-form"
              onSubmit={(e) => {
                e.preventDefault();
                handlePostCreate(currentUser.id, this.state);
                history.push("/posts");
              }}
            >
              <div className="card-image">
                <h2 className="card-heading">Create Post</h2>
              </div>
              <div className="input">
                <input
                  className="input-field"
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  required
                />
                <label className="input-label">Title</label>
              </div>
              <div className="input">
                <input
                  className="input-field"
                  type="text"
                  name="img_url"
                  value={this.state.img_url}
                  onChange={this.handleChange}
                  required
                />
                <label className="input-label">Image URL</label>
              </div>
              <div class="action">
                <button class="action-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}