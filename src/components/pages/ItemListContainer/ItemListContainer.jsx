import * as React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../../common/productCard";
import Grid from "@mui/material/Grid";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../../../data/ItemList.json")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <Grid container spacing={3} className="container">
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4}>
        <ProductCard
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
