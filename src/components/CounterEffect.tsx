import { useState, useEffect } from "react";
// libreria animaciones
import { gsap } from "gsap";

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
    if (counter < MAXIMUN_COUNT) return;

    console.log(
      "%cSe llego al valor maximo",
      "color: red; backgroud-color: black"
    );

    // animacion con gsap 
    gsap.to("h2", { y: -10, duration: 0.2, ease: "ease.out" }).then(() => {
      gsap.to("h2", { y: 0, duration: 1, ease: "bounce.out" });
    });
  }, [counter]);

  return (
    <>
      <h1>Counter Effect: </h1>

      <h2>{counter}</h2>

      <button onClick={handleClick}>+1 </button>
    </>
  );
};
