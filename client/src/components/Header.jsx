import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <Link to='/'><h1>MemeShare</h1></Link>

      {currentUser ? (
        <>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
          <Link to='/login'>Sign In</Link>
        )
      }
    </header >
  )
}