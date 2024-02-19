import * as React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../../common/productCard";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../../../data/ItemList.json")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <div className="container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          className="product-card"
          title={product.title}
          desc={product.desc}
          price={product.price}
          img={product.imageName}
          extension={product.extension}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
