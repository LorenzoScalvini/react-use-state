import React, { useState } from "react";
import languages from "./data/languages";
import Button from "./components/Button";
import DetailCard from "./components/DetailCard";
import style from "./App.module.css";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleButtonClick = (language) => setSelectedLanguage(language);

  return (
    <div className={style.container}>
      <h1 className={style.title}>React use state</h1>
      <div className={style.buttonContainer}>
        {languages.map((language) => (
          <Button
            key={language.id}
            language={language}
            isSelected={selectedLanguage?.id === language.id}
            onClick={handleButtonClick}
          />
        ))}
      </div>
      <DetailCard language={selectedLanguage} />
    </div>
  );
}

export default App;
