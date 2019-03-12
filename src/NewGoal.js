import React, { Component } from 'react'

class NewGoal extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Personal Savings Goals</h1>
        <nav className="nav-bar">
          <p>My Goals</p>
          <p>New Goal</p>
          <p>Edit Goals</p>
        </nav>
        <section>
          <p className="header">Create a New Goal</p>
          <form className="new-goal">
            <div className="input-container">
              <label>Goal Name</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label>Amount</label>
              <input type="number" />
            </div>
            <div className="input-container">
              <label>Initial Deposit</label>
              <input type="number" />
            </div>
            <div className="input-container">
              <label>Deadline</label>
              <input type="date" />
            </div>
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </section>
      </div>
    )
  }
}

export default NewGoal
