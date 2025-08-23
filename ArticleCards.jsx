import React from 'react'

function ArticleCards({ items = [] }) {
  return (
    <div className="grid articles-grid">
      {items.map(item => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="card-body">
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
          </div>
          <div className="card-footer">
            {item.author} · {new Date(item.date).toLocaleDateString()} · {item.tag}
          </div>
        </div>
      ))}
    </div>
  )
}
export default ArticleCards;
