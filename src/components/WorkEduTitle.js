import React, {useState} from "react";
import Education from "./Education"
import WorkExp from "./WorkExp"
import shortid from "shortid";

export default function WorkEduTitle(props) {

  const [edu, setEdu] = useState([])
  const [work, setWork] = useState([])

  const addPanel = (e) => {
    e.preventDefault()
    if (props.cls === "edu-container") {
      setEdu([...edu, <Education key={shortid.generate()} />])
    } else if (props.cls === "work-container") {
      setWork([...work, <WorkExp key={shortid.generate()} />])
    }
  }

  return (
    <div className={props.cls}>
      <div className="add-section">
        <div className="add-section-title">{props.title}</div>
        <button className="add-btn" onClick={addPanel}>+</button>
      </div>
      {props.cls === "edu-container" ? edu : work}
    </div>
  )
}