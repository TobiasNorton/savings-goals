import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Personal Savings Goals</h1>
        <nav className="nav-bar">
          <Link to="">My Goals</Link>
          <Link to="">New Goal</Link>
          <Link to="">Edit Goals</Link>
        </nav>
      </div>
    )
  }
}

export default Header
