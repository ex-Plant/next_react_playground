import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function test(...arg: any) {
  console.log(arg);
  console.log(arguments);
}

test(1, 2, 3);
// e spread syntax (...) before the parameter name  makes it a "rest parameter". This means:
//   You can pass any number of arguments to the function.
// All the arguments will be collected into a single array called classes.
//   For example:
// cn('foo', 'bar', 'baz');
// Inside the function: classes = ['foo', 'bar', 'baz']

// So, ...classes allows the function to accept any number of arguments and access them as an array inside the function.

export function cnExpanded(...inputs: []) {
  // rest operator - collects all function arguments and creates an array ot arguments from it

  // inputs can be anything that you pass to className in a react component, like strings,
  // objects etx
  const inputsTransformed = clsx(inputs);

  const inputsWithResolvedClassConflicts = twMerge(inputsTransformed);

  return inputsWithResolvedClassConflicts;
}

export default function cn(...inputs: unknown[]) {
  return twMerge(clsx(inputs));
}
