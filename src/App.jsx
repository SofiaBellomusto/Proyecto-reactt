import { useState } from "react";
import { Navbar } from "../src/components/layout/Navbar/Navbar";
import { Counter } from "./components/common/counter";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import CategoryMenu from "./components/common/CategoryMenu";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <Navbar />
      <Counter />
      <ItemListContainer
        greeting="¡Hola, bienvenido a nuestra tienda!"
        style={{ fontSize: "24px" }}
      />
      <CategoryMenu />
      <ItemDetailContainer />
    </div>
  );
}

export default App;

// <>
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src={viteLogo} className="logo" alt="Vite logo" />
//     </a>
//     <a href="https://react.dev" target="_blank">
//       <img src={reactLogo} className="logo react" alt="React logo" />
//     </a>
//   </div>
//   <h1>Vite + React</h1>
//   <div className="card">
//     <button onClick={() => setCount((count) => count + 1)}>
//       count is {count}
//     </button>
//     <p>
//       Edit <code>src/App.jsx</code> and save to test HMR
//     </p>
//   </div>
//   <p className="read-the-docs">
//     Click on the Vite and React logos to learn more
//   </p>
// </>
