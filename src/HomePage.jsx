import React from 'react';
import Header from './components/Header';
import SearchMovies from './components/SearchMovies';
import Trending from './components/Trending';

function HomePage() {
  return (
    <div className='cnt'>
      <div className="container">
        <Header />
        <SearchMovies />
        <Trending />
      </div>
    </div>
  )
}

export default HomePage;