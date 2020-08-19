import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
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
  )
}