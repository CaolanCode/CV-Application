import React, {Component} from "react"
import Personal from "./components/personal"
import WorkExp from "./components/WorkExp"
import Education from "./components/Education"
import './style.css'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="form">
        <Personal />
        <WorkExp />
        <Education />
      </div>
    )
  }
}

export default App