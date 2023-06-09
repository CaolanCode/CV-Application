import React, {forwardRef, useImperativeHandle, useState} from "react";

const Personal = forwardRef((props, ref) => {
  const [firstname, setFirstname] = useState('')
  const [surname, setSurname] = useState('')
  const [role, setRole] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [showForm, setShowForm] = useState(true)

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value)
  }
  const handleSurnameChange = (e) => {
    setSurname(e.target.value)
  }
  const handleRoleChange = (e) => {
    setRole(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleLinkedinChange = (e) => {
    setLinkedin(e.target.value)
  }

  const displayPersonal = () => {
    setShowForm(false)
  }

  useImperativeHandle(ref, () => ({
    displayPersonal: displayPersonal
  }))

  return (
    <div>
      {
        showForm ? (
          <div className="personal-form section">
            <label className="input-label">First Name</label>
            <input placeholder="First Name" value={firstname} onChange={handleFirstnameChange}/>
            <label className="input-label">Surname</label>
            <input placeholder="Surname" value={surname} onChange={handleSurnameChange}/>
            <label className="input-label">Current Role</label>
            <input placeholder="Current Role" value={role} onChange={handleRoleChange}/>
            <label className="input-label">Phone</label>
            <input placeholder="Phone" type="tel" value={phone} onChange={handlePhoneChange}/>
            <label className="input-label">Email</label>
            <input placeholder="Email" type="email" value={email} onChange={handleEmailChange}/>
            <label className="input-label">LinkedIn</label>
            <input placeholder="LinkedIn" value={linkedin} onChange={handleLinkedinChange}/>
          </div>
        ) : (
          <div>
            <div>{firstname} {surname}</div>
            <div>{role}</div>
            <div>{phone}</div>
            <div>{email}</div>
            <div>{linkedin}</div>
          </div>
        )
      }
    </div>

  )

})
export default Personal