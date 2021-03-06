import React, { Component } from 'react'
import { getOnePost, deletePost } from '../services/posts'
import { getAllComments, postComment, deleteComment } from '../services/comments'
import { Link } from 'react-router-dom';


export default class PostDetail extends Component {
  state =  {
    post: "",
    comments: [],
    text: ""
  }
  componentDidMount() {
    if (this.props.currentUser) {
      this.fetchOnePost(this.props.currentUser.id, this.props.match.params.id)
      this.fetchComments(this.props.currentUser.id, this.props.match.params.id)
    }
  }

  fetchOnePost = async (user_id, id) => {
    const post = await getOnePost(user_id, id);
    this.setState({ post })
  }

  

  handlePostDelete = async (user_id, id) => {
    await deletePost(user_id, id);
    // this.setState(prevState => ({
    //   posts: prevState.posts.filter(post => post.id !== id)
    // }))
    this.props.history.push('/posts');

  }

  // axios call for comments

  fetchComments = async (user_id, post_id) => {
    const comments = await getAllComments(user_id, post_id);
    this.setState({ comments });
  }

  handleCommentCreate = async (user_id, post_id, commentData) => {
    const newComment = await postComment(user_id, post_id, commentData);
    this.setState(prevState => ({
      comments: [...prevState.comments, newComment]
    }))
  }

  handleCommentDelete = async (user_id, post_id, id) => {
    await deleteComment(user_id, post_id, id);
    this.setState(prevState => ({
      comments: prevState.comments.filter(comment => comment.id !== id)
    }))
  }

  // form data

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
    const { post } = this.state;
    // console.log(this.props)
    // console.log(post)
    return (
      <div>
        <div className="post-and-comment-div">
          {this.props.currentUser &&
          this.props.currentUser.id === post.user_id ? (
            <div className="onePost">
              <p>{post.title}</p>
              <img
                className="postdetail-img"
                alt={post.title}
                src={post.img_url}
              />
              <br />
              <Link to={`/posts/${post.id}/edit`}>
                <button className="custom-btn btn-10">Edit Post</button>
              </Link>
              <button
                className="custom-btn btn-10"
                onClick={() =>
                  this.handlePostDelete(this.props.currentUser.id, post.id)
                }
              >
                Delete Post
              </button>
            </div>
          ) : (
            <div className="onePost">
              <p>{post.title}</p>
              <img
                className="postdetail-img"
                alt={post.title}
                src={post.img_url}
              />
            </div>
          )}
          <div className="postcomments">
            {this.state.comments.map((comment) => (
              <div>
                <p>{comment.text}</p>
                <Link to={`/posts/${post.id}/comment/${comment.id}/edit`}>
                  <button className="custom-btn btn-10 cmnts-btn">Edit Comment</button>
                </Link>
                <button
                  className="custom-btn btn-10 cmnts-btn"
                  onClick={() =>
                    this.handleCommentDelete(
                      this.props.currentUser.id,
                      comment.post_id,
                      comment.id
                    )
                  }
                >
                  Delete Comment
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="create-comment-div">
          <form onSubmit={(e) => {
            e.preventDefault();
            this.handleCommentCreate(this.props.currentUser.id, this.props.match.params.id, { text: this.state.text });
            // history.push('/posts');
          }}>
            <h3>Create Comment</h3>
            <label>
              Text:
          <input
                type='text'
                name = "text"
                value={this.state.text}
                onChange={this.handleChange}
              />
            </label>
            <div className="submit-comment">
              <button>Submit</button>
            </div>
          </form>
        </div> */}
        <div className="create-comment-div-container">
          <div className="card">
            <form
              className="card-form"
              onSubmit={(e) => {
                e.preventDefault();
                this.handleCommentCreate(
                  this.props.currentUser.id,
                  this.props.match.params.id,
                  { text: this.state.text }
                );
                // history.push('/posts');
              }}
            >
              <div className="card-image">
                <h2 className="card-heading">Create Comment</h2>
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
      </div>
    );
  }
}