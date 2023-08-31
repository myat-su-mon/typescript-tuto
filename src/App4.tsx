import { useStateContext } from "./context/StateContext4";

const App4 = () => {
  const { state, dispatch } = useStateContext();
  console.log(state.count);
  return <div>App4</div>;
};

export default App4;
