import React from "react";

export default function WorkExp(props) {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className="work-form">
      <label>Company Name</label>
      <input placeholder="Company Name" />
      <label>City</label>
      <input  />
      <label>To</label>
      <input placeholder="YYYY" min="1900" max={year} />
      <label>From</label>
      <input placeholder="YYYY or Present" min="1900" max={year} />
      <label>Role</label>
      <input placeholder="Role"  />
      <label>Skills</label>
      <input placeholder="Skill"/>
      <button>+</button>
    </div>
  )
}