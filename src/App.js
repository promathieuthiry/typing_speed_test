import { useState, useEffect } from 'react';
import './App.css';
import randomText from './randomText'

function App() {
  const [textEntered, setTextEntered] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(3)
  const [start, setStart] = useState(false)
  const [numberCount, setNumberCount] = useState(0)

  useEffect(() => {
    if (start && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(previousTime => previousTime - 1)
      }, 1000)
    }
    else if (timeRemaining === 0) {
      endGame()
    }
  }, [start, timeRemaining]);

  const handleChange = ({ target }) => {
    const { value, name } = target
    setTextEntered(value)
  }

  const startCount = () => {
    if (timeRemaining > 0) {
      setStart(true)
    }
    if (timeRemaining === 0) {
      setTextEntered('')
      setTimeRemaining(5)
      setNumberCount(0)
      setStart(true)
    }
  }

  const endGame = () => {
    const wordsArr = textEntered.trim().split(" ")
    const newArr = wordsArr.filter(word => word !== "").length

    setNumberCount(newArr)
    setStart(false)
  }

  const decrement = () => {
    setTimeRemaining(previousTime => previousTime - 1)
  }

  return (
    <div className="App">
      <div className='container'>
        <p className="sub-header">TYPING SPEED TEST</p>
        <h1 className="title">Test your typing skills</h1>

        <p>Compteur : {timeRemaining}</p>
        <p>nombre de mots: {numberCount}</p>
        <div className="wrapper-input">
          <input
            className="input-text"
            name='textEntered'
            value={textEntered}
            onChange={handleChange}
            onClick={startCount}
          />
        </div>
      </div>
    </div >
  );
}

export default App;
