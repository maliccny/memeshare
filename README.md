# Meme Share <!-- omit in toc -->



- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

MemeShare is an app which lets you share memes and jokes with friends and allows you to discuss memes with people by leaving comments and feedback on their posts. 


<br>

## MVP


<br>

### Goals

- _Allow user to make an account, sign in_
- _Allow User to make posts and comments_
- _Utilize CRUD functionality on Posts and Comments_

<br>

### Libraries and Dependencies



|     Library      | Description                                    |
| :--------------: | :---------------------------------------------------------------------- |
|      React       | _JavaScript library for building user interfaces or UI component_     |
|   React Router   | _A tool that allows you to handle routes in a web app, using dynamic routing_     |
|   Ruby on Rails  | _A model–view–controller framework, written in Ruby_     |   
|  rack-cors gem   | _handling Cross-Origin Resource Sharing (CORS)_|

<br>

### Client (Front End)

#### Wireframes


- Desktop/Tablet

https://whimsical.com/CyiHTUYyfbyf9MXB1EMqgP

- Mobile 

https://whimsical.com/CyiHTUYyfbyf9MXB1EMqgP


#### Component Tree

>https://i.imgur.com/vehPqU4.png

#### Component Hierarchy



``` structure

src
|__ components/
      |__ Login.jsx
      |__ Register.jsx
      |__ ShowPosts.jsx
      |__ PostDetail.jsx
      |__ UpdatePost.jsx
      |__ UpdateComment.jsx
      |__ Header.jsx
      |__ Footer.jsx
|__ services/
      |__ api-helper.js
      |__ auth.js
      |__ posts.js
      |__ comments.js

```

#### Component Breakdown



|    Component     |    Type    | state | props | Description                                                                                       |
| :--------------: | :--------: | :---: | :---: | :------------------------------------------------------------------------------------------------ |
|    Login         |   class    |   y   |   n   | _The login page, will contain state for user inputs_                                              |
|    Register      |   class    |   y   |   n   | _The Register page, will call a post request from user inputs_                                    |
|    ShowPosts     |   class    |   y   |   y   | _Make a get request to the backend for all posts, and post request for new posts_                 |
|    PostDetail    |   class    |   y   |   y   | _Make a get request for one post and comments and a post requst for new comments_                 |
|    UpdatePost    |   class    |   y   |   y   | _Make a put request for updating post information_                                                |
|    UpdateComment |   class    |   y   |   y   | _Make a put request for updating post information_                                                |
|    Header        |   class    |   n   |   y   | _The header will show the logo and the logout button depending on if the user is signed in_       |
|    Footer        |   class    |   n   |   n   | _The footer will show info about me and a link to my portfolio._                                  |

#### Time Estimates



| Task                            | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create tables and migrations    |    H     |     3 hrs      |      hrs     |     hrs    |
| Create models                   |    H     |     2 hrs      |      hrs     |     TBD     |
| Create controllers              |    H     |     2 hrs      |      hrs     |     TBD     |
| Create routes                   |    H     |     1 hrs      |      hrs     |     TBD     |
| Create seed file                |    H     |     1 hrs      |      hrs     |     TBD     |
| Create service folder elements  |    H     |     3 hrs      |      hrs     |     TBD     |
| Create login                    |    H     |     3 hrs      |      hrs     |     TBD     |
| Create register                 |    H     |     3 hrs      |      hrs     |     TBD     |
| Create showposts                |    H     |     3 hrs      |      hrs     |     TBD     |
| Create postdetails              |    H     |     3 hrs      |      hrs     |     TBD     |
| Create updatepost               |    H     |     3 hrs      |      hrs     |     TBD     |
| Create updatecomment            |    H     |     3 hrs      |      hrs     |     TBD     |
| Create header                   |    H     |     3 hrs      |      hrs     |     TBD     |
| Create footer                   |    H     |     3 hrs      |      hrs     |     TBD     |
| TOTAL                           |          |     36 hrs     |      hrs     |     TBD     |



<br>

### Server (Back End)

#### ERD Model

> https://i.imgur.com/grYM90A.png

<br>

***

## Post-MVP

> Adding comment replies to comments

> more intricate css

***

## Code Showcase

Ternary for switiching between different headers depending on logged in or logged out, with current used passed as a prop down to the header component. 

```
class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.handleVerify();
  }

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData);
    this.setState({ currentUser })
  }

  handleRegister = async (userData) => {
    const currentUser = await registerUser(userData);
    this.setState({ currentUser })
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    removeToken();
    this.props.history.push('/')
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  }

  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Main
          currentUser={this.state.currentUser}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
        />
        <Footer/>
      </div>
    )
  }
}


<header>
      {/* <Link to='/login'><h1>MemeShare</h1></Link> */}

      {currentUser ? (
        <div className="header">
          <Link to='/posts'><h1>MemeShare</h1></Link>
          <div className="signed-in-username-logout">
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      ) : (
          <div className="header">
            <Link to='/login'><h1>MemeShare</h1></Link>
            <Link className="sign-in" to='/login'>Sign In</Link>
          </div>
        )
      }
    </header >
```

