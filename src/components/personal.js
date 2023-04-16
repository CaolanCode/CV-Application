import React, { useState } from "react";

function Personal() {
  const [firstName, setFirstName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Submitted: ${firstName} ${surname}, ${email}, ${phone}`)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first-name">First Name:</label>
      <input
        type="text"
        id="first-name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        required
      />

      <label htmlFor="surname">Surname:</label>
      <input
        type="text"
        id="surname"
        value={surname}
        onChange={(event) => setSurname(event.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default Personal
