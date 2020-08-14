import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      {/* <Link to='/login'><h1>MemeShare</h1></Link> */}

      {currentUser ? (
        <>
          <Link to='/posts'><h1>MemeShare</h1></Link>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
          <>
            <Link to='/login'><h1>MemeShare</h1></Link>
            <Link to='/login'>Sign In</Link>
          </>
        )
      }
    </header >
  )
}