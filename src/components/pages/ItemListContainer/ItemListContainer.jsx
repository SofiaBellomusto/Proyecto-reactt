import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../common/ProductCard.jsx';
import Grid from '@mui/material/Grid';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("../../../../data/ItemList.json")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  const filteredProducts = products.filter(product => {
    if (category && category != 'todos') { 
      // If a category is specified, filter accordingly
      return product.category === category; 
    } else {
      // If no category, return all products
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
