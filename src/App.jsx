import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <ItemListContainer greeting="¡Bienvenidos a nuestro universo marketinero!" />
      </div>
      
    </>
  )
}

export default App;
