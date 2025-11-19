// **slice substring**
// very similar
const smallCase = "smallcase";

const uppercase = smallCase[0].toUpperCase() + smallCase.substring(1);
console.log(smallCase);
console.log(uppercase);
const uppercase2 = smallCase.charAt(0).toUpperCase() + smallCase.slice(1);
console.log(smallCase);
console.log(uppercase2);
//
// 1. Handling of Negative Indexes
// slice(start, end): Supports negative indexes (counts from the end).
// Example: "hello".slice(-2) → "lo"
// substring(start, end): Treats negative indexes as 0.
// Example: "hello".substring(-2) → "hello"
// 2. Order of Arguments
// slice(start, end): If start > end, returns an empty string.
// "hello".slice(3, 1) → ""
// substring(start, end): If start > end, it swaps them.
// "hello".substring(3, 1) → "el"

`substring and slice are very simillar `;
// string.slice(start, end)
// Accepts negative indexes (counts from the end).
// If start > end, returns an empty string.
//   Does not swap arguments.
// string.substring(start, end)
// Negative indexes are treated as 0.
// If start > end, it swaps the arguments.
//   Always returns characters between the lower and higher index.
//   Examples:

const str = "abcdef";

str.slice(2, 4); // "cd"
str.slice(-3); // "def"
str.slice(4, 2); // "" (empty string)

str.substring(2, 4); // "cd"
str.substring(-3); // "abcdef" (treats -3 as 0)
str.substring(4, 2); // "cd" (swaps 2 and 4)
// Summary:

// Use slice if you want negative indices and stricter behavior.
// Use substring for legacy code or if you want argument swapping.
// Most developers prefer slice for its flexibility.
