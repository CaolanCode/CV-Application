import React, {Component} from "react"
import Personal from "./components/Personal"
import WorkEduTitle from "./components/WorkEduTitle"
import Skill from "./components/Skills"
import './style.css'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="form">
        <Personal />
        <WorkEduTitle  title="Work Experience" cls="work-container" />
        <WorkEduTitle title="Education" cls="edu-container" />
        <Skill />
        <div className="btn-container">
          <button id="submit-btn">Submit</button>
        </div>
      </div>
    )
  }
}

export default App