import { useState } from "react";

// establecer las props que recibe
interface Props {
  // ? hace opcional el prop
  initialValue?: number;
}

// los type son mas estrictos y no son tan extendibles, las interface son mas extendibles

// establecer como luce el counterState
interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number) => {
    //                previousValues
    setCounterState(({ counter, clicks }) => ({
      counter: counter + value,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>

      <button onClick={() => handleClick(1)}>+1 </button>
      <button onClick={() => handleClick(5)}>+5 </button>
    </>
  );
};
