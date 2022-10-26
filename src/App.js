import './App.css';
import { useState } from 'react';

export function replaceCamelCaseWithSpaces(name) {
  return name.split(/(?=[A-Z])/g).join(' ')
}

function App() {
  const [color, setColor] = useState('midiumVioletRed')
  const [disable, setDisable] = useState(false)

  return (
    <div className="App">
      <button 
        style={{backgroundColor: disable ? 'gray' : color}} 
        onClick={() => setColor(color === 'midnightBlue' ? 'midiumVioletRed' : 'midnightBlue')}
        disabled={disable}
      >
        Change to MidnightBlue
      </button>
      <input type='checkbox' id='disable-button' onClick={() => setDisable(!disable)}/>
      <label htmlFor='disable-button'>Disable button</label>
    </div>
  );
}

export default App;
