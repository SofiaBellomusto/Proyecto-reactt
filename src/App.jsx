import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../src/components/layout/Navbar/Navbar";
import { Counter } from "./components/common/counter";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./Context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
      <div>
        <Navbar />
        <Routes> 
          <Route path="/" element={<ItemListContainer greeting="¡Hola, bienvenido a nuestra tienda!" style={{ fontSize: "24px" }} />} />
          <Route path="/category/:category" element={<ItemListContainer greeting="¡Hola, bienvenido a nuestra tienda!" style={{ fontSize: "24px" }} />}/>
          <Route path="/item/:productId" element={<ItemDetailContainer />} />
        </Routes>
        <Counter />
      </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

