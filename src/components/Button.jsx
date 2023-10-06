import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Button () {

    const isDarkMode = useContext(CartContext);

    return (
        <button style={isDarkMode ? 
        {color: "white", backgroundColor: "black"} : {color: "black", backgroundColor:"white"}}>
            botton
        </button>
    )
}