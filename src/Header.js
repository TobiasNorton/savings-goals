import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Personal Savings Goals</h1>
        <nav className="nav-bar">
          <Link to="/goals" className="nav-link">
            My Goals
          </Link>
          <Link to="/new" className="nav-link">
            New Goal
          </Link>
          <Link to="/edit/:id" className="nav-link">
            Edit Goals
          </Link>
        </nav>
      </div>
    )
  }
}

export default Header
