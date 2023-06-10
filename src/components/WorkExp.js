import React, { useEffect, useState } from "react";

export default function WorkExp({onSave, index}) {
  const date = new Date()
  const year = date.getFullYear()

  const [company, setCompany] = useState("")
  const [city, setCity] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [role, setRole] = useState("")

  useEffect(() => {
    onSave(index, {
      company,
      city,
      startDate,
      endDate,
      role
    })
  }, [company, city, startDate, endDate, role, onSave, index])

  const handleCompanyChange = (e) => {
    setCompany(e.target.value)
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
  const handleRoleChange = (e) => {
    setRole(e.target.value)
  }

  return (
    <div className="work-form">
      <label className="input-label">Company Name</label>
      <input placeholder="Company Name" onChange={handleCompanyChange} />
      <label className="input-label">City</label>
      <input placeholder="City" onChange={handleCityChange}/>
      <label className="input-label">To</label>
      <input placeholder="YYYY" min="1900" max={year} type="number" onChange={handleStartDateChange}/>
      <label className="input-label">From</label>
      <input placeholder="YYYY" min="1900" max={year} type="number" onChange={handleEndDateChange}/>
      <label className="input-label">Role</label>
      <input placeholder="Role"  onChange={handleRoleChange}/>
    </div>
  )
}