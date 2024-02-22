  import React from 'react';
  import { Routes, Route, Link } from 'react-router-dom';
  import '../styles/Header.css';

  const Header = () => {
    return (
        <header className="cinema-header w-full flex justify-between">
          <div className="logo-container">
            <img
              src="../../public/logo.png "
              alt="Logo de mi cine"
              className="logo h-auto"
            />
          </div>
          <div>
            <nav className="nav-links ml-96">
              <Link to="/" className='a1'>Inicio</Link>
              <Link to="/Peliculas" className='a1'>Películas</Link>
              <Link to="/Favoritos" className='a1'>Favoritas</Link>
            </nav>
          </div>
        </header>
    );
  };

  export default Header;
