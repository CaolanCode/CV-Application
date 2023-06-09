import React, {useState} from "react";

export default function Skill() {
  const [skills, setSkills] = useState([])
  const [input, setInput] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    const skill = document.getElementById('skill').value
    setSkills([...skills, skill])
    setInput('')
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="skill-section">
      <div className="add-section-title">Skills</div>
      <input placeholder="Skill" id="skill" value={input} onChange={handleInput} />
      <button className="add-btn" onClick={handleClick}>+</button>
    </div>
  )
}