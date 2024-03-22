import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./Context/CartContextProvider";
import { AppRouter } from "./components/Router/AppRouter";
import { useContext } from 'react';


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