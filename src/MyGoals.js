import React, { Component } from 'react'
import data from './goals.json'

class MyGoals extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //data
      goals: [
        {
          goalName: 'Gibson Les Paul',
          goalAmount: 4500,
          balance: 600,
          deadline: 'September 10, 2019'
        },
        {
          goalName: 'Fender Telecaster',
          goalAmount: 1500,
          balance: 200,
          deadline: 'December 15, 2019'
        },
        {
          goalName: 'Thailand, Cambodia',
          goalAmount: 4500,
          balance: 500,
          deadline: 'January 20, 2020'
        },
        {
          goalName: 'Scotland, Ireland, UK',
          goalAmount: 6000,
          balance: 1250,
          deadline: 'April 14, 2020'
        },
        {
          goalName: 'New Backpack',
          goalAmount: 600,
          balance: 0,
          deadline: 'August 15, 2019'
        },
        {
          goalName: 'Fender Stratocaster',
          goalAmount: 1800,
          balance: 3,
          deadline: 'November 17, 2019'
        }
      ]
    }
  }

  displayGoals = () => {
    if (!this.state.goals) {
      return (
        <>
          <p>You have no current goals.</p>
          <button>Create a Goal!</button>
        </>
      )
    } else {
      return this.state.goals.map((goal, index) => {
        return (
          <tr className="row">
            <td>{goal.goalName}</td>
            <td>{goal.goalAmount}</td>
            <td>{goal.balance}</td>
            <td>{goal.deadline}</td>
          </tr>
        )
      })
    }
  }

  goalName = () => {
    return this.state.goals.map((goal, index) => {
      return (
        <div>
          <p>{goal.goalName}</p>
        </div>
      )
    })
  }

  goalAmount = () => {
    return this.state.goals.map((goal, index) => {
      return (
        <div>
          <p>${goal.goalAmount}</p>
        </div>
      )
    })
  }

  balance = () => {
    return this.state.goals.map((goal, index) => {
      return (
        <div>
          <p>${goal.balance}</p>
        </div>
      )
    })
  }

  deadline = () => {
    return this.state.goals.map((goal, index) => {
      return (
        <div>
          <p>{goal.deadline}</p>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="my-goals">
        <div>
          <h1 className="title">Personal Savings Goals</h1>
          <nav className="nav-bar">
            <p>My Goals</p>
            <p>New Goal</p>
            <p>Edit Goals</p>
            <p>My Goals</p>
          </nav>
        </div>
        <section className="goals-list">
          <p>My Goals</p>
          <table className="table">
            <tr className="test">
              <th>Goal</th>
              <th>Amount</th>
              <th>Current Balance</th>
              <th>Deadline</th>
            </tr>
            {this.displayGoals()}
            <tr className="test">
              <td>Goal</td>
              <td>Amount</td>
              <td>Current Balance</td>
              <td>Goal</td>
            </tr>
          </table>
          {/* <div className="list-container">
            <div>
              <p>Goal</p>
              {this.goalName()}
            </div>
            <div>
              <p>Amount</p>
              {this.goalAmount()}
            </div>
            <div>
              <p>Current Balance</p>
              {this.balance()}
            </div>
            <div>
              <p>Date</p>
              {this.deadline()}
            </div>
          </div> */}
        </section>
      </div>
    )
  }
}

export default MyGoals
