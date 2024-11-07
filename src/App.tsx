import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCPS] = useState(0);
  const [add, setAdd] = useState(1);
  const [cost1, setCost1] = useState(10);
  const [cost2, setCost2] = useState(100);

  useEffect(() => {
    // Set up an interval to execute a function every second
    const interval = setInterval(() => {
      setCookies((cookies) => cookies + cps); // Update state every second
    }, 1000); // 1000 milliseconds = 1 second

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  });
  return (
    <>
      <h1>Cookie Clicker</h1>
      <div>
        <p>
          {Number(cookies.toFixed(2))} Cookies
          <br />
          per second: {Number(cps.toFixed(2))}
        </p>
      </div>
      <div className="cookie">
        <button onClick={() => setCookies((cookies) => cookies + add)}>
          Click
        </button>
      </div>
      <div className="button">
        <button
          onClick={() => {
            if (cookies > cost2) {
              setAdd((add) => add + 1);
              setCookies((cookies) => cookies - cost2);
              setCost2((cost2) => cost2 * 1.2);
            }
          }}
        >
          Upgrade +1 Click <br />
          Cost: {Number(cost2.toFixed(0))}
        </button>
        <button
          onClick={() => {
            if (cookies > cost1) {
              setCPS((cps) => cps + 0.1);
              setCookies((cookies) => cookies - cost1);
              setCost1((cost1) => cost1 * 1.2);
            }
          }}
        >
          Upgrade +0.1 CPS <br />
          Cost: {Number(cost1.toFixed(0))}
        </button>
      </div>
    </>
  );
}

export default App;
