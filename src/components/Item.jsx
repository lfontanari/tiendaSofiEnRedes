export default function Item ({product, description}) {
     return ( 
        <a href="#" className="item">
        <img src={product.imagen} width={125} alt={"imagen"} />
         <h2>{product.nombre}</h2>
         <span>${product.precio}</span>
        </a>
        
    )
}