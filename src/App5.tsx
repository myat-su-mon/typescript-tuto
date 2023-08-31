import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/services/counterSlice";
import Child5 from "./Child5";
import { useGetProductsQuery } from "./redux/api/productApi";

interface Rating {
  rate: number;
  count: number;
}

export interface ProductType {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

const App5 = () => {
  const [items, setItems] = useState<ProductType[]>([]);
  const dispatch = useAppDispatch();
  const { data: products } = useGetProductsQuery();
  console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://fakestoreapi.com/products");
      const data = await res.json();
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <h2>count: {data}</h2>
      <button onClick={() => dispatch(decrement())}>Click</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>Click</button> */}
      <Child5 items={items} />
    </div>
  );
};

export default App5;
