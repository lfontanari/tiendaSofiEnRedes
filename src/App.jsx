import './CSS/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import Cart from './components/Cart';


export default function App() {
  
  return (  
     <div>
        <CartProvider>     
          <BrowserRouter>
                  <NavBar />
                  <Routes>
                    <Route exact path="/" element={<ItemListContainer />}  />
                    <Route exact path="/categoria/:categoriaNombre" element={<ItemListContainer />} />
                    <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route exact path="/cart" element={<Cart />} />
                   
                  </Routes> 
          </BrowserRouter>
        </CartProvider>
    </div>
 
  )
  
}