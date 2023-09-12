import React from 'react';
import CartWidget from './CartWidget';
import NavbarItem from './NavbarItem';
import { Link } from 'react-router-dom';

//import '../CSS/NavBar.css';

export default function NavBar() {
  return (
    <nav className="header-nav">
      <Link to="/">
          <img src="./src/assets/SR_Logo_icono.png" alt="Logo" className='navbar-logo'></img>
      </Link>
      <div className='container'>
        <ul className="header-ul">
          <Link className="header-li" to="/">Home </Link> 
          <Link className="header-li" to="/categoria/E-BOOKS">E-Books</Link>
          <Link className="header-li" to="/categoria/PLANTILLAS EDITABLES">Plantillas Editables </Link>  
          <Link className="header-li" to="/categoria/SERVICIOS">Servicios </Link>  
          <Link className="header-li" to="/contacto">Contacto </Link>       
        </ul>
      </div>
      <CartWidget />
    </nav>
  )
}

////////////////////////////////
/*
const NavBar = () => {
  return (
    <header>
     
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href='/'>
            <img src="../src/assets/SR_Logo_icono.png" alt="Logo" className='navbar-logo'></img>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="/">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="/ebooks">E-Books</a></li>
            <li className="nav-item"><a className="nav-link" href="/plantillas">Plantillas Editables</a></li>
            <li className="nav-item"><a className="nav-link" href="/servicios">Servicios</a></li>
            <li className="nav-item"><a className="nav-link" href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <a  href="/">
         <CartWidget/>
        </a>
      </div>
    </nav>
    </header>
  );
};

export default NavBar;
*/
