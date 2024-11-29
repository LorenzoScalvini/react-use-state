import React from 'react';

function Button({ language, isSelected, onClick }) {
  const buttonStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: isSelected ? 'gold' : 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  };

  return (
    <button style={buttonStyle} onClick={() => onClick(language)}>
      {language.title}
    </button>
  );
}

export default Button;
