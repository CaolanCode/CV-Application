import React from "react";

export default function Education() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className="edu-form">
      <label>Course Name:</label>
      <input  />
      <label>University Name:</label>
      <input  />
      <label>To</label>
      <input placeholder="YYYY" min="1900" max={year} />
      <label>From</label>
      <input placeholder="YYYY or Present" min="1900" max={year} />
    </div>
  )
}