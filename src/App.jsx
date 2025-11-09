import React, { useEffect, useState } from 'react'
import Splash from './components/Splash'
import Header from './components/Header'
import Home from './components/Home'
import Collection from './components/Collection'
import Board from './components/Board'
import About from './components/About'
import Footer from './components/Footer'

export default function App(){
  const [loading, setLoading] = useState(true)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    // show splash for 2.2s, start fade at 2.2s, hide at 2.6s
    const startFade = setTimeout(() => setFade(true), 2200)
    const end = setTimeout(() => setLoading(false), 2600)
    return () => { clearTimeout(startFade); clearTimeout(end) }
  }, [])

  return (
    <>
      {loading ? (
        <Splash fade={fade} />
      ) : (
        <div className='page'>
          <Header />
          <main>
            <Home />
            <Collection />
            <Board />
            <About />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
