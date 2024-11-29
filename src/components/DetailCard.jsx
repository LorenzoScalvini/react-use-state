import React from 'react';
import style from './DetailCard.module.css';

function DetailCard({ language }) {
  return (
    <div className={style.card}>
      {language ? (
        <>
          <h2 className={style.title}>{language.title}</h2>
          <p className={style.description}>{language.description}</p>
        </>
      ) : (
        <p className={style.emptyMessage}>Seleziona un lignuaggio</p>
      )}
    </div>
  );
}

export default DetailCard;
