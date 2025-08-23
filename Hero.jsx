import React from 'react'

function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to DEV@Deakin</h1>
      <p>A hub for articles, tutorials, and resources on modern web development.</p>
      <button onClick={() => document.getElementById("featured-articles").scrollIntoView()}>
        Explore Featured Articles
      </button>
    </section>
  )
}
export default Hero;
