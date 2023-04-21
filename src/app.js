import React, {Component} from "react"
import Personal from "./components/personal"
import WorkExp from "./components/WorkExp"
import Education from "./components/Education"
import WorkEdu from "./components/WorkEdu"
import './style.css'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Personal />
        <WorkEdu title="Work Experience" />
        <WorkEdu title="Education" />
      </div>
    )
  }
}

export default App