import { useState } from "react";

export const Counter = () => {
  const [counter, funcionDelCounter] = useState(0); // [variable, funcion]

  const sumar = () => {
    funcionDelCounter(counter + 1);
  };

  const restar = () => {};

  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <h4>{counter}</h4>
      <button onClick={restar}>Restar</button>
    </div>
  );
};
