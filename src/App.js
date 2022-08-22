import './App.css';
import {useState} from 'react'
import Title from './components/Title'


function App() {
  const [number, setNumber] = useState(0)

  function clickHandler(value){
    if (value === true){
      setNumber((prevState) => {
        return prevState + 1
      })
    } else if (value === false){
      setNumber((prevState) => {
        return prevState - 1
      })
    }
  }
  return (

    <div className="App">
      <Title/>
      <div>{number}</div>
      <button onClick={() => clickHandler(true)}>+</button>
      <button onClick={() => clickHandler(false)}>-</button>
    </div>
  );
}

export default App;
