import React from 'react'

export default function Header() {
  return (
    <header className='header'>
      <div className='container header__inner'>
        <div className='logo'>
            <img src="/logo.jpg" alt="Hagit Logo" className="logo__image" />
        </div>
        <div className='header__actions'>
          <nav className='nav'>
            <a href='#about'>אודות</a>
            <a href='#collection'>קולקציה</a>
            <a href='#home'>דף הבית</a>
          </nav>
          <button className='cta'>להזמנות</button>
        </div>
      </div>
    </header>
  )
}
