import React from 'react'
import './App.css'

function HeaderBar() {
  return (
    <header className="header">
      <div className="header-left">
        <h2>DEV@Deakin</h2>
      </div>

      <div className="header-center">
        <input 
          type="text" 
          placeholder="Search..." 
          className="search-bar"
        />
        <button className="search-btn">Search</button>
      </div>

      <nav className="header-right">
        <a href="#featured-articles">Articles</a>
        <a href="#featured-tutorials">Tutorials</a>
        <a href="#newsletter">Newsletter</a>
      </nav>
    </header>
  )
}
export default HeaderBar;