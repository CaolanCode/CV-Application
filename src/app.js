import React, {Component} from "react";
import uniqid from 'uniqid'
import Personal from "./components/personal";
import WorkExperience from "./components/workExp";
import Education from "./components/education";

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Personal />
        <WorkExperience />
        <Education />
      </div>
    )
  }
}

export default App