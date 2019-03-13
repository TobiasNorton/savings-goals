import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Personal Savings Goals</h1>
        <nav className="nav-bar">
          <p>My Goals</p>
          <p>New Goal</p>
          <p>Edit Goals</p>
        </nav>
      </div>
    )
  }
}

export default Header
