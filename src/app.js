import React, {Component} from "react";
import uniqid from 'uniqid'
import Personal from "./components/Personal"
import WorkEdu from "./components/WorkEdu";

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Personal />
        <WorkEdu 
          location="Company Name"
          title="Role"
        />
        <WorkEdu 
          location="University Name"
          title="Degree"
        />
      </div>
    )
  }
}

export default App