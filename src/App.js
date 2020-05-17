import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Firebase from './firebase'
import 'firebase/database';

function App() {
  const [info, setInfo] = useState([]);
  const db = Firebase.database().ref();

  useEffect( () => {
    const handleData = snap => {
      if (snap.val()) setInfo(snap.val());
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
