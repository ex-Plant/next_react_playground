// *extracting a part of some type*
const test = {
  name: ``,
  data: {
    name: ``,
  },
};

type TestData = (typeof test)[`data`];

// *Extending interface without extend*
interface TestI {
  name: string;
}

interface TestI {
  age: number;
}

// Now interface TestI has both age and name
// Basically it works a little bit like overwriting vars so it is a little bit confusing

type PersonT = {
  name: string;
  age: number;
};

interface PersonI {
  name: string;
  age: number;
}

class Person implements PersonT {
  name: string;
  //@ts-expect-error
  age: string;

  constructor(name: string, age: number) {
    this.name = name;
    //@ts-expect-error
    this.age = age; // ts error
  }
  get() {}
  set() {}
  printPerson() {
    console.log(`ha ha ha `);
  }
}

class Person2 implements PersonI {
  name: string;
  age: number;
  id: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.id = "@id" + age + name;
  }
}

export const Component = () => {
  return <>client_server</>;
};
