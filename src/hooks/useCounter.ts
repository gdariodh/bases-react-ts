import { useState, useEffect, useRef, useLayoutEffect } from "react";
// libreria animaciones
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 5 }) => {
  const [counter, setCounter] = useState(5);

  const elementToAnimate = useRef<any>(null);

  const tl = useRef(gsap.timeline()).current; // .current para acceder a la referencia directa y no al objeto q devuelve useRef

  const handleClick = () => {
    // Math.min es para poder sumar el state +1 hasta llegar a 10 que el maximo y no pasa, es como un rango de valores numericos
    // maximo 10
    setCounter((previousValue) => Math.min(previousValue + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    // animacion con gsap

    tl.to(elementToAnimate.current, {
      y: -10,
      duration: 0.2,
      ease: "ease.out",
    }).to(elementToAnimate.current, {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    }).pause()

    // .current es para acceder al elemento html q en este caso es el h2
  }, []);

  useEffect(() => {
      tl.play()
  }, [counter]);

  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};
