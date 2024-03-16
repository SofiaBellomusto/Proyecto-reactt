export const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };
  
  export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      if (products.length > 0) {
        const item = products.find((product) => product.id === id);
  
        setTimeout(() => {
          if (item) {
            resolve(item);
          } else {
            reject(`No se encuentra el producto con el id ${id}`);
          }
        }, 500);
      } else {
        reject("No hay productos");
      }
    });
  };