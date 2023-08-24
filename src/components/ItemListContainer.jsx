import React from 'react';
import '../CSS/ItemListContainer.css'; 

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
