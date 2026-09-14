import React from 'react'
import { buildWhatsappOrderUrl } from '../constants'
import { useLanguage } from '../i18n/LanguageContext'

export default function Header() {
  const { T, lang, toggleLang } = useLanguage()

  return (
    <header className='header'>
      <div className='container header__inner'>
        <div className='logo'>
            <img src="/logo.jpg" alt="Hagit Logo" className="logo__image" />
        </div>
        <div className='header__actions'>
          <nav className='nav'>
            <a href='#home'>{T.nav.home}</a>
            <a href='#collection'>{T.nav.collection}</a>
            <a href='#board'>{T.nav.board}</a>
            <a href='#about'>{T.nav.about}</a>
          </nav>
          <button
            type='button'
            className='lang-toggle'
            onClick={toggleLang}
            aria-label={lang === 'he' ? 'Switch to English' : 'עבור לעברית'}
          >
            {T.langToggle}
          </button>
          <a className='cta' href={buildWhatsappOrderUrl(T.whatsappMessage)} target='_blank' rel='noopener noreferrer'>{T.cta}</a>
        </div>
      </div>
    </header>
  )
}
