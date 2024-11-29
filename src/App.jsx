import { useState } from 'react'
import './App.css'
import languages from './data/languages';

function App() {

  return (
    <div>
      <h1>React use state</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        {languages.map((language) => (
          <button key={language.id}>{language.title}</button>
        ))}
      </div>
    </div>
  )
}

export default App
