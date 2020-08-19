import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>Created By</p>
      </div>
      <div>
        <p>Misbah Ali</p>
        <Link to='https://github.com/maliccny/'><p>Github</p></Link>
      </div>
    </footer >
  )
}