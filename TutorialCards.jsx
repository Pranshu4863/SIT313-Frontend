import React from 'react'

function TutorialCards({ items = [] }) {
  return (
    <div className="grid tutorials-grid">
      {items.map(item => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="card-body">
            <h3>{item.title}</h3>
            <p>Level: {item.level}</p>
          </div>
          <div className="card-footer">{item.length}</div>
        </div>
      ))}
    </div>
  )
}
export default TutorialCards;