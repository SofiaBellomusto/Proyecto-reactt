import { CartWidget } from "../../common/CartWidget.jsx";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <h3>PUFFS.URU</h3>
      <ul>
        <li>Todos</li>
        <li>Zero</li>
        <li>Bali</li>
        <li>Chufi</li>
        <li>ElfWorld</li>
      </ul>
      <h4>Carrito</h4>
      <CartWidget />
    </div>
  );
};
