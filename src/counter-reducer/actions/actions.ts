//  actions and types con Typescript way
export type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };
