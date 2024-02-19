import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ id: 1, name: "Item 1" });
        }, 2000);
      });
    };

    fetchItem().then((result) => {
      setItem(result);
    });
  }, []);

  if (!item) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="container">
      <h2>{item.name}</h2>
      <p>ID: {item.id}</p>
    </div>
  );
};

export default ItemDetailContainer;
