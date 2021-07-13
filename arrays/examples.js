// 4 * 4 === 16 bytes of storage
const strings = ["a", "b", "c", "d"];

// accessing the 3rd item in strings array
console.log(strings[2]);

// push
strings.push("e"); // O(1)
console.log(strings);

// pop
strings.pop(); // O(1)
console.log(strings);

// unshift
strings.unshift("x"); // O(n)
console.log(strings);

// splice
strings.splice(2, 0, "alien"); // O(n/2) => O(n)
console.log(strings);
