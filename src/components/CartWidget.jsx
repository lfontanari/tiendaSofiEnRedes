import React, {useState, useContext} from 'react';
import { CartContext } from "../context/CartContext";
import Cart from './Cart';


const CartWidget = () => {

  const {totProductos, cart} = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
    <img src="../src/assets/cart-svgrepo-com.svg" onClick={toggleCart} alt="Carrito" height="50px" width="50px"></img>
     <p>{totProductos}</p>
    {isCartOpen && <Cart cartItems={cart}/>}
    </div>
  );
};
export default CartWidget;