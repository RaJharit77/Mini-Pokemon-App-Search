import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import PokemonItem from './components/PokemonItem';
import PokemonSearch from './pages/PokemonSearch';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center p-12">
        <Routes>
          <Route path="/" element={<PokemonSearch />} />
          <Route path="/pokemon/:id" element={<PokemonItem />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
