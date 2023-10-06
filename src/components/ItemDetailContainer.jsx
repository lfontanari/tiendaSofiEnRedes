import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {
 
  const [item, setItem] = useState("");
  let { itemId } = useParams();
  itemId= parseInt(itemId,10);
  
  useEffect(() => {
    const db = getFirestore();
   
    const q = query(collection(db, "productos"), where("id", "==",itemId));

    getDocs(q)
      .then((snapshot) => {
        
        if (snapshot.size > 0) {
          const doc = snapshot.docs[0];
          const itemData = { id: doc.id, ...doc.data() };
          setItem(itemData);
        } else {
          setItem(null);
        }
      })
      .catch((error) => {
        console.error('Error al recuperar el elemento:', error);
      });
  }, [itemId]);

  if (item === null) {
    return <p>Cargando...</p>;
  }



  return (
    <div className="item-detail-container">
      <ItemDetail item={item} />
    </div>
  );
}

