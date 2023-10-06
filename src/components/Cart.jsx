import React from 'react';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = ({cartItems}) => {
  const {clearCart, removeItemCart,isItemInCart} = useContext(CartContext);

  const precioTotal = cartItems.reduce((total,item) => total + (item.precio * item.cantidad),0);

  const handleDeleteItem = (itemId) => {
    if (isItemInCart(itemId)) {
           removeItemCart(itemId)
    }
  };

  return (
     <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? ( <p>El carrito esta vacío</p>    ) : (
      <div>

            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <div>
                    {item.nombre}: ${item.precio} cantidad: {item.cantidad}
                    subTotal: ${item.precio*item.cantidad}
                    <i class="bi bi-trash" onClick={() => handleDeleteItem(item.id)}></i>              
                  </div>
                </li>
              ))}
            </ul>
            <p>Total: ${precioTotal}</p>
            <br /> <br /> 
            <button class="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button>
            <br /> <br /> 
            <a href="/checkout">
              <button class="btn btn-info">Finalizar Compra</button>
            </a>
      </div>
      )}
    </div>
  )
}

export default Cart
