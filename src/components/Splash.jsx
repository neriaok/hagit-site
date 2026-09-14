import React from 'react'

export default function Splash({fade}) {
  return (
    <div className={'splash ' + (fade ? 'splash--fade' : '')}>
          <img src="/logo.jpg" alt="Hagit Logo" className='splash__logo' />
      <p className='splash__credit'>made by Neria Okabi</p>
    </div>
  )
}
