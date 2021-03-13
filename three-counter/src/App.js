import React, {useState} from "react";
import "./App.css"

function App() {
  const [count, setCount] = useState(0);
  return(
    <div className="App">
    <h1>A simple app using state/hooks</h1>
    <h2>The curent value of count is {count}</h2>
    <button onClick={() => (setCount(0))}>Reset the counter</button>
    <button onClick={() => count > 10 ? "" : setCount(count + 1)}>Increase the counter</button>
    <button onClick={() => count < -10 ? "" : setCount(count -1)}>Decrease the counter</button>
    </div>
  )

}

export default App;