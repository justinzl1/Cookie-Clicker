import { useState, useEffect } from 'react'
import './App.css'



function App() {
  const [cookies, setCookies] = useState(0)
  const [cps, setCPS] = useState(0)
  const [add, setAdd] = useState(1)

  useEffect(() => {
      // Set up an interval to execute a function every second
      const interval = setInterval(() => {
          setCookies(cookies => cookies + cps); // Update state every second
      }, 1000); // 1000 milliseconds = 1 second

      // Clean up the interval on component unmount
      return () => clearInterval(interval);
  });
  return (
    <>
      <h1>Cookie Clicker</h1>
      <div>
        <p>{cookies} Cookies<br/ >per second: {cps}</p>
      </div>
      <div className="cookie">
        <button onClick={() => setCookies((cookies) => cookies + add)}>
          Click
        </button>
      </div>
      <div>
        <button onClick={() => {setAdd((add) => add + 5), setCookies((cookies) => cookies - 100)}}>
          Upgrade +1 Click <br />Cost: 100
        </button>
        <button onClick={() => {setCPS((cps) => cps + 0.1), setCookies((cookies) => cookies - 10)}}>
          Upgrade +0.1 CPS <br />Cost: 10
        </button>
      </div>
    </>
  )
}

export default App
