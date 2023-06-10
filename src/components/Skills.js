import React, {forwardRef, useImperativeHandle, useState} from "react";

const Skill = forwardRef((props, ref) => {
  const [skills, setSkills] = useState([])
  const [input, setInput] = useState('')
  const [showForm, setShowForm] = useState(true)

  const handleClick = (e) => {
    e.preventDefault()
    const skill = document.getElementById('skill').value
    setSkills([...skills, skill])
    setInput('')
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const displaySkills = () => {
    setShowForm(false)
  }

  useImperativeHandle(ref, () => ({
    displaySkills: displaySkills
  }))

  return (
    <div>
      {showForm ? (
          <div className="skill-section">
            <div className="add-section-title">Skills</div>
            <input placeholder="Skill" id="skill" value={input} onChange={handleInput} />
            <button className="add-btn" onClick={handleClick}>+</button>
          </div>
        ) : (
          <div>Skills: {skills.join(", ")}</div>
        )
      }
    </div>
  )
}) 
export default Skill