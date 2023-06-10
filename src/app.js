import React, {useRef} from "react"
import Personal from "./components/Personal"
import WorkEduTitle from "./components/WorkEduTitle"
import Skill from "./components/Skills"
import './style.css'

export default function App() {
  const personalRef = useRef(null)
  const skillRef = useRef(null)

  const handleClick = (e) => {
    e.preventDefault()
    if(personalRef.current) {
      personalRef.current.displayPersonal()
    }
    if(skillRef.current) {
      skillRef.current.displaySkills()
    }
  }


  return (
    <form className="form">
      <Personal ref={personalRef}/>
      <WorkEduTitle  title="Work Experience" cls="work-container" />
      <WorkEduTitle title="Education" cls="edu-container" />
      <Skill ref={skillRef}/>
      <div className="btn-container">
        <button id="submit-btn" type="submit" onClick={handleClick}>Submit</button>
      </div>
    </form>
  )
}
