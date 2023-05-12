import React from "react";

export default function Personal() {
  return (
    <div className="personal-form section">
      <label className="input-label">First Name</label>
      <input placeholder="First Name"/>
      <label className="input-label">Surname</label>
      <input placeholder="Surname"/>
      <label className="input-label">Current Role</label>
      <input placeholder="Current Role"/>
      <label className="input-label">Phone</label>
      <input placeholder="Phone" type="tel"/>
      <label className="input-label">Email</label>
      <input placeholder="Email" type="email"/>
      <label className="input-label">LinkedIn</label>
      <input placeholder="LinkedIn"/>
    </div>
  )
}
