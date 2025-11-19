import { z } from "zod";

const dummySchema = z.coerce.number().positive().optional();

const Zod = () => {
  const testData = [1, 2, 3];

  // this will throw a zod error
  if (dummySchema.parse(testData)) {
    return <>{testData} ok 😎</>;
  }

  // this will throw a custom error
  if (!dummySchema.safeParse(testData).success) {
    throw new Error(`zod validation errr`);
  }
  return <>{testData} ok 😎</>;
};

export default Zod;
