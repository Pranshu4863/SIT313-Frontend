import React, { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [ok, setOk] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setOk(true)
    setTimeout(() => setOk(false), 3000)
    setEmail('')
  }

  return (
    <div className="newsletter">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email to subscribe"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {ok && <div className="message">Subscribed! (demo)</div>}
    </div>
  )
}
export default Newsletter;