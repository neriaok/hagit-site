import React from 'react'
import { WHATSAPP_ORDER_URL } from '../constants'

export default function Footer(){
  return (
    <footer className='footer'>
      <p>© {new Date().getFullYear()} Hagit | כל הזכויות שמורות</p>
      <a href={WHATSAPP_ORDER_URL} target='_blank' rel='noopener noreferrer'>להזמנות ופרטים בוואטסאפ</a>
    </footer>
  )
}
