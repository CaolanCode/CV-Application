import React from "react";

export default function Education() {
  const date = new Date()
  const year = date.getFullYear()


  return (
    <div className="edu-form">
      <label className="input-label">University Name</label>
      <input placeholder="University Name" />
      <label className="input-label">City</label>
      <input placeholder="City" />
      <label className="input-label">To</label>
      <input placeholder="YYYY" min="1900" max={year} type="number"/>
      <label className="input-label">From</label>
      <input placeholder="YYYY" min="1900" max={year}  type="number" />
      <label className="input-label">Degree</label>
      <input placeholder="Degree"  />
    </div>
  )
}