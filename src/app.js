import React, {useState} from "react"
import Personal from "./components/Personal"
import WorkEduTitle from "./components/WorkEduTitle"
import Skill from "./components/Skills"
import './styles/index.css'
import './styles/form.css'

export default function App() {
  const [showForm, setShowForm] = useState(true)

  const handleClick = (e) => {
    e.preventDefault()
   setShowForm(false)
  }


  return (
    <form className="form">
      <Personal showForm={showForm}/>
      <WorkEduTitle  title="Work Experience" cls="work-container" showForm={showForm}/>
      <WorkEduTitle title="Education" cls="edu-container" showForm={showForm} />
      <Skill showForm={showForm}/>
      {showForm && 
        <div className="btn-container">
          <button id="submit-btn" type="submit" onClick={handleClick}>Submit</button>
        </div>
      }
    </form>
  )
}
