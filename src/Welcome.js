import React, { Component } from 'react'
import mainImage from './bjorn-snelders-1415617-unsplash.jpg'

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div>
          <h1>Personal Savings Goals</h1>
        </div>
        <section className="login-area">
          <p>Welcome!</p>
          <p>Please Log In to Continue</p>
          <button>Log In</button>
        </section>
      </div>
    )
  }
}

export default Welcome
