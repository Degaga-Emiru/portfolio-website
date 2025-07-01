import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="text-center p-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4">I'm Degaga, a Web Developer.</p>
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
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
