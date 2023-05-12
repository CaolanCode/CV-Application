import React from "react";

export default function WorkExp() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className="work-form">
      <label className="input-label">Company Name</label>
      <input placeholder="Company Name" />
      <label className="input-label">City</label>
      <input placeholder="City" />
      <label className="input-label">To</label>
      <input placeholder="YYYY" min="1900" max={year} />
      <label className="input-label">From</label>
      <input placeholder="YYYY" min="1900" max={year} />
      <label className="input-label">Role</label>
      <input placeholder="Role"  />
    </div>
  )
}