import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import { AppRouter } from "./components/Router/AppRouter";
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

function MiComponente() {
  const { cart, addToCart, ...otros } = useContext(CartContext);
}
const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
       <AppRouter />
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;