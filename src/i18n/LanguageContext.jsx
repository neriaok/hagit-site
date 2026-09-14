import React, { createContext, useContext, useEffect, useState } from 'react'
import { translations, DEFAULT_LANG } from './translations'

const STORAGE_KEY = 'hagit-lang'
const LanguageContext = createContext(null)

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'he' || stored === 'en' ? stored : DEFAULT_LANG
  } catch {
    return DEFAULT_LANG
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
    document.title = translations[lang].meta.title
    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) descriptionTag.setAttribute('content', translations[lang].meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage unavailable (private mode etc.) - language just won't persist
    }
  }, [lang])

  const toggleLang = () => setLang((current) => (current === 'he' ? 'en' : 'he'))

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, T: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
