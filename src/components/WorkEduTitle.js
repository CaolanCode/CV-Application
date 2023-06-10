import React, {useState} from "react";
import Education from "./Education"
import WorkExp from "./WorkExp"
import shortid from "shortid";

export default function WorkEduTitle(props) {
  const [edu, setEdu] = useState([])
  const [work, setWork] = useState([])
  const [eduData, setEduData] = useState([])

  const handleSaveEdu = (index, educationData) => {
    const updatedEduData = [...eduData]
    updatedEduData[index] = educationData
    setEduData(updatedEduData)
  }

  const addPanel = (e) => {
    e.preventDefault()
    if (props.cls === "edu-container") {
      const index = edu.length
      setEdu([...edu, <Education key={shortid.generate()} index={index} onSave={handleSaveEdu} />])
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