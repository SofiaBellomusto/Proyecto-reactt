import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch("../../../../data/ItemList.json")
      .then((response) => response.json())
      .then((products) => {
        const foundProduct = products.find(item => item.id === productId); 
        console.log(foundProduct)
        setProduct(foundProduct);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-image">
        <img src={`../../../assets/${product.imageName}.${product.extension}`} alt={product.title} />
      </div>  
      <div className="item-info">
        <h2>{product.title}</h2>
        <p>{product.desc}</p>
        <h3>Price: ${product.price}</h3>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
