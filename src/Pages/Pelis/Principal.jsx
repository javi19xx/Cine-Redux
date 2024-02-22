import MovieSlider from '../../components/MovieSlider';
import React, { useEffect, useState } from 'react';
import '../../styles/Principal.css';


const API_KEY = 'ea959dc0eb55fb309c72805604d83f59';
const Principal = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es&page=1&results=5`
          );
  
          if (!response.ok) {
            throw new Error('Error al obtener las películas');
          }
  
          const data = await response.json();
          setMovies(data.results);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };

      fetchMovies();
    }, []);


  return (
    <>
 <br /><br /><br /><br /><br />
<div className="flex-grow" style={{ paddingTop: '60px' }}>
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <MovieSlider movies={movies} />
        )}
      </div>
      <div className="bg-gray-200 p-16 ">
  <h2 className="text-center text-5xl font-bold mb-4" >¡Descubre nuestras ofertas!</h2>
  <p className="text-lg text-center pr-32 pl-32 ">
    En nuestro cine, queremos que <b> disfrutes al máximo</b> de tu experiencia cinematográfica. <b>¡No te pierdas estas increíbles ofertas especiales!</b>
  </p>

  <hr className="my-8" />
  <div className='container'>
  <div className="component left">
    <h3 className="text-center text-4xl font-bold mb-4" >Oferta 2x1 en Boletos</h3>
    <p className="text-lg text-center pr-10 pl-10" >Compra un boleto y recibe el <b> segundo de menor valor ¡totalmente gratis!</b> Ideal para <b> disfrutar del cine</b> con amigos o familiares.</p>
    <br />
    <img className='w-66 h-50' src="../src/images/tickets.png" alt=""></img>
  </div>

<hr className='hr1' />
<div className="component middle">
    <h3 className="text-center text-4xl font-bold mb-4" >Combo Especial</h3>
    <p className="text-lg text-center pr-10 pl-10 " >Aprovecha nuestro <b> combo especial</b> que incluye <b> una entrada, palomitas de maíz grandes y dos bebidas</b> a un <b> precio reducido.</b> ¡La combinación perfecta para tu película!</p>
    <br />
    <img className='w-96 h-60' src="../src/images/palomitas.png" alt=""></img>
  </div>
  
  <hr />
  <div className="component right">
    <h3 className="text-center text-4xl font-bold mb-4" >Días de Descuento</h3>
    <p className="text-lg text-center pr-10 pl-10 " >¡Disfruta de <b> descuentos exclusivos</b> en boletos y snacks los días <b> martes y jueves!</b> No pierdas la oportunidad de <b> ahorrar</b> mientras <b> disfrutas</b> de las <b> mejores películas.</b></p>
    <br />
    <img className='ml-10 w-72 h-60' src="../src/images/descuento.webp" alt=""></img>
  </div>
</div>
</div>
      
    </>
  )
}

export default Principal