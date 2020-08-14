import React, { Component } from 'react'
import { getOnePost, deletePost } from '../services/posts'
import { getAllComments, postComment, deleteComment } from '../services/comments'


export default class PostDetail extends Component {
  state =  {
    post: "",
    comments: [],
    text: ""
  }
  componentDidMount() {
    this.fetchOnePost()
    this.fetchComments()
  }

  fetchOnePost = async (user_id, id) => {
    const post = await getOnePost(user_id, id);
    this.setState({ post })
  }

  

  handlePostDelete = async (user_id, id) => {
    await deletePost(user_id, id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !== id)
    }))
  }

  // axios call for comments

  fetchComments = async (user_id, post_id) => {
    const comments = await getAllComments(user_id, post_id);
    this.setState({ comments });
  }

  handleCommentCreate = async (user_id, post_id, commentData) => {
    const newComment = await postComment(user_id, post_id, commentData);
    this.setState(prevState => ({
      posts: [...prevState.comments, newComment]
    }))
  }

  handleCommentDelete = async (user_id, id) => {
    await deleteComment(user_id, id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !== id)
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
    const { post} = this.props;
    return (
      <div>
        <div className="onePost">
          <p>{post.title}</p>
          <img alt={post.title} src={post.img_url} /> 
        </div>
        <div className="postcomments">
          {this.state.comments.map(comment => (
            <p>{comment}</p>
          ))}
        </div>
        <div>
          <form onSubmit={(e) => {
            e.preventDefault();
            this.handleCommentCreate(this.state);
            // history.push('/posts');
          }}>
            <h3>Create Comment</h3>
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
        </div>
      </div>
    )
  }
}