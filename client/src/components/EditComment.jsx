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
      // <div className="update-comment-div">
      //   <form onSubmit={(e) => {
      //     e.preventDefault();
      //     handleCommentUpdate(this.props.currentUser.id, this.props.match.params.post_id, this.props.match.params.id, this.state);
      //     // history.push(`/posts/${this.props.match.params.post_id}`);
      //     history.push(`/posts`);

      //   }}>
      //     <h3>Update Comment</h3>
      //     <div className="text-update">
      //       <label>
      //         Text:
      //       <input
      //           type='text'
      //           name="text"
      //           value={this.state.text}
      //           onChange={this.handleChange}
      //         />
      //       </label>
      //       <button>Submit</button>
      //     </div>
      //   </form>
      // </div>
      <div className="update-comment-div-container">
        <div className="card">
          <form
            className="card-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleCommentUpdate(
                this.props.currentUser.id,
                this.props.match.params.post_id,
                this.props.match.params.id,
                this.state
              );
              // history.push(`/posts/${this.props.match.params.post_id}`);
              history.push(`/posts`);
            }}
          >
            <div className="card-image">
              <h2 className="card-heading">Update Comment</h2>
            </div>
            <div className="input">
              <input
                className="input-field"
                type="text"
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                required
              />
              <label className="input-label">Text</label>
            </div>
            <div class="action">
              <button class="action-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}