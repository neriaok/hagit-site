// import React from 'react'

// export default function Board(){
//   const types = ['קלאסיות','יומיומיות','מעוצבות']
//   return (
//     <section className='container section board'>
//       <h3>לוח השראה</h3>
//       <div className='grid grid-3'>
//         {types.map((t,i)=>(
//           <div className='board-card' key={i}>
//             <img src={`/placeholder-board-${i+1}.jpg`} alt={t} />
//             <h4>{t}</h4>
//             <p>גלי מגוון מטפחות {t} בעיצוב נקי ונשי.</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

import React from "react";

export default function Board() {
  const types = ["קלאסיות", "יומיומיות", "מעוצבות"];

  return (
    <section className="container section board">
      <h3 className="board-title">לוח השראה</h3>
      <div className="board-grid">
        {types.map((t, i) => (
          <div className="board-card" key={i}>
            <div className="board-image">
              <img src={`/placeholder-board-${i + 1}.jpg`} alt={t} />
            </div>
            <div className="board-overlay" />
            <div className="board-content">
              <h4>{t}</h4>
              <p>גלי מגוון מטפחות {t} בעיצוב נקי ונשי.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
