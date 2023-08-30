import { createContext, useContext, useState } from "react";

interface ChildrenType {
  children: React.ReactNode;
}

export interface StateContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const StateContext = createContext<StateContextType>({} as StateContextType);

export const StateContextProvider = ({ children }: ChildrenType) => {
  const [count, setCount] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const data: StateContextType = { count, setCount, color, setColor };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
