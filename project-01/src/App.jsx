import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/iron/Header.jsx'
import CoreConcepts from './component/gold/coreConcepts.jsx'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts 
            title="Components" 
            description="The Core UI building block."/>
            <CoreConcepts />
            <CoreConcepts />
            <CoreConcepts />
          </ul>
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
