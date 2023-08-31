import { StateContextType, useStateContext } from "./context/StateContext3";

const App3 = () => {
  const { count, setCount, color, setColor } =
    useStateContext() as StateContextType;
  console.log(count, setCount);

  return (
    <div className="m-24">
      <div
        style={{ backgroundColor: `${color}` }}
        className="h-72 w-72 border border-gray-700"
      ></div>
      <input
        type="text"
        className="mt-2 p-2 border border-gray-700"
        placeholder="type color name"
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default App3;
