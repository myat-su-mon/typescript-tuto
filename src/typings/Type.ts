export interface ChildrenType {
  children: React.ReactNode;
}

export interface InitialStateType {
  count: number;
}

export enum CounterAction {
  increase = "increment",
  decrease = "decrement",
}

export interface ActionType {
  type: CounterAction;
  payload: number;
}
