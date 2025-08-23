import { useState } from 'react'
import HeaderBar from './HeaderBar'
import Hero from './Hero'
import HeroImage from './Heroimg'
import SectionTitle from './SectionTitle'
import ArticleCards from './ArticleCards'
import TutorialCards from './TutorialCards'
import Newsletter from './Newsletter'
import Footer from './Footer'
import { featuredArticles, featuredTutorials } from './data'


function App() {
  return (
    <>
      <HeaderBar />
      <Hero />
      <HeroImage />

      <main className="container">
        <section className="section" id="featured-articles">
          <SectionTitle title="Featured Articles" sub="Curated reads from our community" />
          <ArticleCards items={featuredArticles} />
        </section>

        <section className="section" id="featured-tutorials">
          <SectionTitle title="Featured Tutorials" sub="Learn by doing — short guides" />
          <TutorialCards items={featuredTutorials} />
        </section>

        <section className="section" id="newsletter">
          <SectionTitle title="Stay in the loop" sub="Get the latest posts in your inbox" />
          <Newsletter />
        </section>
      </main>

      <Footer />
    </>
  )
}
export default App;