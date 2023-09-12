import { useEffect, useState } from 'react';
import productosJSON from '../productos.json';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const mockAPI = (categoriaNombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log(categoriaNombre);
      if (categoriaNombre === undefined) {
        resolve(productosJSON);
      }
      else{
        const productosFiltrados = productosJSON.filter(item => item.categoria === categoriaNombre);
        resolve(productosFiltrados);
      }
    }, 2000);
  });
};

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {categoriaNombre} = useParams();

  useEffect(() => {
    mockAPI(categoriaNombre).then((data) => setProducts(data));
  }, [categoriaNombre]);

  return (
    <div className="item-list-container">
      <ItemList products={products} />
    </div>
  );
}