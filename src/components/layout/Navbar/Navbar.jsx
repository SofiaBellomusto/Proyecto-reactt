import { Link } from "react-router-dom";
import { CartWidget } from "../../common/CartWidget.jsx";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
    <div className="Navbar">
      <h3><Link to = "/"> PUFFS.URU </Link></h3>
      <ul>        
        <li><Link to="/category/todos">Todos</Link></li>
        <li><Link to="/category/con">Con Nico</Link></li>
        <li><Link to="/category/sin">Sin Nico</Link></li>
      </ul>
      <CartWidget />
    </div>
    </>
  );
};
