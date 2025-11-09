import React from 'react'

export default function Home(){
  return (
    <section id='home' className='hero container'>
      <div className='hero__text'>
        <h2>מטפחות בעיצוב נקי ונשי</h2>
        <p>נוחות לכל יום ולכל סגנון – באהבה ובעיצוב אישי</p>
        <a className='btn' href='#collection'>גלי את הקולקציה</a>
      </div>
      <div className='hero__img'>
        <img src='/placeholder-hero.jpg' alt='מטפחת' />
      </div>
    </section>
  )
}
