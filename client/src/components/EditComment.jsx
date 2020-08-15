import React, { Component } from 'react'

export default class UpdateComment extends Component {
  state = {
    text: ''
  }

  componentDidMount() {
    if (this.props.comment) {
      this.setFormData();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.comment !== this.props.comment) {
      this.setFormData();
    }
  }

  setFormData = () => {
    this.setState({
      name: this.props.comment.text
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { handleCommentUpdate, history, id } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCommentUpdate(this.props.currentUser.id, this.props.match.params.post_id, this.props.match.params.id, this.state);
        history.push(`/posts/${this.props.match.params.post_id}`);
      }}>
        <h3>Update Comment</h3>
        <label>
          Text:
          <input
            type='text'
            name = "text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}