import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetail.css';
import { db } from '../../../FirebaseConfig';
import { collection , getDocs, query, where } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {

    let productsCollection = collection( db, "products" );
    let consulta = productsCollection ;

    if(productId){
      let productsCollectionFiltered = query(
        productsCollection, 
        where( "id" , "==" , productId )
        );

      consulta = productsCollectionFiltered;
    } else{
      consulta = productsCollection;
    }

    getDocs( consulta )
    .then((res) => {
      let arrayLindo = res.docs.map((elemento, index) => {
        return { ...elemento.data(), id: elemento.id, key: index };
      });

      // Aquí, toma el primer elemento del array
      setProduct(arrayLindo[0]);
      
    })
    .finally(() => console.log('finish'));

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
