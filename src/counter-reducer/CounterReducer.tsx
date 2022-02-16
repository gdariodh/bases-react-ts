import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";

// colocamos la interface pa hacerlo estricto el state
export const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 15,
  changes: 20,
};

export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({
      type: "reset",
    });
  };

  const increaseBy = (value: number) => {
    dispatch({
      type: "increaseBy",
      payload: { value },
    });
  };

  return (
    <>
      <h1>Counter Reducer Segmentado: {state.counter}</h1>

      <button onClick={() => increaseBy(1)}>+1 </button>
      <button onClick={() => increaseBy(5)}>+5 </button>
      <button onClick={() => increaseBy(10)}>+10 </button>

      <button onClick={handleReset}>reset </button>
      <hr />

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};
