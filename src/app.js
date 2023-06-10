import React, {useState} from "react"
import Personal from "./components/Personal"
import WorkEduTitle from "./components/WorkEduTitle"
import Skill from "./components/Skills"
import './style.css'

export default function App() {
  const [showForm, setShowForm] = useState(true)

  const handleClick = (e) => {
    e.preventDefault()
   setShowForm(false)
  }


  return (
    <form className="form">
      <Personal showForm={showForm}/>
      <WorkEduTitle  title="Work Experience" cls="work-container" />
      <WorkEduTitle title="Education" cls="edu-container" />
      <Skill showForm={showForm}/>
      <div className="btn-container">
        <button id="submit-btn" type="submit" onClick={handleClick}>Submit</button>
      </div>
    </form>
  )
}
