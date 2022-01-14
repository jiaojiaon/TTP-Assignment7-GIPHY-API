import logo from './logo.svg';
import './App.css';
import GifCard from './GifCard.js';
import SearchField from './components/SearchField.js';
import {useState} from 'react';
function App() {
  const [gifs, setGifs] = useState()
  return (
    <div className="App">
      <SearchField setGifs={setGifs} />
      {gifs.map((gif, i) => {
        return <GifCard />
      })}
    </div>
  );
}

export default App;
