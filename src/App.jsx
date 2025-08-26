<<<<<<< HEAD
import MyButton from "./MyButton";
import Hello from "./Hello";
import Random from"./Random";


/*import the default exported component MyButton from MyButton.jsx file*/

//Functional Component
function App() {
  return <div>
    <h1>
    Hello World!
    </h1>
    <MyButton></MyButton>
    <Hello></Hello>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
</div>
}

export default App; 

/* it is a React (actually JavaScript ES6) feature used for exporting a component (or any value) from a file so you can import it somewhere else.*/
/*ES6: ES6 means ECMAScript 6, also called ECMAScript 2015.
It’s just a new version of JavaScript that added many cool and modern features to make coding easier.*/
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
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
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 6f0e698 (Initial commit)
