import React, { useEffect, useState } from "react";

export default function Education({onSave, index}) {
  const date = new Date()
  const year = date.getFullYear()

  const [uni, setUni] = useState("")
  const [city, setCity] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [degree, setDegree] = useState("")

  useEffect(() => {
    onSave(index, {
      uni,
      city,
      startDate,
      endDate,
      degree
    })
  }, [uni, city, startDate, endDate, degree, onSave, index])

  const handleUniChange = (e) => {
    setUni(e.target.value)
  }
  const handleCityChange = (e) => {
    setCity(e.target.value)
  }
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value)
  }
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value)
  }
  const handleDegreeChange = (e) => {
    setDegree(e.target.value)
  }

  return (
    <div className="edu-form">
      <label className="input-label">University Name</label>
      <input placeholder="University Name" onChange={handleUniChange} />
      <label className="input-label">City</label>
      <input placeholder="City"  onChange={handleCityChange}/>
      <label className="input-label">To</label>
      <input placeholder="YYYY" min="1900" max={year} type="number" onChange={handleStartDateChange}/>
      <label className="input-label">From</label>
      <input placeholder="YYYY" min="1900" max={year}  type="number" onChange={handleEndDateChange}/>
      <label className="input-label">Degree</label>
      <input placeholder="Degree" onChange={handleDegreeChange}/>
    </div>
  )
}