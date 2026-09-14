import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Home(){
  const { T } = useLanguage()

  return (
    <section id='home' className='hero container'>
      <div className='hero__text'>
        <h2>{T.hero.title}</h2>
        <p>{T.hero.subtitle}</p>
        <a className='btn' href='#collection'>{T.hero.cta}</a>
      </div>
      <div className='hero__img'>
        <img src='/placeholder-hero.jpg' alt={T.hero.imgAlt} />
      </div>
    </section>
  )
}
