import { ProductType } from "./App5";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getProducts } from "./redux/services/productSlice";

interface ItemType {
  items: ProductType[];
}

const Child5 = ({ items }: ItemType) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  return (
    <button
      className="bg-gray-500 text-white w-32"
      onClick={() => dispatch(getProducts(items))}
    >
      add products
    </button>
  );
};

export default Child5;
