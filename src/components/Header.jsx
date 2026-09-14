import React from 'react'
import { WHATSAPP_ORDER_URL } from '../constants'

export default function Header() {
  return (
    <header className='header'>
      <div className='container header__inner'>
        <div className='logo'>
            <img src="/logo.jpg" alt="Hagit Logo" className="logo__image" />
        </div>
        <div className='header__actions'>
          <nav className='nav'>
            <a href='#home'>דף הבית</a>
            <a href='#collection'>קולקציה</a>
            <a href='#board'>לוח השראה</a>
            <a href='#about'>אודות</a>
          </nav>
          <a className='cta' href={WHATSAPP_ORDER_URL} target='_blank' rel='noopener noreferrer'>להזמנות</a>
        </div>
      </div>
    </header>
  )
}
