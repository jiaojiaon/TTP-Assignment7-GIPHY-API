import React from "react"
import './App.css';
import GifCard from './components/GifCard.js';
import SearchField from './components/SearchField.js';
import {useState} from 'react';
function App() {
  const [gifs, setGifs] = useState([])
  return (
    <div className="App">
      <SearchField setGifs={setGifs} />
      
      {Array.isArray(gifs) && gifs.map((gif) => {

        return <GifCard key= {gif.id} src = {gif.images.original.url} />
      })}
    </div>
  );
}

export default App;
