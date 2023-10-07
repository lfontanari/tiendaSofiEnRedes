
import {createContext, useContext, useState} from "react";

export const CartContext = createContext([]);
// si exporto dos cosas no uso export default
// voy a exportar el componenete y el contexto 
// hago la funcion provider para proveer el contexto

export function CartProvider ({children}) {

    let [cart, setCart] = useState([]);
    let [totProductos, setTotProductos] = useState(0);
   
    function addItemCart (item, cantidad) {
        
        setCart([...cart, { ...item, cantidad}]);  // guardamos el item y la cantidad
       
        setTotProductos(totProductos + cantidad);
    
    }

    function removeItemCart (itemId) {
        let cant=0;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === itemId) {
              // Restar la cantidad del item eliminado
              
              cant=cant + cart[i].cantidad;

            }
        }
        
        setTotProductos(totProductos - cant); 
        const updateCart =  cart.filter((item) => item.id !== itemId);
        setCart(updateCart);      
        
    }

    function clearCart () {
         
        setCart([]);
        setTotProductos(0);
       
    }

    function isItemInCart (itemId) {
        return cart.some((item) => item.id === itemId);
    }

    return (
        <CartContext.Provider value={ {cart, addItemCart, removeItemCart, clearCart, isItemInCart, totProductos}}>
            {children}
        </CartContext.Provider>
    )
}