interface Name {
  name: string;
}

interface Num {
  num: number;
}

interface ABC {
  fruits: string[];
}

interface DEF {
  numbers: number[];
}

interface User {
  id: number;
  email: string;
  age: number;
  gender?: string;
}

interface Final {
  users: User[];
}

interface Func {
  test: (num1: number, num2: number) => number;
}

const Child = ({ test }: Func) => {
  console.log(test(2, 3));
  return <div></div>;
};

export default Child;
