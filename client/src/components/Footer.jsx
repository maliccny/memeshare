import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div>
        <p>Created By</p>
      </div>
      <div>
        <p>Misbah Ali</p>
        <Link to='https://github.com/maliccny/'><h1>Github</h1></Link>
      </div>
    </footer >
  )
}