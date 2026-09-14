import React from 'react'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h3 className="about-title">אודות</h3>
          <p>
            היי, אני <strong>חגית עוקבי</strong> – מעצבת מטפחות בעבודת יד, עם אהבה גדולה ליופי, לנשיות ולנוחות.
            כל מטפחת שאני יוצרת נולדת מתוך מחשבה על אישה אמיתית – עם סגנון, עם לב, ועם נשמה
          </p>
          <p>
            העסק שלי
             נולד מתוך רצון לשלב בין אלגנטיות יומיומית לבין נוחות ובדים איכותיים
          <p>  כאן תמצאי עיצובים שמותאמים לכל רגע – מהיום־יום הפשוט ועד לאירועים המיוחדים שלך</p>
          </p>
          <p>כל מטפחת היא חלק קטן מסיפור – שלך ושלי</p>
        </div>
        <div className="about-image">
          <img src="/logo.jpg" alt="חגית יוצרת מטפחות" />
        </div>
      </div>
    </section>
  )
}
