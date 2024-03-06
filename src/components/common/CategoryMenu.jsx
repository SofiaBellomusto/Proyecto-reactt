import productCard from "./productCard";

import React from "react";

const CategoryList = () => {
  const categories = [
    { name: "Categoría 1", url: "/categoria1" },
    { name: "Categoría 2", url: "/categoria2" },
    { name: "Categoría 3", url: "/categoria3" },
    { name: "Categoría 4", url: "/categoria4" },
    { name: "Categoría 5", url: "/categoria5" },
  ];

  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          <a href={category.url}>{category.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
