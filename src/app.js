import React, {Component} from "react";
import uniqid from 'uniqid'
import Personal from "./components/personal";

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Personal />
      </div>
    )
  }
}

export default App