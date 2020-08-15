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
    this.fetchOnePost(this.props.currentUser.id, this.props.match.params.id)
    this.fetchComments(this.props.currentUser.id, this.props.match.params.id)
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
    // history.push('/posts');

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
        {/* {if this.props.currentUser.id === post.user_id {
          <div className="onePost">
            <p>{post.title}</p>
            <img alt={post.title} src={post.img_url} />
            <Link to={`/posts/${post.id}/edit`}><button>Edit Post</button></Link>
            <button onClick={() => this.handlePostDelete(this.props.currentUser.id, post.id)}>Delete Post</button>
          </div>
        } else {
          <div className="onePost">
            <p>{post.title}</p>
            <img alt={post.title} src={post.img_url} />
          </div>
          }
        }  */}
        <div className="onePost">
          <p>{post.title}</p>
          <img alt={post.title} src={post.img_url} />
          <Link to={`/posts/${post.id}/edit`}><button>Edit Post</button></Link>
          <button onClick={() => this.handlePostDelete(this.props.currentUser.id, post.id)}>Delete Post</button>
        </div>
        <div className="postcomments">
          {this.state.comments.map(comment => (
            <p>{comment.text}</p>
            // <Link to={`/comment/${post.id}/edit`}><button>Edit Comment</button></Link>
            // <button onClick={() => this.handleCommentDelete(this.props.currentUser.id, comment.post_id, comment.id)}>Delete Comment</button>
          ))}
        </div>
        <div>
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
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}