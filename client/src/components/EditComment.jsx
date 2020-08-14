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
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  render() {
    const { handleCommentUpdate, history, id } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCommentUpdate(id, this.state);
        history.push('/posts');
      }}>
        <h3>Update Comment</h3>
        <label>
          Text:
          <input
            type='text'
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}