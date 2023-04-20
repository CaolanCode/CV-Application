import React from "react";

export default function WorkExp(props) {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className="work-form">
      <label>Company Name</label>
      <input placeholder="Company Name" />
      <label>City</label>
      <input placeholder="City" />
      <label>To</label>
      <input placeholder="YYYY" min="1900" max={year} />
      <label>From</label>
      <input placeholder="YYYY" min="1900" max={year} />
      <label>Role</label>
      <input placeholder="Role"  />
      <label>Skills</label>
      <div>
        <input placeholder="Skill" id="skill-input"/>
        <button id="add-btn">+</button>
      </div>
    </div>
  )
}