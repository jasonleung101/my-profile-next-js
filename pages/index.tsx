import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './layout/header/header'
import Hero from './sections/hero/hero'

const Home: NextPage = () => {
  return (
    <div className='bg-background-dark'>
      <Head>
        <title>{`{ "Jason's Portfolio" }`}</title>
      </Head>

      <div className="snap h-screen overflow-y-scroll snap-y snap-mandatory">
        <Header />

        {/* Hero */}
        <section id='hero' className='snap-page'>
          <Hero/>
        </section>
        {/* About */}
        <section id='about' className='snap-page'>About</section>
        {/* Exp */}
        <section id='experience' className='snap-page'>Exp</section>
        {/* Skills */}
        <section id='skills' className='snap-page'>Skills</section>
        {/* Projects */}
        <section id='projects' className='snap-page'>Projects</section>
        {/* Get in touch */}
        <section id='contact' className='snap-page'>Get in touch</section>
      </div>
    </div>

  )
}

export default Home
