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
      <form onSubmit={(e) => {
        e.preventDefault();
        handlePostUpdate(this.props.currentUser.id, id, this.state);
        history.push('/posts/:id');
      }}>
        <h3>Update Post</h3>
        <label>
          Title:
          <input
            type='text'
            name = "text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label>
          img_url:
          <input
            type='text'
            name = "text"
            value={this.state.img_url}
            onChange={this.handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}