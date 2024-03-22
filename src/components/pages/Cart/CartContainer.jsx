import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContextProvider";
import Swal from "sweetalert2";
import "./Cart.css"


export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const limpiarConAlerta = () => {
    Swal.fire({
      title: "Limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No`,
    }).then((result) => {

      if (result.isConfirmed) {
        clearCart()
        Swal.fire("Eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={`../../../assets/${item.imageName}.${item.extension}`} alt={item.title} />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <h2>${item.price}.-</h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <Button variant="contained" onClick={() => removeById(item.id)}>
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button onClick={limpiarConAlerta} variant="contained">
                Vaciar carrito
              </Button>
              <Link to="/checkout">
                <Button variant="contained">Finalizar compra</Button>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Agregar productos</Button>
            </Link>
          )}

          <h1>TOTAL ${total}</h1>
        </div>
      </div>
    </div>
  );
};
  