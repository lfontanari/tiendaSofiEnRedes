import React from "react";

export default function ItemDetail ({item}) {
    //console.log(item);
    return ( 
      
      <div className="item-detail">
        <img src={item.imagen} width={125} alt={"imagen"} />
        <h1>Categoria : {item.categoria}</h1>
        <h2>Nombre: {item.nombre}</h2>
        <span>Precio: ${item.precio}</span>
       </div>
       
   )
}