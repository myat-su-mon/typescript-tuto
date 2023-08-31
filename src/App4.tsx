import { useReducer } from "react";

interface InitialStateType {
  count: number;
}

// interface ActionType {
//   type: CounterAction;
//   payload: number;
// }

enum CounterAction {
  increase = "increment",
  decrease = "decrement",
}

type ActionType =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

const initialState: InitialStateType = { count: 0 };

const reducer = (state: InitialStateType, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case "increment":
      return { count: state.count + payload };
    case "decrement":
      return { count: state.count - Number(payload) };
    default:
      return state;
  }
};

const App4 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: "2" })}>
        Decrement
      </button>
    </div>
  );
};

export default App4;
