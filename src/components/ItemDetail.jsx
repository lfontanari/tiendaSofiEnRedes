import React from "react";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import Cart from "./Cart";


export default function ItemDetail ({item}) {
    const { cart, addItemCart, isItemInCart, removeItemCart } = useContext(CartContext);
     
    console.log(cart);
    const [cantidad, setCantidad] = useState(1);
   
    const handleAddToCart = () => {
        addItemCart({
          id: item.id,
          categoria: item.categoria,
          nombre: item.nombre,
          precio: item.precio,
          imagen: item.imagen
        }, cantidad);    
      
    };
   
//----------------------------------------------------------------
    const [showCart, setShowCart] = useState(false);

    const handleShowCart = () => {
      setShowCart(true);
    }; 
 
    const handleCloseCart = () => {
      setShowCart(false);
    };
   

    return ( 
      <div className="item-detail">
        <img src={item.imagen} width={125} alt={"imagen"} />
        <h1>Categoria : {item.categoria}</h1>
        <h2>Nombre: {item.nombre}</h2>
        <h2>Precio: ${item.precio}</h2>
        <ItemCount count={cantidad} setCount={setCantidad} />
        <button onClick={handleAddToCart}>Agregar al carrito </button> 

        {item && <button onClick={handleShowCart}>Finalizar Compra</button>} 

        {showCart && <Cart cartItems={cart} />}

        <Link to="/"> Volver a la tienda</Link>

       </div>
   )
}


        