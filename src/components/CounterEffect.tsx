import { useState, useEffect, useRef } from "react";
// libreria animaciones
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);

  const counterElement = useRef<HTMLHeadingElement>(null);

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
    const tl = gsap.timeline();

    tl.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      ease: "ease.out",
    }).to(counterElement.current, {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    });

    // .current es para acceder al elemento html q en este caso es el h2
  }, [counter]);

  return (
    <>
      <h1>Counter Effect: </h1>

      <h2 ref={counterElement}>{counter}</h2>

      <button onClick={handleClick}>+1 </button>
    </>
  );
};
