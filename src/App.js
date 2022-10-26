import './App.css';
import { useState } from 'react';

export function replaceCamelCaseWithSpaces(name) {
  return name.split(/(?=[A-Z])/g).join(' ')
}

function App() {
  const [color, setColor] = useState('red')
  const [disable, setDisable] = useState(false)

  return (
    <div className="App">
      <button 
        style={{backgroundColor: disable ? 'gray' : color}} 
        onClick={() => setColor(color === 'blue' ? 'red' : 'blue')}
        disabled={disable}
      >
        Change to blue
      </button>
      <input type='checkbox' id='disable-button' onClick={() => setDisable(!disable)}/>
      <label htmlFor='disable-button'>Disable button</label>
    </div>
  );
}

export default App;
