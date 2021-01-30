import { useState } from 'react';
import './App.css';
import randomText from './randomText'

function App() {
  const [textEntered, setTextEntered] = useState('')

  const handleChange = (event) => {
    console.log(event.target.value)
    setTextEntered(event.target.value)
  }

  return (
    <div className="App">
      <div className='container'>
        <p className="sub-header">TYPING SPEED TEST</p>
        <h1 className="title">Test your typing skills</h1>

        {/* <label>Enter value : </label>
        <textarea
          value={modelText}
          onChange={handleChange}
          rows={5}
          cols={5} */}
        {/* /> */}
        <div className="wrapper-input">
          <input
            className="input-text"
            value={textEntered}
            onChange={handleChange}
          />
        </div>
      </div>
    </div >
  );
}

export default App;
