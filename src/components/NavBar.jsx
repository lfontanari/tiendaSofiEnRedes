import React from 'react';
import CartWidget from './CartWidget';
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
