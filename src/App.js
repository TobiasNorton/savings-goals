import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Welcome from './Welcome'
import Home from './Home'
import NewGoal from './NewGoal'
import MyGoals from './MyGoals'
import EditGoal from './EditGoal'

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Welcome /> */}
        {/* <MyGoals /> */}
        {/* <NewGoal /> */}
        <EditGoal />
      </Router>
    )
  }
}

export default App
