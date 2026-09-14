import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Board() {
  const { T } = useLanguage();

  return (
    <section id="board" className="container section board">
      <h3 className="board-title">{T.board.title}</h3>
      <div className="board-grid">
        {T.board.types.map((type, i) => (
          <div className="board-card" key={i}>
            <div className="board-image">
              <img src={`/placeholder-board-${i + 1}.jpg`} alt={type} loading="lazy" />
            </div>
            <div className="board-overlay" />
            <div className="board-content">
              <h4>{type}</h4>
              <p>{T.board.description(type)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
