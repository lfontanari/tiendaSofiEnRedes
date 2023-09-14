import { Link } from "react-router-dom";

export default function Item ({product, description}) {
     console.log(product);
     return ( 
        <Link to={`/item/${product.id}`} className="item">
        <img src={product.imagen} width={125} alt={"imagen"} />
         <h2>{product.nombre}</h2>
         
         <span>${product.precio}</span>
         </Link>
        
    )
}