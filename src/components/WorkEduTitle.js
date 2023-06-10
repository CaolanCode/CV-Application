import React, {useState} from "react";
import Education from "./Education"
import WorkExp from "./WorkExp"
import shortid from "shortid";

export default function WorkEduTitle({title, cls, showForm}) {
  const [edu, setEdu] = useState([])
  const [work, setWork] = useState([])
  const [eduData, setEduData] = useState([])
  const [workData, setWorkData] = useState([])

  const handleSaveEdu = (index, educationData) => {
    const updatedEduData = [...eduData]
    updatedEduData[index] = educationData
    setEduData(updatedEduData)
  }

  const handleSaveWork = (index, companyData) => {
    const updatedWorkData = [...workData]
    updatedWorkData[index] = companyData
    setWorkData(updatedWorkData)
  }

  const addPanel = (e) => {
    e.preventDefault()
    if (cls === "edu-container") {
      const index = edu.length
      setEdu([...edu, <Education key={shortid.generate()} index={index} onSave={handleSaveEdu} />])
    } else if (cls === "work-container") {
      const index = work.length
      setWork([...work, <WorkExp key={shortid.generate()} index={index} onSave={handleSaveWork}/>])
    }
  }


  return (
    <>
      {
        showForm ? (
          <div className={cls}>
            <div className="add-section">
              <div className="add-section-title">{title}</div>
              <button className="add-btn" onClick={addPanel}>+</button>
            </div>
            {cls === "edu-container" ? edu : work}
          </div>
        ) : (
          <div>
            {cls === "edu-container" && 
              eduData.map((education, index) => {
                return (
                  <div key={index}>
                    <div>University: {education.uni}</div>
                    <div>City: {education.city}</div>
                    <div>From: {education.startDate}</div>
                    <div>To: {education.endDate}</div>
                    <div>Degree: {education.degree}</div>
                  </div>
                )
              }) 
            }
            {cls === "work-container" &&
              workData.map((work, index) => {
                return (
                  <div key={index}>
                    <div>Company : {work.company}</div>
                    <div>City : {work.city}</div>
                    <div>To : {work.startDate}</div>
                    <div>From : {work.endDate}</div>
                    <div>Role : {work.role}</div>
                  </div>
                )
              })
            }

          </div>
        )
      }
    </>
  )
}