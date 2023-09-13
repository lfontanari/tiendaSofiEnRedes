import { useState } from 'react'
//import './App.css'
import './CSS/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}  />
        <Route exact path="/categoria/:categoriaNombre" element={<ItemListContainer />} />
        <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes> 
    </BrowserRouter>
  )
}
//function App() {
//  return (
//    <>
//    <BrowserRouter>
//      <div>
//        <NavBar />
//      </div>
//      
//      <Routes>
//        <Route exact path="/" element={<ItemListContainer greeting="¡Bienvenidos a nuestro universo marketinero!" />}  />
//      
//      </Routes> 
//      <div>
//               <ItemCount/>
//      </div>
      
      /* aca va el footer */
//    </BrowserRouter>
//    </>
//  )
//}

//export default App;
