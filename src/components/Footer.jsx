import React from 'react'
import { buildWhatsappOrderUrl } from '../constants'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer(){
  const { T } = useLanguage()

  return (
    <footer className='footer'>
      <p>{T.footer.rights(new Date().getFullYear())}</p>
      <a href={buildWhatsappOrderUrl(T.whatsappMessage)} target='_blank' rel='noopener noreferrer'>{T.footer.order}</a>
    </footer>
  )
}
