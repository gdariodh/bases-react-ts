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
   | { type: 'increaseBy', payload: {value: number}}
   | { type: 'reset' }


// reducer
const CounterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
      case 'reset':
          return{ 
            counter: 0,
            previous: 0,
            changes: 0
        }
  
      default:
          return state;
  }
}

export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(CounterReducer, INITIAL_STATE);

  const handleClick = () => {
    dispatch({
        type: 'reset'
    })
  };

  return (
    <>
      <h1>Counter Reducer: {state.counter}</h1>

      <button onClick={handleClick}>+1 </button>
    </>
  );
};
