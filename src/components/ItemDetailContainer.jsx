import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import productosJSON from '../productos.json';
import { useParams } from 'react-router-dom';

const mockAPI = (itemId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(itemId);
      if (itemId !== "") { 
        const productoEncontrado = productosJSON.find((item) => item.id === parseInt(itemId)); 
        console.log(productoEncontrado);
        resolve(productoEncontrado);
      } else {
        resolve(null); 
      }
    }, 1000);
  });
};

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null); 

  useEffect(() => {
    mockAPI(itemId).then((data) => setItem(data));
  }, [itemId]);

  if (!item) return <p>Cargando...</p>; 

  return (
    <div className="item-detail-container">
      <ItemDetail item={item} />
    </div>
  );
}
