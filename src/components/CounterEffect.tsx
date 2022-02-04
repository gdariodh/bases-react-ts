import { useState, useEffect } from "react";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);

  const handleClick = () => {
    // Math.min es para poder sumar el state +1 hasta llegar a 10 que el maximo y no pasa, es como un rango de valores numericos
    // maximo 10
    setCounter((previousValue) => Math.min(previousValue + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    // clg con css
    if (counter >= MAXIMUN_COUNT) {
      console.log(
        "%cSe llego al valor maximo",
        "color: red; backgroud-color: black"
      );
    }
  }, [counter]);

  return (
    <>
      <h1>Counter Effect: {counter}</h1>

      <button onClick={handleClick}>+1 </button>
    </>
  );
};
