import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './pages/HomeScreen';
import News from './pages/News';
import NFTPage from './pages/NFTPage';
import Footer from './components/Footer';
import Cryptocurrency from './pages/Cryptocurrency';
import './scss/styles.scss';
import SearchScreen from './pages/SearchScreen';

const App: React.FC =()=> {

  localStorage.setItem('busqueda','no');

  return (
    <div className="App">
      {localStorage.getItem('busqueda') === 'no' 
        ? <></> 
        : <Header />
      }
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/nft" element={<NFTPage />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/cryptocurrency" element={<Cryptocurrency />}></Route>
        <Route path="/search/:id" element={<SearchScreen />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
