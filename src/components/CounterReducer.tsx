import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

// colocamos la interface pa hacerlo estricto el state
const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 15,
  changes: 20,
};

//  actions and types con Typescript way
type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

// reducer
const CounterReducer = ( state: CounterState,action: CounterAction): CounterState => {

  const {counter, changes} = state;

  switch (action.type) {
    case "reset":
      return {
        ...state,
        counter: 0,
        previous: 0,
        changes: 0,
      };

    case "increaseBy":
        return{
            ...state,
            counter:  counter + action.payload.value,
            previous: counter,
            changes:  changes + 1
        }  
 
    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(CounterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({
      type: "reset",
    });
  };

  const increaseBy = (value: number) => {
    dispatch({
      type: "increaseBy",
      payload: {value}
    });
  };

  return (
    <>
      <h1>Counter Reducer: {state.counter}</h1>

      <button onClick={() => increaseBy(1)}>+1 </button>
      <button onClick={() => increaseBy(5)}>+5 </button>
      <button onClick={() => increaseBy(10)}>+10 </button>

      <button onClick={handleReset}>reset </button>
      <hr/>

<pre>
{
          JSON.stringify(state, null, 2)
      }
</pre>
     
    </>
  );
};
