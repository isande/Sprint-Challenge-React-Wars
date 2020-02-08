import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people")
      .then(response => {
        setPeople(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log("API error", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
