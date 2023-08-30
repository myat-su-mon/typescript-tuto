interface CountFunc {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface Final<T> {
  names: T[];
}

const Child2 = <T extends string | number | {}>({ names }: Final<T>) => {
  console.log(names);
  return <div>hi</div>;
};

export default Child2;
