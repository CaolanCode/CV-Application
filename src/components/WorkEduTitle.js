import React, {useState} from "react";
import Education from "./Education"
import WorkExp from "./WorkExp"

export default function WorkEduTitle(props) {

  const [edu, setEdu] = useState([])
  const [work, setWork] = useState([])

  const addPanel = () => {
    if (props.cls === "edu-container") {
      setEdu([...edu, <Education />])
    } else if (props.cls === "work-container") {
      setWork([...work, <WorkExp />])
    }
  }

  return (
    <div className={props.cls}>
      <div className="work-edu-add">
        <div>{props.title}</div>
        <button onClick={addPanel}>+</button>
      </div>
      {props.cls === "edu-container" ? edu : work}
    </div>
  )
}