// spread rest

// arrays
const numbers = [1, 2, 3, 4, 5, 6, 7];
const initiallyEmpty = [...numbers];

// tips to avoid problems with copying by ref:
// ways to achieve immutability when copying :
// 1. do not nest 🌝
// 2. const deepCopiedNumbers = JSON.parse(JSON.stringify(numbers));
// 3. use professional tools (not vanilla javascript)
//   - https://underscorejs.org
//   - https://lodash.com

// objects

const person = { name: "daniel", age: 28, pets: ["fish"] };
const doppleganger = { ...person };

// hofs and functions as first class citizens

// mayyyyybe
// async await ??
