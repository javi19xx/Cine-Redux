import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Peliculas.css';
import Detalles from '../../components/Detalles';

const Peliculas = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=ea959dc0eb55fb309c72805604d83f59`
        );

        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error al buscar películas:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ea959dc0eb55fb309c72805604d83f59&query=${query}`
      );

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error al buscar películas:', error);
    }
  };

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie]);
  };

  return (
    <div className='p-5'>
      <br /><br /><br /><br /><br /><br />
      <div className='text-center'>
        <input className="p-3 text-lg border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500 transition-colors duration-300 items-center"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Escriba el título"
        />
      </div>
      
      <br />
      <br />
      <button className='boton' onClick={handleSearch}>Buscar</button>
      <br /><br />
      <ul className='grid grid-cols-4 gap-5 p-5 '>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/pelicula/${movie.id}`} className="flex flex-col items-center">
              {movie.poster_path && (
                <img className='w-64'
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`Poster de ${movie.title}`}
                />
              )}
              <h3 className='text-center text-black font-bold mt-3'>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      {selectedMovieId && <Detalles id={selectedMovieId} />}
      <br /><br /><br />
    </div>
  );
};

export default Peliculas;
