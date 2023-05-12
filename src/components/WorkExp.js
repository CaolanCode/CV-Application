import React from "react";

export default function WorkExp() {
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
    </div>
  )
}