import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContextProvider';

export const CartWidget = () => {
  const { cart } = useContext(CartContext); 

  const totalItems = cart.reduce((total, producto) => total + producto.quantity, 0);

  return (
    <Link to="/cart">
      <Badge badgeContent={totalItems} showZero color="primary">
        <BsFillCartCheckFill size="30px" color="beige" />
      </Badge>
    </Link>
  );
}

