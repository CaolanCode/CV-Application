import React, {Component} from "react";
import uniqid from 'uniqid'
import Personal from "./components/personal";
import WorkExperience from "./components/workExp";

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Personal />
        <WorkExperience />
      </div>
    )
  }
}

export default App