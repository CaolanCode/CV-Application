import React from "react";

export default function Personal() {
  return (
    <div className="personal-form">
      <label>First Name</label>
      <input placeholder="First Name"/>
      <label>Surname</label>
      <input placeholder="Surname"/>
      <label>Current Role</label>
      <input placeholder="Current Role"/>
      <label>Phone</label>
      <input placeholder="Phone" type="tel"/>
      <label>Email</label>
      <input placeholder="Email" type="email"/>
      <label>LinkedIn</label>
      <input placeholder="LinkedIn"/>
    </div>
  )
}
