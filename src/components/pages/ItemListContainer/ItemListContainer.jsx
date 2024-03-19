import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../common/ProductCard/productCard';
import Grid from '@mui/material/Grid';
import './ItemListContainer.css';
import { db } from '../../../FirebaseConfig';
import { collection , getDocs, query, where } from "firebase/firestore"
import { CardSkeleton } from "../../common/CardSkeleton";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [isLoading , setIsLoading] = useState(true);


  useEffect(() => {

    let productsCollection = collection(db, "products");
    
    let consulta = productsCollection;
    
    if(category && category !== "todos"){
      let productsCollectionFiltered = query(
        productsCollection, 
        where( "category" , "==" , category )
      );
    
      consulta = productsCollectionFiltered;
    } else{
      consulta = productsCollection;
    }
    
    getDocs(consulta)
    .then((res) => {
      let arrayLindo = res.docs.map((elemento, index) => {
        return { ...elemento.data(), id: elemento.id, key: index };
      });
    
      setProducts(arrayLindo);
    })
    .finally(() => setIsLoading(false));
    
    }, [category]);
    

  if (isLoading) {
    return (
      <div className="cards-container">
        {category ? (
          <>
            <CardSkeleton />
          </>
        ) : (
          <>
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
      </div>
    );
  }

  const filteredProducts = products.filter(product => {
    if (category && category != 'todos') { 
      return product.category === category; 
    } else {
      return true; 
    }
  });


  return (
    <Grid container spacing={3} className="container">
      {filteredProducts.map((product) => (
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard
            id={product.id}
            key={product.id}
            className="product-card"
            title={product.title}
            desc={product.desc}
            price={product.price}
            img={product.imageName}
            extension={product.extension}
          />
        </Grid>
      ))}
    </Grid>
  );
};


export default ItemListContainer;
