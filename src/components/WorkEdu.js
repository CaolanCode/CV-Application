import React from "react";

export default function WorkEdu(props) {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className="work-edu-form">
      <label>{props.location}</label>
      <input placeholder={props.location} />
      <label>City</label>
      <input  />
      <label>To</label>
      <input placeholder="YYYY" min="1900" max={year} />
      <label>From</label>
      <input placeholder="YYYY or Present" min="1900" max={year} />
      <label>{props.title}</label>
      <input placeholder={props.title}  />
    </div>
  )
}