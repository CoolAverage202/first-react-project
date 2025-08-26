import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/iron/Header.jsx'
import CoreConcepts from './components/gold/coreConcepts.jsx'
import { CORE_CONCEPTS } from './components/gold/data.js'
import TabButton from './components/iron/TabButton.jsx'
 
function App() {
  const [count, setCount] = useState(0)
  
  function handleSelect() {
    console.log('Hello World - Select');
  }

  return (
    <>
      <div>
        <Header />
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        {/* // learning about how to react to events in REACT */}
        <section id="examples">
          <h2>Examples</h2>
          {/* giving dynmaic content via the props */}
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>state</TabButton>
          </menu>
          dynamic content 
        </section>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        The Tuolumne Band of ME-Wuk Indians 
      
      </p>
    </>
  )
}

export default App
