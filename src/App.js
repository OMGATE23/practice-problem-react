import './App.css';
import {useState} from 'react'


function App() {
  const [number, setNumber] = useState(0)

  function clickHandler(value){
    if (value === true){
      setNumber(number + 1)
    } else if (value === false){
      setNumber(number - 1)
    }
  }
  return (
    <div className="App">
      <div>{number}</div>
      <button onClick={() => clickHandler(true)}>+</button>
      <button onClick={() => {clickHandler(false)}}>-</button>
    </div>
  );
}

export default App;
