import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { T } = useLanguage()

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h3 className="about-title">{T.about.title}</h3>
          <p>
            {T.about.p1Before}<strong>{T.about.name}</strong>{T.about.p1After}
          </p>
          <p>{T.about.p2}</p>
          <p>{T.about.p3}</p>
          <p>{T.about.p4}</p>
        </div>
        <div className="about-image">
          <img src="/logo.jpg" alt={T.about.imgAlt} loading="lazy" />
        </div>
      </div>
    </section>
  )
}
