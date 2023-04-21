import React from "react";

export default function Education() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className="edu-form">
      <label>University Name</label>
      <input placeholder="University Name" />
      <label>City</label>
      <input placeholder="City" />
      <label>To</label>
      <input placeholder="YYYY" min="1900" max={year} />
      <label>From</label>
      <input placeholder="YYYY" min="1900" max={year} />
      <label>Degree</label>
      <input placeholder="Degree"  />
    </div>
  )
}