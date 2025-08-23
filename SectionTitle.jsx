import React from 'react'

function SectionTitle({ title, sub }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  )
}
export default SectionTitle;