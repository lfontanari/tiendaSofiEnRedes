/* renderizar una barra de menu NavBar con bootstrap */

import React from 'react';
import '../CSS/NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
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
  );
};

export default NavBar;

