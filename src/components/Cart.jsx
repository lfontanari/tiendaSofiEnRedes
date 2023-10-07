import React from 'react';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';

const Cart = ({cartItems}) => {
  const {clearCart, removeItemCart,isItemInCart} = useContext(CartContext);
  console.log(cartItems);
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
      <div className="card-container">
              {cartItems.map((item, index) => (
                <div className="card"  key={index}>
                  <div className="card-body">
                    <h5 className="card-title"> {item.nombre} </h5>
                    <p className="card-text"> P.U.:  ${item.precio}</p>  
                    <p className="card-text"> cantidad: {item.cantidad}</p>  
                    <p className="card-text"> subTotal: ${item.precio*item.cantidad}</p>  

                    <i class="bi bi-trash" onClick={() => handleDeleteItem(item.id)}></i>              
                  </div>
                </div>
              ))}
            <div className="card">
              <h4 className="card-title"> Total: ${precioTotal}</h4>
            </div>
            <br /> <br /> 
            <button class="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button>
            <br /> <br /> 
             <Link to="/checkout" class="btn btn-info">  Finalizar Compra  </Link>
             
           
      </div>
      )}
    </div>
  );
}

export default Cart
