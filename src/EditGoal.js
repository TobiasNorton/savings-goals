import React, { Component } from 'react'
import Header from './Header'

class EditGoal extends Component {
  render() {
    return (
      <div>
        {/* <h1 className="title">Personal Savings Goals</h1>
        <nav className="nav-bar">
          <p>My Goals</p>
          <p>New Goal</p>
          <p>Edit Goals</p>
        </nav> */}
        <Header />

        <section>
          <p className="header">Edit Your Goal</p>
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
              <label>Make a Deposit</label>
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

export default EditGoal
