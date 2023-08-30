import { useState } from "react";
import Child2 from "./Child2";

interface BasicType {
  id: number;
  name: string;
}
interface User extends BasicType {
  email: string;
  password: string;
}

interface Product extends BasicType {
  price: number;
}

const App2 = () => {
  //   const [user, setUser] = useState<User>({
  //     id: 1,
  //     name: "su",
  //     email: "su@gmail.com",
  //     password: "hello",
  //   });
  const [product, setProduct] = useState<Product>({
    id: 1,
    name: "shirt",
    price: 1200,
  });

  const [count, setCount] = useState<number>(0);
  const [title, setTitle] = useState<string>("");

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const numbers: number[] = [1, 2, 3];
  const names: string[] = ["chris", "james", "john"];
  const users: User[] = [
    {
      id: 1,
      name: "su",
      email: "su@gmail.com",
      password: "hello",
    },
  ];

  return (
    <div>
      <h1>Count: {count}</h1>
      <Child2 names={users} />
      <h1>Title: {title}</h1>
      <input type="text" value={title} onChange={(e) => changeTitle(e)} />
    </div>
  );
};

export default App2;
