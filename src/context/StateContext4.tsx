import { createContext, useContext, useReducer } from "react";
import { InitialStateType, ActionType, ChildrenType } from "../typings/Type";

const initialState: InitialStateType = { count: 0 };

// @ts-ignore
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

const StateContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => {} });

export const StateContextProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
