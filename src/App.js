import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
// add useEffect functionality
// add sidebar with saved jokes
// separate into components

function App() {
  
  const url = 'https://official-joke-api.appspot.com/random_joke'
  const [joke, setJoke] = useState({});
  const [clicked, setClicked] = useState(false);
  const [saveJoke, setSaveJoke] = useState(false);

  const getJoke = async () => {
    const response = await axios.get(url)
    const jokeSetup = response.data.setup
    const jokePunchline = response.data.punchline
    setJoke({setup: jokeSetup, punchline: jokePunchline})

  }

  const togglePunchline = () => {
    setClicked(true);
    setSaveJoke(true)
  }  

  const sendData = () => {
    try {
      axios.post('http://localhost:7000/api/jokes', {
        setup: joke.jokeSetup,
        punchline: joke.jokePunchline
      })
    } catch (err){
      console.log(err)
    }
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button id="joke-btn" onClick={() => getJoke()}>
        get a joke
      </button>
      {joke.setup && (
        <div>
          <h2>{joke.setup}</h2>
          <button onClick={togglePunchline}>answer</button>
          {clicked && <h3>{joke.punchline}</h3>}
          {clicked && saveJoke && (<div><p>If you liked this joke, save it for later!</p>
          <button onClick={() => sendData()}>save</button></div>)}
        </div>
      )}
    </div>
  );
}

export default App;
