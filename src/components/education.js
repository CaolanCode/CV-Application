import React, { useState } from "react"

function Education(props) {
  const { onSave } = props
  const [degree, setDegree] = useState("")
  const [fieldOfStudy, setFieldOfStudy] = useState("")
  const [university, setUniversity] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const education = {
      degree,
      fieldOfStudy,
      university,
      startDate,
      endDate,
    }
    onSave(education)
    setDegree("")
    setFieldOfStudy("")
    setUniversity("")
    setStartDate("")
    setEndDate("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="degree">Degree:</label>
      <input
        type="text"
        id="degree"
        value={degree}
        onChange={(event) => setDegree(event.target.value)}
        required
      />

      <label htmlFor="fieldOfStudy">Field of Study:</label>
      <input
        type="text"
        id="fieldOfStudy"
        value={fieldOfStudy}
        onChange={(event) => setFieldOfStudy(event.target.value)}
        required
      />

      <label htmlFor="university">University:</label>
      <input
        type="text"
        id="university"
        value={university}
        onChange={(event) => setUniversity(event.target.value)}
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

      <button type="submit">Save</button>
    </form>
  )
}

export default Education
