import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetail.css';
import{collection , doc , getDoc} from "firebase/firestore"
import { db } from '../../../FirebaseConfig'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const [item , setItem] = useState(null);

  useEffect(() => {

    let productsCollection = collection( db, "products" );
    let refDoc = doc(productsCollection, id)
    getDoc( refDoc ).then(res=> {
      setItem( {...res.data(), id: res.id} )
    }).finaly(()=> setIsLoading(false))

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
