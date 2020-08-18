import React, { Component } from 'react'

export default class UpdatePost extends Component {
  state = {
    title: '',
    img_url: ''
  }

  componentDidMount() {
    if (this.props.post) {
      this.setFormData();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.post !== this.props.post) {
      this.setFormData();
    }
  }

  setFormData = () => {
    this.setState({
      title: this.props.post.title,
      img_url: this.props.post.img_url
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { handlePostUpdate, history, id } = this.props;
    return (
      <div className="update-post-div">
        <form onSubmit={(e) => {
          e.preventDefault();
          handlePostUpdate(this.props.currentUser.id, this.props.match.params.id, this.state);
          history.push(`/posts/${this.props.match.params.id}`);
        }}>
          <h3>Update Post</h3>
          <label>
            Title:
          <input
              type='text'
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <label>
            img_url:
          <input
              type='text'
              name="img_url"
              value={this.state.img_url}
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <button>Submit</button>
        </form>
      </div>
      
    )
  }
}