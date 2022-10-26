import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('red')

  return (
    <div className="App">
      <button 
        style={{backgroundColor: color}} 
        onClick={() => setColor(color === 'blue' ? 'red' : 'blue')}
      >
        Change to blue
      </button>
    </div>
  );
}

export default App;
