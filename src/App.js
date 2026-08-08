import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function increase(){
    setCount(count + 1);
  }
  function decrease(){
    setCount(count - 1);
  }
  function reset(){
    setCount(0);
  }
  return (
    <div className='bg-container'>
      <h1>Counter App</h1>
      <div className='counter-container d-flex flex-row'>
        <h1 className='heading'>Count</h1>
        <h1>{count}</h1>
        <div className='button-container d-flex flex-row'>
          <button onClick={decrease}>Decrease</button>
          <button style={ { color: "#959695", backgroundColor: "#e1e3e1" } } onClick={reset}>Reset</button>
          <button style={ { color: "white", backgroundColor: "black" } } onClick={increase}>Increase</button>
        </div>
        <p>Use the buttons to change the counter.</p>
      </div>
    </div>
  );
}

export default App;

