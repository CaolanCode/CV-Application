import React, { useState } from "react";

function WorkExperience(props) {
  const { onSave } = props
  const [jobTitle, setJobTitle] = useState("")
  const [employer, setEmployer] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [jobDescription, setJobDescription] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const workExperience = {
      jobTitle,
      employer,
      startDate,
      endDate,
      jobDescription,
    }
    onSave(workExperience)
    setJobTitle("")
    setEmployer("")
    setStartDate("")
    setEndDate("")
    setJobDescription("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="jobTitle">Job Title:</label>
      <input
        type="text"
        id="jobTitle"
        value={jobTitle}
        onChange={(event) => setJobTitle(event.target.value)}
        required
      />

      <label htmlFor="employer">Employer:</label>
      <input
        type="text"
        id="employer"
        value={employer}
        onChange={(event) => setEmployer(event.target.value)}
        required
      />

      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
        required
      />

      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={(event) => setEndDate(event.target.value)}
        required
      />

      <label htmlFor="jobDescription">Job Description:</label>
      <textarea
        id="jobDescription"
        value={jobDescription}
        onChange={(event) => setJobDescription(event.target.value)}
        required
      ></textarea>

      <button type="submit">Save</button>
    </form>
  )
}

export default WorkExperience