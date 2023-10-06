import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {categoriaNombre} = useParams();
   
  useEffect(() => {

    const db = getFirestore();
    
    let q = "";
    if (categoriaNombre === undefined)
     {  q = collection(db,"productos");
    }else {
      q = query ( collection(db, "productos"), where ("categoria","==",categoriaNombre) );
    }
    
    getDocs(q)
      .then((snapshot) => {
          if (snapshot.size > 0) { 
            setProducts(
              snapshot.docs.map((doc) => { return { id: doc.id, ...doc.data()} ;
            }));
           }
      });
      
    }, [categoriaNombre]);


  //console.log(products)
  return (

    <div className="item-list-container">
      <ItemList products={products} />
    </div>
  );
};


