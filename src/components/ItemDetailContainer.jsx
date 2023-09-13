import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import productosJSON from '../productos.json';
import { useParams } from 'react-router-dom';

const mockAPI = (itemId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //console.log(itemId);
        if (itemId < 1) {
          
          resolve(productosJSON);
        }
        else{
          const productosFiltrados = productosJSON.filter(item => item.id === itemId);
          resolve(productosFiltrados);
        }
      }, 2000);
    });
  };



export default function ItemDetailContainer() {
    const {itemId} = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        mockAPI(itemId).then((data) => setItem(data));
      }, [itemId]);



    //if (!item) return null;

    return (
        <div className="item-detail-container">
            <ItemDetail item={item} />
        </div>
    );
}