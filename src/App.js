import logo from './logo.svg';
import './App.css';
import AppGifs from './components/AppGifs';
import GifCard from './components/GifCard';
import SearchField from './components/SearchField'

function App() {
  return (
    <div className="App">
      <GifCard />
      <SearchField />
      <AppGifs />
    </div>
  );
}

export default App;
