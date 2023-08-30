import Child from "./Child1";

interface User {
  id: number;
  email: string;
  age: number;
  gender?: string;
}

const App = () => {
  const name: string = "John";
  const num: number = 1;
  const fruits: string[] = ["apple", "banana", "grape"];
  const numbers: number[] = [1, 2, 3];
  const users: User[] = [
    {
      id: 1,
      email: "john1@gmail.com",
      age: 20,
      gender: "male",
    },
    { id: 2, email: "john2@gmail.com", age: 20, gender: "male" },
    { id: 3, email: "john3@gmail.com", age: 20, gender: "male" },
  ];
  const test = (num1: number, num2: number): number => num1 + num2;

  test(1, 3);

  return (
    <div>
      <Child test={test} />
    </div>
  );
};

export default App;
