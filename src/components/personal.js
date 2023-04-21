import React from "react";

export default function Personal() {
  return (
    <div className="personal-form">
      <div className="left-personal">
        <div>First Name</div>
        <div>Surname</div>
        <div>Current Role</div>
      </div>
      <div className="right-personal">
        <div>Phone</div>
        <div>Email</div>
        <div>LinkedIn</div>
      </div>
    </div>
  )
}

/*
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
*/