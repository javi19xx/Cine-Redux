import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/Detalles.css';

const Detalles = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [numEntradas, setNumEntradas] = useState(1); // Nuevo estado para almacenar el número de entradas
  const API_KEY = 'ea959dc0eb55fb309c72805604d83f59';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );

        if (!movieResponse.ok) {
          throw new Error('Error en la solicitud');
        }

        const movieData = await movieResponse.json();

        const castResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
        );

        if (!castResponse.ok) {
          throw new Error('Error en la solicitud de reparto');
        }

        const castData = await castResponse.json();

        setMovieDetails(movieData);
        setCast(castData.cast.slice(0, 5));
      } catch (error) {
        console.error('Error al obtener detalles de la película:', error);
      }
    };

    fetchMovieDetails();
  }, [id, API_KEY]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCompraClick = () => {
    console.log('Fecha seleccionada:', selectedDate);
    console.log('Número de entradas:', numEntradas); // Mostrar el número de entradas en consola
  };

  const handleNumEntradasChange = (event) => {
    setNumEntradas(parseInt(event.target.value)); // Convertir el valor a entero y establecer el estado
  };

  return (
    <div>
      {movieDetails && (
        <>
          <br /><br /><br /><br /><br />
          <br />
          <div className="movie-details-container">
            <div className="poster-container" style={{ width: '100%', height: 'auto' }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={`Poster de ${movieDetails.title}`}
                className='poster'
              />
            </div>
            <div className="movie-details">
              <h2 className='p1'><b> {movieDetails.title}</b></h2>
              <p className='p1'>Sinopsis: {movieDetails.overview}</p>
              <br />
              <p className='p1'><b>Género:</b> {movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
              <h3 className='p1'><b>Actores:</b> </h3>
              <>
                {cast.map((actor) => (
                  <li className='p1' key={actor.id}>{actor.name}</li>
                ))}
              </>
            </div>
          </div>
        </>
      )}
      <br /><br />
      <button className='boton'>Añadir a Favoritos</button>
      <br /><br />
      <div className='text-center'>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Seleccione una fecha"
        />
      </div>
      <br />
    <div className="text-center">
      <div className="mb-4">
        <label htmlFor="numEntradas">Número de Entradas:</label>
        <input
          type="number"
          id="numEntradas"
          name="numEntradas"
          value={numEntradas}
          onChange={handleNumEntradasChange}
          min="1"
          max="10"
          className="border-2 border-gray-300 rounded-md px-4 py-2 mr-2"
        />
      </div>
      <br />
      <button className='boton'>
        Realizar Compra
      </button>
      <br />
      <br />
      <br />
    </div>
  </div>
  );
};

export default Detalles;
