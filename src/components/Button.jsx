import React from "react";
import style from "./Button.module.css";

function Button({ language, isSelected, onClick }) {
  const buttonClass = isSelected
    ? `${style.button} ${style.selected}`
    : style.button;

  return (
    <button className={buttonClass} onClick={() => onClick(language)}>
      {language.title}
    </button>
  );
}

export default Button;
