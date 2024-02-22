
import Header from './components/Header';
import Peliculas from './Pages/Pelis/Peliculas.jsx';
import Principal from './Pages/Pelis/Principal.jsx';
import Footer from './components/Footer.jsx';
import { Routes,Router,Route, Link } from 'react-router-dom';
import './App.css';
import Detalles from './components/Detalles';





const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/Peliculas" element={<Peliculas />} />
        <Route path="/pelicula/:id" element={<Detalles />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
